import { ProxyAgent, fetch as undiciFetch } from 'undici';
import credentials from './credentials.js';

(async () => {
  const dispatcher = new ProxyAgent({
    uri: 'https://us.smartproxy.com:10001',
    token: `Basic ${Buffer.from(
      `${credentials.username}:${credentials.password}`
    ).toString('base64')}`,
  });

  const response = await undiciFetch('https://ip.smartproxy.com', {
    dispatcher,
  });
  console.log('response', await response.text());
})();
