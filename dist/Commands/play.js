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
const Axios = require("axios");
const url_1 = require("url");
class ping {
    constructor() {
        this._readonly = "play";
    }
    help() {
        return "This plays music from the MC!";
    }
    isThisCommand(command) {
        return command === this._readonly;
    }
    exec(MC, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!message.guild)
                return;
            if (!message.member.voice.channel)
                return;
            if (!MC.queue[message.guild.id]) {
                MC.queue[message.guild.id] = {
                    queue: [],
                    loop: false
                };
            }
            let queue = MC.queue[message.guild.id].queue;
            let videoArray = [];
            let player = yield MC.manager.join({
                guild: message.guild.id,
                channel: message.member.voice.channel.id,
                host: "localhost"
            }, { selfdeaf: true });
            getSongs(`ytsearch:` + args.join(" "), MC)
                .then((s) => __awaiter(this, void 0, void 0, function* () {
                for (let i = 0; i < s.tracks.length; i++) {
                    videoArray.push(`**${i + 1}**. ${s.tracks[i].info.title} `);
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
                    .setFooter("Type exit to cancel the request");
                let embed = yield message.channel.send(vidEmbed);
                embed.channel.awaitMessages((m) => m.author.id === message.author.id, {
                    max: 1,
                    maxProcessed: 1
                }).then((collected) => __awaiter(this, void 0, void 0, function* () {
                    if (collected.map(s => s.content)[0].toLowerCase() === 'exit')
                        return embed.delete();
                    let choose = collected.map(s => s.content)[0];
                    console.log(MC.queue[message.guild.id].queue.length);
                    if (MC.queue[message.guild.id].queue.length <= 0) {
                        queue.push(s.tracks[choose - 1].track);
                        play(MC, message, player);
                        return message.reply("Now playing the song!");
                    }
                    else if (MC.queue[message.guild.id].queue.length > 0) {
                        queue.push(s.tracks[choose - 1].track);
                        return message.reply("Added the song to the queue");
                    }
                }));
            }));
        });
    }
}
exports.default = ping;
;
function play(client, msg, player) {
    return __awaiter(this, void 0, void 0, function* () {
        let queue = client.queue[msg.guild.id].queue;
        console.log(queue);
        player.play(queue[0])
            .on("end", (data) => __awaiter(this, void 0, void 0, function* () {
            if (data.reason === "REPLACED")
                return;
            queue.shift();
            if (client.queue[msg.guild.id].loop === true) {
                if (!queue[0]) {
                    player.disconnect();
                    client.manager.leave(msg.member.guild.id);
                    return msg.channel.send("No more songs in the queue disconnecting....");
                }
                queue.push(queue.shift);
                console.log(queue);
                return player.play(queue[0]);
            }
            else if (client.queue[msg.guild.id].loop === false) {
                if (!queue[0]) {
                    player.disconnect();
                    client.manager.leave(msg.member.guild.id);
                    return msg.channel.send("No more songs in the queue disconnecting....");
                }
                player.play(queue[0]);
                return msg.channel.send("New song is playing");
            }
        }))
            .on("error", (Err) => console.error(Err));
    });
}
function getSongs(search = "atlas - fix this", Bot) {
    return __awaiter(this, void 0, void 0, function* () {
        const node = Object.values(Bot.nodes[0]);
        const params = new url_1.URLSearchParams();
        params.append("identifier", search);
        let { data } = yield Axios.default.get(`http://${node[0]}:${node[1]}/loadtracks?${params.toString()}`, { headers: { Authorization: node[2] } });
        return data;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21tYW5kcy9wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsc0NBQXNDO0FBSXRDLCtCQUErQjtBQUUvQiw2QkFBc0M7QUFRdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVZLGNBQVMsR0FBRyxNQUFNLENBQUM7SUEwRy9CLENBQUM7SUF4R0csSUFBSTtRQUVBLE9BQU8sK0JBQStCLENBQUE7SUFFMUMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBRXpCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUM7SUFFdEMsQ0FBQztJQUVLLElBQUksQ0FBQyxFQUFTLEVBQUUsT0FBd0IsRUFBRSxJQUFjOztZQUUxRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7Z0JBQUUsT0FBTztZQUUzQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTztnQkFBRSxPQUFPO1lBRTNDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRztvQkFDekIsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLEtBQUs7aUJBQ2QsQ0FBQTthQUNKO1lBR0QsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUU3QyxJQUFJLFVBQVUsR0FBUSxFQUFFLENBQUM7WUFFekIsSUFBSSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDL0IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxF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