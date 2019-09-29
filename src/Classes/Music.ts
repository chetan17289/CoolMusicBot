import * as Discord from "discord.js";

import { PlayerManager } from "discord.js-lavalink";

import { DefaultFormatter, Logger, LogLevel } from "@ayana/logger";

import * as fs from "fs";

import * as chalk from "chalk";

import { Command } from "../Classes/Command";


Logger.getDefaultTransport().setLevel(LogLevel.WARN);
Logger.setFormatter(new DefaultFormatter({ dateFormat: "hh:mm DD/MM/YYYY", colorMeta: true, colorErrors: true }));


const log = Logger.get("Main");

export class Music extends Discord.Client {

    nodes: object[];
    manager: any;
    commands: any;
    queue: any = {};
    constructor() {

        super();

        this.nodes = [{ host: "localhost", port: 2333, password: "youshallnotpass" }];

        this.manager = new PlayerManager(this, this.nodes, {
            user: `607496208260268042`,
            shards: 0
        });

        this.queue = {};

        this.commands = new Discord.Collection()


    }


    signIn(token: string = "nada") {

        this.commandsLoad(["Commands"], this)


        this.eventsLoad("Events")

        this.login(token);

        return log.warn(chalk.default.greenBright("[Bot]") + ' Successfully logged in~')

    };

    /**
  * Options for Client
  * @property {String} [path] - The paths the bot should take
  * @property {Object} [client] - The client object
  */
    async commandsLoad(path: string[] = ["Commands"], client: any) {

        path.forEach(async f => {

            const files = await fs.readdirSync(f).filter(s => s.endsWith(".js"));



            for (let file of files) {
                let dir = require(`../${f}/${file}`).default;

                var fileName = file.substring(0, file.length - 3);


                this.commands.set(fileName.toString(), dir);

            }

        })


        return log.info(chalk.default.blueBright(`[Commands]`) + `\t Loaded the commands!\n\n`);



    }


    async eventsLoad(path: string = "Events") {
        const files = await fs.readdirSync(path).filter(s => s.endsWith(".js"));

        for (let file of files) {

            require(`../${path}/${file}`)

        }

        return log.info(chalk.default.redBright(`[Events]`) + `\t Loaded the events!\n\n`);


    }


}


