module.exports = {
  apps: [
    {
      name: "sayhello-api",
      script: "index.js",
      instances: 1,
      autorestart: true
    }
  ]
};
