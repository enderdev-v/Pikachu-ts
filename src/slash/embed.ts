import { slashcmd } from "../types/Command"
import { EmbedBuilder, SlashCommandBuilder } from "discord.js"

const embed: slashcmd = {
    data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Manda un mensaje embed"),
    run(client, int) {

        const embed = new EmbedBuilder()
        .setTitle("Some title")
        .setDescription("Some description")
        .setAuthor({ name: "Some author" })
        .setFooter({ text: "Some footer" })
        int.reply({ embeds: [embed] })
    }
}

export default embed