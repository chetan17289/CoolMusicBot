import { Command } from "../Classes/Command";

import * as Discord from "discord.js";

import { Music } from "../Classes/Music"


export default class ping implements Command {

    private _readonly = "eval";

    help(): string {

        return "This evals the bot!"

    }

    isThisCommand(command: string): boolean {

        return command === this._readonly;

    }

    async exec(MC: Music, message: Discord.Message, args: string[]): Promise<void> {



        if (message.author!.id !== "486743617973649408") return;

        try {
            let code = args.join(" ");
            let res;
            console.log(code)

            if (code.includes("--async")) {

                res = `(async () => {\n${code.split("--async")[0]}\n})();`

                code = res;


            }

            console.log(code)

            let evaled = eval(code);
            let embed = new Discord.MessageEmbed()
            .addField(`Type: `, `\`\`\`${typeof evaled}\`\`\``);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

            embed.setColor("GREEN")
            embed.addField("Input: 📥", `\`\`\`js\n${clean(code)}\`\`\``)
            embed.addField(`Output: 📤`, `\`\`\`js\n${clean(evaled)}\`\`\``)



            message.channel.send(embed);
        } catch (err) {

            let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(`\`\`\`js\n${clean(err)}\`\`\``)

            message.channel.send(embed);


        }

    }


}

const clean = (text: string) => {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }