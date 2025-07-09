import { startHealthCheckCron } from "./cron";

// ... Discord BOTのコード ...

serve({
  fetch: healthCheckServer.fetch,
  port: 8000,
});
startHealthCheckCron();
