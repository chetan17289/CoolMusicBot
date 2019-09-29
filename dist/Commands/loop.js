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
        this._readonly = "loop";
    }
    help() {
        return "Loops the queue!";
    }
    isThisCommand(command) {
        return command === this._readonly;
    }
    exec(MC, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!message.member.voice.channel) {
                message.reply("You are not in a voice channel!");
            }
            if (message.guild.me.voice.channel && message.guild.me.voice.channelID !== message.member.voice.channelID) {
                message.reply("We are not in the same channel!");
            }
            if (!MC.queue[message.guild.id]) {
                message.reply("There's nothing in the queue to loop!");
            }
            if (MC.queue[message.guild.id].loop) {
                MC.queue[message.guild.id].loop = false;
            }
            else {
                MC.queue[message.guild.id].loop = true;
            }
            message.channel.send("Sucessfully changed the loop settings to " + MC.queue[message.guild.id].loop);
        });
    }
}
exports.default = ping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9vcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21tYW5kcy9sb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0EsTUFBcUIsSUFBSTtJQUF6QjtRQUVZLGNBQVMsR0FBRyxNQUFNLENBQUM7SUFxQy9CLENBQUM7SUFuQ0csSUFBSTtRQUVBLE9BQU8sa0JBQWtCLENBQUE7SUFFN0IsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBRXpCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUM7SUFFdEMsQ0FBQztJQUVLLElBQUksQ0FBQyxFQUFTLEVBQUUsT0FBd0IsRUFBRSxJQUFjOztZQUUxRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQTthQUFDO1lBRXhGLElBQUksT0FBTyxDQUFDLEtBQU0sQ0FBQyxFQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBTSxDQUFDLEVBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRztnQkFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7YUFBQztZQUdwSyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQTthQUFDO1lBRTNGLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRTtnQkFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7YUFDM0M7aUJBQU07Z0JBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFFM0M7WUFHRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywyQ0FBMkMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7UUFHeEcsQ0FBQztLQUFBO0NBR0o7QUF2Q0QsdUJBdUNDIn0=