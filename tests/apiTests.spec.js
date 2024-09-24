const { test, expect } = require('@playwright/test');

test('Get Users', async ({ request }) => {

    const response = await request.get('https://regres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)

})


//Global variable
var UserId;

test('Create User', async ({ request }) => {

    const response = await request.post('https://regress.in/api/users',
        {
            data: { "name": "Cedric", "job": "Developer" },
            headers: { "Accept": "application/json" }
        });

    console.log(await response.json())
    expect(response.status()).toBe(201)

    var res = await response.json();
    UserId = res.id;

})

test('Update User', async ({ request }) => {

    const response = await request.put('https://regress.in/api/users/' + UserId,
        {
            data: { "name": "Cedric", "job": "Delivery Lead" },
            headers: { "Accept": "application/json" }
        });

    console.log(await response.json())
    expect(response.status()).toBe(200)

})

test('Delete User', async ({ request }) => {

    const response = await request.delete('https://regres.in/api/users/' + UserId)
    expect(response.status()).toBe(204)

})
