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
const discord_js_lavalink_1 = require("discord.js-lavalink");
const logger_1 = require("@ayana/logger");
const fs = require("fs");
const chalk = require("chalk");
logger_1.Logger.getDefaultTransport().setLevel(logger_1.LogLevel.WARN);
logger_1.Logger.setFormatter(new logger_1.DefaultFormatter({ dateFormat: "hh:mm DD/MM/YYYY", colorMeta: true, colorErrors: true }));
const log = logger_1.Logger.get("Main");
class Music extends Discord.Client {
    constructor() {
        super();
        this.queue = {};
        this.nodes = [{ host: "localhost", port: 2333, password: "youshallnotpass" }];
        this.manager = new discord_js_lavalink_1.PlayerManager(this, this.nodes, {
            user: `607496208260268042`,
            shards: 0
        });
        this.queue = {};
        this.commands = new Discord.Collection();
    }
    signIn(token = "nada") {
        this.commandsLoad(["Commands"], this);
        this.eventsLoad("Events");
        this.login(token);
        return log.warn(chalk.default.greenBright("[Bot]") + ' Successfully logged in~');
    }
    ;
    commandsLoad(path = ["Commands"], client) {
        return __awaiter(this, void 0, void 0, function* () {
            path.forEach((f) => __awaiter(this, void 0, void 0, function* () {
                const files = yield fs.readdirSync(f).filter(s => s.endsWith(".js"));
                for (let file of files) {
                    let dir = require(`../${f}/${file}`).default;
                    var fileName = file.substring(0, file.length - 3);
                    this.commands.set(fileName.toString(), dir);
                }
            }));
            return log.info(chalk.default.blueBright(`[Commands]`) + `\t Loaded the commands!\n\n`);
        });
    }
    eventsLoad(path = "Events") {
        return __awaiter(this, void 0, void 0, function* () {
            const files = yield fs.readdirSync(path).filter(s => s.endsWith(".js"));
            for (let file of files) {
                require(`../${path}/${file}`);
            }
            return log.info(chalk.default.redBright(`[Events]`) + `\t Loaded the events!\n\n`);
        });
    }
}
exports.Music = Music;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2xhc3Nlcy9NdXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUV0Qyw2REFBb0Q7QUFFcEQsMENBQW1FO0FBRW5FLHlCQUF5QjtBQUV6QiwrQkFBK0I7QUFLL0IsZUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckQsZUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLHlCQUFnQixDQUFDLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUdsSCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRS9CLE1BQWEsS0FBTSxTQUFRLE9BQU8sQ0FBQyxNQUFNO0lBTXJDO1FBRUksS0FBSyxFQUFFLENBQUM7UUFIWixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBS1osSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFFOUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG1DQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDL0MsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUE7SUFHNUMsQ0FBQztJQUdELE1BQU0sQ0FBQyxRQUFnQixNQUFNO1FBRXpCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUdyQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRXpCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLDBCQUEwQixDQUFDLENBQUE7SUFFcEYsQ0FBQztJQUFBLENBQUM7SUFPSSxZQUFZLENBQUMsT0FBaUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFXOztZQUV6RCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQU0sQ0FBQyxFQUFDLEVBQUU7Z0JBRW5CLE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBSXJFLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO29CQUNwQixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7b0JBRTdDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBR2xELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFFL0M7WUFFTCxDQUFDLENBQUEsQ0FBQyxDQUFBO1lBR0YsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLDZCQUE2QixDQUFDLENBQUM7UUFJNUYsQ0FBQztLQUFBO0lBR0ssVUFBVSxDQUFDLE9BQWUsUUFBUTs7WUFDcEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUV4RSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRTtnQkFFcEIsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUE7YUFFaEM7WUFFRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsMkJBQTJCLENBQUMsQ0FBQztRQUd2RixDQUFDO0tBQUE7Q0FHSjtBQXRGRCxzQkFzRkMifQ==