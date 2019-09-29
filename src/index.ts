import * as Bot from "./Classes/Music";

import * as Config from "./Config/main"

let MC = new Bot.Music();

MC.signIn(Config.default.token)


export default (MC)