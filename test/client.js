const fetch = require('node-fetch');
// const baseURL = 'http://localhost:3000/123';
const baseURL = 'https://anna-shvetsova.github.io/liga-a-server/123';

const main = async () => {
    const res = await fetch(baseURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const { msg } = await res.json();
    console.log('Server response:', msg);
}

main();