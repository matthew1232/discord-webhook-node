const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent')

module.exports = (hookURL, payload, proxy) => new Promise((resolve, reject) => {
    fetch(hookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        agent: proxy ? new HttpsProxyAgent("http://" + proxy) : undefined,
        body: JSON.stringify(payload)
    })
    .then(res => resolve(res))
    .catch(err => reject(err));
});
