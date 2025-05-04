module.exports = {
  apps: [
    {
      name: "sdnayak-website",
      script: "npm",
      args: "start",
      cwd: "/home/wizard/wizard/sdnayak.tech-main",
      watch: false,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
