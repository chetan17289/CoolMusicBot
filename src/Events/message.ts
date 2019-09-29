import MC from "../index";
import * as Discord from "discord.js";

MC.on("message", async (msg: Discord.Message) => {


    if (msg.author!.bot) return;

    if (!msg.content.startsWith(".")) return;

    let args = msg.content.slice(1).trim().split(/\s/g);

    let command = args.shift()!.toLowerCase();

    let cmd;

    if (MC.commands.has(command)) {
        cmd = MC.commands.get(command);
    };

    if (cmd) (new cmd()).exec(MC, msg, args);

})