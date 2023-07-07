require("dotenv").config();
import { Pikachu } from "./structures/Client";

const client = new Pikachu();

client.loadSlashCmds()
client.loadCommands();
client.start();