import fetch from 'node-fetch';
import { HttpsProxyAgent } from 'https-proxy-agent';
import credentials from './credentials.js';

(async () => {
  const proxyAgent = new HttpsProxyAgent(
    `https://${credentials.username}:${credentials.password}@us.smartproxy.com:10001`
  );

  const response = await fetch('https://ip.smartproxy.com', {
    agent: proxyAgent,
  });
  console.log('response', await response.text());
})();
