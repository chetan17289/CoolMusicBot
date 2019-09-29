import { Command } from "../Classes/Command";

import * as Discord from "discord.js";

import { Music } from "../Classes/Music"


export default class ping implements Command {

    private _readonly = "loop";

    help(): string {

        return "Loops the queue!"

    }

    isThisCommand(command: string): boolean {

        return command === this._readonly;

    }

    async exec(MC: Music, message: Discord.Message, args: string[]): Promise<void> {

        if (!message.member!.voice.channel) {  message.reply("You are not in a voice channel!")}

        if (message.guild!.me!.voice.channel && message.guild!.me!.voice.channelID !== message.member!.voice.channelID ) { message.reply("We are not in the same channel!")}


        if (!MC.queue[message.guild!.id]) { message.reply("There's nothing in the queue to loop!")}

        if (MC.queue[message.guild!.id].loop) {
            MC.queue[message.guild!.id].loop = false
        } else {
            MC.queue[message.guild!.id].loop = true;

        }


        message.channel.send("Sucessfully changed the loop settings to " + MC.queue[message.guild!.id].loop)


    }


}