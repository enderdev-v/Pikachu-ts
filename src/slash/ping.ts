import { slashcmd } from "../types/Command"
import { SlashCommandBuilder } from "discord.js"

const ping: slashcmd = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Da el ping del bot"),
    run(client, int) {
        int.reply("Pong!")
    }
}

export default ping