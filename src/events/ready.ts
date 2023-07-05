import { DiscordEvent } from "../types/Event"
const ready: DiscordEvent = {
  name: "ready",
  run: (client) => {
    console.log("Client ready")
  }
}

export default ready