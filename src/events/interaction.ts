import { ChatInputCommandInteraction, InteractionType } from "discord.js";
import { DiscordEvent } from "../types/Event";

const interaction: DiscordEvent = {
    name: "interactionCreate",
    async run(client, int: ChatInputCommandInteraction) {
        if (int.type !== InteractionType.ApplicationCommand) return;
        const slashcmd = client.slashcmds.get(int.commandName);
        if (!slashcmd) return;

        try {
            await slashcmd.run(client, int);
        } catch (e) {
           console.log(e) 
        }
    }
}

export default interaction