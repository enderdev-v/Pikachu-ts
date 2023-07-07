import { Message } from "discord.js";
import { DiscordEvent } from "../types/Event"

const message: DiscordEvent = {
    name: "messageCreate",
    run (client, message: Message)  {

        const prefix = "p!"
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return; 

        const args = message.content.slice(prefix.length).trim().split(/ +/g),
        command = args.shift().toLowerCase();

        const cmd = client.commands.find(cmd => cmd.name === command || cmd.alias && cmd.alias.includes(command))

        if (cmd) {
            cmd.run(client, message, args)
        }


    


    
    }
}

export default message