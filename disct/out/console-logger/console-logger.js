export class ConsoleLogger {
    constructor() { }
    log(...args) {
        console.log("log");
    }
    error(...args) {
        console.log("error");
    }
    end() {
        console.log("Done!");
    }
    static getInstance() {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }
        return ConsoleLogger.logger;
    }
}
export default ConsoleLogger;
