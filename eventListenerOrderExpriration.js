const redis = require('redis');
const subscribe = redis.createClient();

const express = require('express');
const app = express();

subscribe.psubscribe("__keyevent@0__:expired");
subscribe.on('pmessage', (pattern, channel, message) => {
    console.log(`message:::::`, message);
    console.log('Sau khi chung ta co orderID:::', message);
    //Update trong BD la orderID chua thanh toan...
})

app.listen( process.env.PORT || 3010, () => {
    console.log(`EventListener is running 3010`);
})