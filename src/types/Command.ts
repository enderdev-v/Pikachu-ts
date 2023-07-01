import { PermissionResolvable, CommandInteraction, CommandInteractionOptionResolver, ChatInputApplicationCommandData  } from "discord.js";
import { Pikachu } from "../structures/Client";

export type RunOpts = {
    client: Pikachu,
    interaction: CommandInteraction,
    options: CommandInteractionOptionResolver
}

export type RunFunction = (options: RunOpts) => void;

export type Command = {
    userPermissions?: PermissionResolvable,
    run: RunFunction
} & ChatInputApplicationCommandData