/* eslint-env node */

module.exports = function (deployTarget) {
  const ENV = {
    build: {},
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    process.env.API_HOST = 'https://staging-api.embergrep.com';

    ENV.build.environment = 'production';

    ENV.scp = {
      username: process.env.STAGE_USERNAME,
      host: process.env.STAGE_IP,
      path: process.env.STAGE_PATH,
    };

    ENV.redis = {
      allowOverwrite: true,
      host: process.env.STAGE_IP,
      port: 6379,
      password: process.env.STAGE_REDIS_PASSWORD,
    };
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
