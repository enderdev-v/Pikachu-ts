import { cmd } from "../types/Command"
import { ButtonBuilder, ActionRowBuilder, ButtonStyle } from "discord.js"

const boton: cmd = {
    name: "boton",
    alias: [],
    run(client, message, args) {
        const row = new ActionRowBuilder<ButtonBuilder>()
        .setComponents(
            new ButtonBuilder()
            .setCustomId("ID")
            .setLabel("Boton")
            .setStyle(ButtonStyle.Success)
        )
        message.channel.send({ content: "Hola", components: [row] });
    }
}

export default boton