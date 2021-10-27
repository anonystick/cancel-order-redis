const redis = require('redis');
const client = redis.createClient();

const addDelayEventOrder = ({orderId, delay}) => {
    return new Promise((resolve, reject) => {
        client.set(orderId, "Cancel order", 'EX', delay, (err, result) => {
            if(err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = {
    addDelayEventOrder
}