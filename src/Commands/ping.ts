import { Command } from "../Classes/Command";

import * as Discord from "discord.js";

import { Music } from "../Classes/Music"


export default class ping implements Command {

    private _readonly = "ping";

    help(): string {

        return "This pings the bot!"

    }

    isThisCommand(command: string): boolean {

        return command === this._readonly;

    }

    async exec(MC: Music, message: Discord.Message, args: string[]): Promise<void> {



        message.reply("Yo")


    }


}