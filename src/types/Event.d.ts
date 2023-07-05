import { ClientEvents, Events, Client } from "discord.js";

export interface DiscordEvent {
    name: `${Events}`,
    run: (client: Client, ...args?: any[] ) => any
}