import { IStreamLogger } from "../../core/handlers/stream-logger.interface";

export class ConsoleLogger implements IStreamLogger {
    private static logger: ConsoleLogger;

    private constructor() {}

    log(...args: any[]): void {
        console.log("log");
    }
    error(...args: any[]): void {
        console.log("error");
    }
    end(): void {
        console.log("Done!");
    }

    public static getInstance(): ConsoleLogger {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }
        return ConsoleLogger.logger;
    }
}

export default ConsoleLogger;
