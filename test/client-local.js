const fetch = require('node-fetch');
const baseURL = 'http://localhost:8080/api/users';
// const baseURL = 'https://anna-shvetsova.h1n.ru:3000/';

const get = async () => {
    const res = await fetch(baseURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await res.json();
    console.log('Server response:', json);
}

const post = async () => {
    const res = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Denis',
            surname: 'Leontyev',
            // email: 'denleo@aaa.com'
        })
    });

    const json = await res.json();
    console.log('Server response:', json);
}

const put = async () => {
    const userId = '6065fd0113787a755072add2';
    const res = await fetch(`${baseURL}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Annushka',
            surname: 'Safonova',
            email: 'asaf@aaa.com'
        })
    });

    const json = await res.json();
    console.log('Server response:', json);
}

const del = async () => {
    const userId = '606635b3325a4907404e3e09';
    const res = await fetch(`${baseURL}/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }});

    const json = await res.json();
    console.log('Server response:', json);
}

const getUser = async () => {
    const userId = '6065fd0113787a755072add2';
    const res = await fetch(`${baseURL}/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});

    const json = await res.json();
    console.log('Server response:', json);
}

const signIn = async () => {
    const res = await fetch(`${baseURL}/signIn`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'john.smith@gmail.com',
            password: '123456'
        })
    });

    const json = await res.json();
    console.log('Server response:', json);
}

get();