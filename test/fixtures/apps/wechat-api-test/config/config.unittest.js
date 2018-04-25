'use strict';

exports.keys = '123456';

exports.redis = {
  client: {
    foo: {
      port: 6379,
      host: '127.0.0.1',
      password: null,
      family: 4,
      db: 6,
    },
  },
};

exports.wechatApi = {
  default: {
  },
  app: true,
  agent: false,

  // wechat
  appId: process.env.WECHAT_API_APP_ID,
  appSecret: process.env.WECHAT_API_APP_SECRET,
  db: process.env.REDIS_DB,
};
