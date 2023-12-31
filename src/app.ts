import { DirExecutor } from "./commands/dir/dir.executor.js";
import { FfmpegExecutor } from "./commands/ffmpeg/ffmpeg.executor.js";
import ConsoleLogger from "./out/console-logger/console-logger.js";

export class App {
    async run() {
        // new FfmpegExecutor(ConsoleLogger.getInstance()).execute();
        new DirExecutor(ConsoleLogger.getInstance()).execute();
    }
}

const app = new App();

app.run();
