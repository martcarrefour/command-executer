import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { IStreamLogger } from "../../core/handlers/stream-logger.interface";
import { ICommandExec } from "../../core/executor/command.types";
import { CommandExecutor } from "../../core/executor/command.executor.js";
import { PromptService } from "../../core/prompt/prompt.service.js";
import { DirBuiolder } from "./dir.buildor.js";
import { StreamHandler } from "../../core/handlers/stream.handler.js";
import { DirInput } from "./dir.types.js";

export class DirExecutor extends CommandExecutor<DirInput> {
    private promptService: PromptService = new PromptService();

    constructor(logger: IStreamLogger) {
        super(logger);
    }

    protected async prompt(): Promise<DirInput> {
        let path = await this.promptService.input<string>("Path", "input");
        return { path };
    }
    protected build({ path }: DirInput): ICommandExec {
        const args = new DirBuiolder().detailedOutput().output();
        return { command: "ls", args: args.concat(path) };
    }
    protected swpan({
        command,
        args,
    }: ICommandExec): ChildProcessWithoutNullStreams {
        return spawn(command, args);
    }
    protected processStream(
        stream: ChildProcessWithoutNullStreams,
        output: IStreamLogger
    ): void {
        const handler = new StreamHandler(output);
        handler.processOutput(stream);
    }
}
