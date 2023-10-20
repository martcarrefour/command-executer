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
import inquirer from "inquirer";
(function convert() {
    return __awaiter(this, void 0, void 0, function* () {
        const { result: width } = yield inquirer.prompt([
            {
                type: "number",
                name: "result",
                message: "Ширина",
            },
        ]);
        const { result: height } = yield inquirer.prompt([
            {
                type: "number",
                name: "result",
                message: "Высота",
            },
        ]);
        const { result: path } = yield inquirer.prompt([
            {
                type: "input",
                name: "result",
                message: "Путь",
            },
        ]);
        const { result: name } = yield inquirer.prompt([
            {
                type: "input",
                name: "result",
                message: "Название",
            },
        ]);
        const res = spawn("ffmpeg", [
            "-i",
            path,
            "-c:v",
            "libx264",
            "-s",
            `${width}x${height}`,
            path + name + ".mp4",
        ]);
        res.stdout.on("data", (data) => {
            console.log(data.toString());
        });
        res.stderr.on("data", (data) => {
            console.log(data.toString());
        });
        res.on("close", () => {
            console.log("Done!");
        });
    });
})();
