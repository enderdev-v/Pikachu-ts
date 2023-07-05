
import { Client, IntentsBitField, BitFieldResolvable, GatewayIntentsString, Collection } from "discord.js";
import fs from "node:fs";
import path from "node:path";
import { Command } from "../types/Command";

export class Pikachu extends Client {
    commands: Collection<string, Command> = new Collection();
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
}