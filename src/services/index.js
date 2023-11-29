import { Client } from "./client";
import { Storage } from "./storage";

export const client = new Client();
export const storage = new Storage();
export const api = client;
