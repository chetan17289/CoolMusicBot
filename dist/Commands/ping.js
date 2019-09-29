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
class ping {
    constructor() {
        this._readonly = "ping";
    }
    help() {
        return "This pings the bot!";
    }
    isThisCommand(command) {
        return command === this._readonly;
    }
    exec(MC, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            let test = (string = "test", callback) => {
                callback(string);
            };
            test("Minecraft", (err) => {
                console.log(err);
            });
        });
    }
}
exports.default = ping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21tYW5kcy9waW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0EsTUFBcUIsSUFBSTtJQUF6QjtRQUVZLGNBQVMsR0FBRyxNQUFNLENBQUM7SUFpQy9CLENBQUM7SUEvQkcsSUFBSTtRQUVBLE9BQU8scUJBQXFCLENBQUE7SUFFaEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBRXpCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUM7SUFFdEMsQ0FBQztJQUVLLElBQUksQ0FBQyxFQUFTLEVBQUUsT0FBd0IsRUFBRSxJQUFjOztZQUkxRCxJQUFJLElBQUksR0FBRyxDQUFDLFNBQWlCLE1BQU0sRUFBRSxRQUFhLEVBQUUsRUFBRTtnQkFFbEQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBRXBCLENBQUMsQ0FBQTtZQUdELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNwQixDQUFDLENBQUMsQ0FBQTtRQUdOLENBQUM7S0FBQTtDQUdKO0FBbkNELHVCQW1DQyJ9