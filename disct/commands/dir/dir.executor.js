var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { spawn } from "child_process";
import { CommandExecutor } from "../../core/executor/command.executor.js";
import { PromptService } from "../../core/prompt/prompt.service.js";
import { DirBuiolder } from "./dir.buildor.js";
import { StreamHandler } from "../../core/handlers/stream.handler.js";
export class DirExecutor extends CommandExecutor {
    constructor(logger) {
        super(logger);
        this.promptService = new PromptService();
    }
    prompt() {
        return __awaiter(this, void 0, void 0, function* () {
            let path = yield this.promptService.input("Path", "input");
            return { path };
        });
    }
    build({ path }) {
        const args = new DirBuiolder().detailedOutput().output();
        return { command: "ls", args: args.concat(path) };
    }
    swpan({ command, args, }) {
        return spawn(command, args);
    }
    processStream(stream, output) {
        const handler = new StreamHandler(output);
        handler.processOutput(stream);
    }
}
