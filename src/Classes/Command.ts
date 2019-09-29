import * as Discord from "discord.js";
import {Music} from "./Music"

export interface Command {
    help(): string;
    isThisCommand(command: string): boolean;
    exec(Bot: Music, message: Discord.Message, args: string[]): Promise<void>;
}