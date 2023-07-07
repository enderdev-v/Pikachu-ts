import { PermissionResolvable, CommandInteraction, CommandInteractionOptionResolver, ChatInputApplicationCommandData, Message, ChatInputCommandInteraction, SlashCommandBuilder, ApplicationCommandData, ApplicationCommandDataResolvable  } from "discord.js";
import { Pikachu } from "../structures/Client";

export type slashcmd = {
    data: ApplicationCommandDataResolvable,
    run: (client: Pikachu, interaction: ChatInputCommandInteraction) => any
}

export type cmd = {
    name: string
    alias: string[]
    run: (client: Client, message: Message, args: string[]) => any
}