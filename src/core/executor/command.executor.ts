// ввод данных
// билд комманды
// swpan
// process stream

import { ChildProcessWithoutNullStreams } from "child_process";
import { IStreamLogger } from "../handlers/stream-logger.interface";
import { ICommandExec } from "./command.types";

export abstract class CommandExecutor<Input> {
    constructor(private logger: IStreamLogger) {}

    public async execute() {
        const input = await this.prompt();
        const command = this.build(input);
        const stream = this.swpan(command);
        this.processStream(stream, this.logger);
    }

    protected abstract prompt(): Promise<Input>;
    protected abstract build(input: Input): ICommandExec;
    protected abstract swpan(
        command: ICommandExec
    ): ChildProcessWithoutNullStreams;

    protected abstract processStream(
        stream: ChildProcessWithoutNullStreams,
        logger: IStreamLogger
    ): void;
}
