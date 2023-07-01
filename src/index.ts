require("dotenv").config();
import { Pikachu } from "./structures/Client";

export const client = new Pikachu();

client.start();