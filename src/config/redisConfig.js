const redis = require('redis');
const redisClient = redis.createClient({
    socket: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT
    },
    password: process.env.REDIS_PASSWORD,
  });

module.exports = redisClient;
  
