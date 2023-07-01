
import { Client, IntentsBitField, BitFieldResolvable, GatewayIntentsString, Collection, ApplicationCommandDataResolvable } from "discord.js";
import glob from "glob";
import { promisify } from "util";
import { Command } from "../types/Command";
import { devNull } from "os";
import path from "path";

const globPromise = promisify(glob);

export class Pikachu extends Client {
    commands: Collection<string, Command> = new Collection();
    constructor() {
        super({ intents: Object.keys(IntentsBitField.Flags) as BitFieldResolvable<GatewayIntentsString, number> });
    }
    start() {
        this.loadFiles();
        this.login(process.env.token);
        console.log("Pikachu Ready");
    }
    async loadFiles() {
        const slashcmds: ApplicationCommandDataResolvable[] = [];
        const files = await globPromise(path.join(__dirname, "../command"));
        console.log(files)
    }
}