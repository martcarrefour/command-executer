"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const inquirer_1 = __importDefault(require("inquirer"));
(function convert() {
    return __awaiter(this, void 0, void 0, function* () {
        const { result: width } = yield inquirer_1.default.prompt([
            {
                type: "number",
                name: "result",
                message: "Ширина",
            },
        ]);
        const { result: height } = yield inquirer_1.default.prompt([
            {
                type: "number",
                name: "result",
                message: "Высота",
            },
        ]);
        const { result: path } = yield inquirer_1.default.prompt([
            {
                type: "input",
                name: "result",
                message: "Путь",
            },
        ]);
        const { result: name } = yield inquirer_1.default.prompt([
            {
                type: "input",
                name: "result",
                message: "Название",
            },
        ]);
        const res = (0, child_process_1.spawn)("ffmpeg", [
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
