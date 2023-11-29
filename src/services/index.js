import { Storage } from "./storage";
import { Client } from "./client";

export const storage = new Storage();
export const client = new Client();
export const api = client;
