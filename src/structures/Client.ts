
import { Client, IntentsBitField, BitFieldResolvable, GatewayIntentsString, Collection, REST, Routes } from "discord.js";
import fs from "node:fs";
import path from "node:path";
import { slashcmd, cmd } from "../types/Command";

export class Pikachu extends Client {
    slashcmds: Collection<string, slashcmd> = new Collection();
    commands: Collection<string, cmd> = new Collection();
    constructor() {
        super({ intents: Object.keys(IntentsBitField.Flags) as BitFieldResolvable<GatewayIntentsString, number> });
    }
    start() {
        this.loadEvents();
        this.login(process.env.token);
    }
    loadEvents() {
        const files = fs.readdirSync(path.join("./src/events"))
        for (const file of files) {
            const event = require(path.join(`../events`, file))

            this.on(event.default.name, async (...args) => event.default.run(this, ...args));
        }
    }
    loadCommands() {
        const files = fs.readdirSync(path.join("./src/command"))

        for (const file of files) {
            const cmd = require(path.join(`../command`, file));
            this.commands.set(cmd.default.name, cmd.default);
        }

    }

    async loadSlashCmds() {
        const commands: string[] = [],
            rest = new REST({ version: "10" }).setToken(process.env.token),
            files = fs.readdirSync(path.join("./src/slash"));
        for (const file of files) {
            const slashcmd = require(path.join("../slash", file))

            this.slashcmds.set(slashcmd.default.data.name, slashcmd.default);

            commands.push(slashcmd.default.data.toJSON());

        }
        try {
            await rest.put(Routes.applicationCommands(process.env.clientid), {
                body: commands
            });
            console.log(`slahscmds agregados`);
        } catch (e) {
            console.error(e);
        }
    }
}