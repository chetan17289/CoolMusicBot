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
const Discord = require("discord.js");
class ping {
    constructor() {
        this._readonly = "eval";
    }
    help() {
        return "This evals the bot!";
    }
    isThisCommand(command) {
        return command === this._readonly;
    }
    exec(MC, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (message.author.id !== "486743617973649408")
                return;
            try {
                let code = args.join(" ");
                let res;
                console.log(code);
                if (code.includes("--async")) {
                    res = `(async () => {\n${code.split("--async")[0]}\n})();`;
                    code = res;
                }
                console.log(code);
                let evaled = eval(code);
                let embed = new Discord.MessageEmbed()
                    .addField(`Type: `, `\`\`\`${typeof evaled}\`\`\``);
                if (typeof evaled !== "string")
                    evaled = require("util").inspect(evaled);
                embed.setColor("GREEN");
                embed.addField("Input: 📥", `\`\`\`js\n${clean(code)}\`\`\``);
                embed.addField(`Output: 📤`, `\`\`\`js\n${clean(evaled)}\`\`\``);
                message.channel.send(embed);
            }
            catch (err) {
                let embed = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setDescription(`\`\`\`js\n${clean(err)}\`\`\``);
                message.channel.send(embed);
            }
        });
    }
}
exports.default = ping;
const clean = (text) => {
    if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21tYW5kcy9ldmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsc0NBQXNDO0FBS3RDLE1BQXFCLElBQUk7SUFBekI7UUFFWSxjQUFTLEdBQUcsTUFBTSxDQUFDO0lBZ0UvQixDQUFDO0lBOURHLElBQUk7UUFFQSxPQUFPLHFCQUFxQixDQUFBO0lBRWhDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUV6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBRXRDLENBQUM7SUFFSyxJQUFJLENBQUMsRUFBUyxFQUFFLE9BQXdCLEVBQUUsSUFBYzs7WUFJMUQsSUFBSSxPQUFPLENBQUMsTUFBTyxDQUFDLEVBQUUsS0FBSyxvQkFBb0I7Z0JBQUUsT0FBTztZQUV4RCxJQUFJO2dCQUNBLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLElBQUksR0FBRyxDQUFDO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBRWpCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFFMUIsR0FBRyxHQUFHLG1CQUFtQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7b0JBRTFELElBQUksR0FBRyxHQUFHLENBQUM7aUJBR2Q7Z0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFFakIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7cUJBQ3JDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsU0FBUyxPQUFPLE1BQU0sUUFBUSxDQUFDLENBQUM7Z0JBRXBELElBQUksT0FBTyxNQUFNLEtBQUssUUFBUTtvQkFDMUIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRTdDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3ZCLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLGFBQWEsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDN0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsYUFBYSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUloRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUVWLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtxQkFDckMsUUFBUSxDQUFDLEtBQUssQ0FBQztxQkFDZixjQUFjLENBQUMsYUFBYSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUVoRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUcvQjtRQUVMLENBQUM7S0FBQTtDQUdKO0FBbEVELHVCQWtFQztBQUVELE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7SUFDM0IsSUFBSSxPQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUTtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztRQUV4RyxPQUFPLElBQUksQ0FBQztBQUNsQixDQUFDLENBQUEifQ==