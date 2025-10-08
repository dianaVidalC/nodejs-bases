import { buildLogger, logger as winstonLogger } from "../../src/plugins";

describe('plugins/logger.plugin', () => {
    test('buildLogger should return a function logger', () => {
        const logger = buildLogger('test-service');
        expect(logger).toHaveProperty('log');
        expect(logger).toHaveProperty('error');
        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });
    test('logger.log should log a message', () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'info');
        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);
        logger.log(message);

        expect(winstonLoggerMock).toHaveBeenCalledWith(
            expect.objectContaining({
            level: 'info',
            message,
            service,
        }));
    });
    test('logger.error should log an error message', () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'error');
        const message = 'test error message';
        const service = 'test service';
        const logger = buildLogger(service);
        logger.error(message);
        expect(winstonLoggerMock).toHaveBeenCalledWith(
            expect.objectContaining({
            level: 'error',
            message,
            service,
        }));
        winstonLoggerMock.mockRestore();
    });
});