import { ClientEvents, Events } from "discord.js";
import { Pikachu } from "../structures/Client";

export interface DiscordEvent {
    name: `${Events}`,
    run: (client: Pikachu, ...args?: any ) => any
}

// exportar tipos eventos