import { Message } from "discord.js";
import { DiscordEvent } from "../types/Event"

const message: DiscordEvent = {
    name: "messageCreate",
    run (client, message: Message)  {
        if (message.author.bot) return;
        if (message.content.includes("a")) return message.channel.send(message.content)

    }
}

export default message