let data = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
let url = 'https://reqres.in/api/login'

async function login() {
    let res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    res = await res.json()
    console.log(res);
}
login()