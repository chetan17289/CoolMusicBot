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
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
index_1.default.on("message", (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.author.bot)
        return;
    if (!msg.content.startsWith("."))
        return;
    let args = msg.content.slice(1).trim().split(/\s/g);
    let command = args.shift().toLowerCase();
    let cmd;
    if (index_1.default.commands.has(command)) {
        cmd = index_1.default.commands.get(command);
    }
    ;
    if (cmd)
        (new cmd()).exec(index_1.default, msg, args);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FdmVudHMvbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9DQUEwQjtBQUcxQixlQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFPLEdBQW9CLEVBQUUsRUFBRTtJQUc1QyxJQUFJLEdBQUcsQ0FBQyxNQUFPLENBQUMsR0FBRztRQUFFLE9BQU87SUFFNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUFFLE9BQU87SUFFekMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUUxQyxJQUFJLEdBQUcsQ0FBQztJQUVSLElBQUksZUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDMUIsR0FBRyxHQUFHLGVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xDO0lBQUEsQ0FBQztJQUVGLElBQUksR0FBRztRQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==