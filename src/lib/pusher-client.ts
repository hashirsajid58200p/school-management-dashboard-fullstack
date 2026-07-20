import PusherClient from "pusher-js";

const key = process.env.NEXT_PUBLIC_PUSHER_KEY;
const cluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER;

// Create client instance if credentials are set, otherwise fallback to null
export const pusherClient = (key && cluster)
  ? new PusherClient(key, {
      cluster,
      forceTLS: true,
    })
  : null;
