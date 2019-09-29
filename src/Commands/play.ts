import { Command } from "../Classes/Command";

import * as Discord from "discord.js";

import { Music } from "../Classes/Music"

import * as Axios from "axios";

import {URLSearchParams} from "url"



export default class ping implements Command {

    private _readonly = "play";

    help(): string {

        return "This plays music from the MC!"

    }

    isThisCommand(command: string): boolean {

        return command === this._readonly;

    }

    async exec(MC: Music, message: Discord.Message, args: string[]): Promise<void> {

        if (!message.guild) return;

        if (!message.member!.voice.channel) return;

        if (!MC.queue[message.guild.id]) {
            MC.queue[message.guild.id] = {
                queue: [],
                loop: false
            }
        }


        let queue = MC.queue[message.guild.id].queue;

        let videoArray: any = [];

        let player = await MC.manager.join({
            guild: message.guild.id,
            channel: message.member!.voice.channel.id,
            host: "localhost"
        }, { selfdeaf: true });


        getSongs(`ytsearch:` + args.join(" "), MC)
            .then(async s => {

                for (let i = 0; i < s.tracks.length; i++) {
                    videoArray.push(`**${i + 1}**. ${s.tracks[i].info.title} `)
                }

                videoArray.push("exit");

                const vidEmbed = new Discord.MessageEmbed()
                    .setColor("AQUA")
                    .setTitle(" Please Choose a song! By typing in a number!")
                    .setDescription(`
                
                ${videoArray[0]}
                ${videoArray[1]}
                ${videoArray[2]}
                ${videoArray[3]}
                ${videoArray[4]}

                
                `)

                    .setFooter("Type exit to cancel the request")

                let embed = await message.channel.send(vidEmbed);

                embed.channel.awaitMessages((m) => (m as Discord.Message).author!.id === message.author!.id, {
                    max: 1,
                    maxProcessed: 1
                }).then(async collected => {

                    if (collected.map(s => s.content)[0].toLowerCase() === 'exit') return embed.delete();


                    let choose = collected.map(s => s.content)[0] as unknown as number;

                    console.log(MC.queue[message.guild!.id].queue.length)

                    if (MC.queue[message.guild!.id].queue.length <= 0) {

                        queue.push(s.tracks[choose - 1].track)

                        play(MC, message, player)

                        return message.reply("Now playing the song!")

                    }

                    else if (MC.queue[message.guild!.id].queue.length > 0) {

                        queue.push(s.tracks[choose - 1].track)

                        return message.reply("Added the song to the queue")

                    }
                })


                // player.play(s.tracks[0].track)



            })


    }
};

async function play(client: Music, msg: Discord.Message, player: any) {

    let queue = client.queue[msg.guild!.id].queue;

    console.log(queue);

    player.play(queue[0])

        .on("end", async (data: any) => {

            if (data.reason === "REPLACED") return;

            if (client.queue[msg.guild!.id].loop === true) {

                queue.push(queue.shift());


                return player.play(queue[0])


            } else if (client.queue[msg.guild!.id].loop === false) {

                if (!queue[0]) {
                    player.disconnect()
                    client.manager.leave(msg.member!.guild.id)
                    return msg.channel.send("No more songs in the queue disconnecting....");
                }

                player.play(queue[0])

                return msg.channel.send("New song is playing")
            }

        })
        .on("error", (Err: any) => console.error(Err));


}




async function getSongs(search: string = "atlas - fix this", Bot: Music) {

    const node = Object.values(Bot.nodes[0])

    const params = new URLSearchParams();
    params.append("identifier", search);

    let { data } = await Axios.default.get(`http://${node[0]}:${node[1]}/loadtracks?${params.toString()}`, { headers: { Authorization: node[2] } });

    return data;
}