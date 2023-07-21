export const FLAG_SHOW_CREATOR = 1 << 0;
export const FLAG_HAS_PRIORITY_MAPPING = 1 << 1;

export const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000';
export const COLLECT_NODE_METRICS = process.env.NODE_METRICS ?? false;
export const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID ?? '';
export const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET ?? '';
export const DISCORD_SERVER_ID = process.env.DISCORD_SERVER_ID ?? '959459605140893757';
export const DISCORD_ROLE_ID = process.env.DISCORD_ROLE_ID ?? '959460487353995274';
export const FACTION_NAME = process.env.FACTION_NAME ?? 'Spaceflight Place';
export const FACTION_CONTACT = process.env.FACTION_CONTACT ?? 'https://discord.gg/X5g9yyWmbM https://github.com/emlynlj';
export const HTTP_PORT = process.env.HTTP_PORT ?? 3000;
export const IMAGES_DIRECTORY = process.env.IMAGES_DIRECTORY ?? './images';
export const KEEPALIVE_INTERVAL = parseInt(process.env.KEEPALIVE_INTERVAL ?? 5000);
export const KEEPALIVE_TIMEOUT = parseInt(process.env.KEEPALIVE_TIMEOUT ?? 15000);
export const POSTGRES_CONNECTION_URI = process.env.POSTGRES_CONNECTION_URI ?? 'postgres://chief:chief@localhost/chief';
export const STATS_INTERVAL = parseInt(process.env.STATS_INTERVAL ?? 2500);
