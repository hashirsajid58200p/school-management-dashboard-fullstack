import Pusher from "pusher";

const appId = process.env.PUSHER_APP_ID;
const key = process.env.NEXT_PUBLIC_PUSHER_KEY;
const secret = process.env.PUSHER_SECRET;
const cluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER;

// Create pusherServer client if variables are present, otherwise define a mock trigger fallback
export const pusherServer = (appId && key && secret && cluster)
  ? new Pusher({
      appId,
      key,
      secret,
      cluster,
      useTLS: true,
    })
  : {
      trigger: async (channel: string | string[], event: string, data: any) => {
        console.warn("Pusher server credentials missing. Simulated trigger:", event, data);
        return {};
      },
    };
