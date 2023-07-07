import { cmd } from "../types/Command"

const ping: cmd = {
    name: 'ping',
    alias: [],
    run(client, message, args) {
        message.reply(client.ws.ping + "ms")
    }
}

export default ping