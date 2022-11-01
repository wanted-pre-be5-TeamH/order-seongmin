const { createApp } = require("./app");

const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;
  const server = app.listen(PORT, () => {
    console.log(`SERVER start PORT ${PORT}`);
  });

  server.setTimeout(1000);
};

startServer();
