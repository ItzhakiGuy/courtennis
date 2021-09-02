const fetch = require ('node-fetch');
const port = 9000 || process.env.PORT;
const baseRoute = `http://localhost:${port}`;

test('loginHappyFlow - expect success=true',  async () => {
    let body = {
        username: "testUser",
        password: "testPassword"
    };
    const path = "/login";
    let response = await fetch(`${baseRoute}${path}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })
    let data = await response.json()
    expect(data.success).toBe(true)
});

test('login unknown user - expect success=false',  async () => {
    let body = {
        username: "unknownUser",
        password: "unknownPassword"
    };
    const path = "/login";
    let response = await fetch(`${baseRoute}${path}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })
    let data = await response.json()
    expect(data.success).not.toBe(true)
});

// This test cal only pass 1 time. To make it pass again simply choose a new username + password
test('signUpHappyFlow - expect success=true',  async () => {
    let body = {
        username: "test user1",
        password: "test password1"
    };
    const path = "/register";
    let response = await fetch(`${baseRoute}${path}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })
    let data = await response.json()
    expect(data.success).toBe(true)
});

test('signUp - user already exists - expect success=false',  async () => {
    let body = {
        username: "admin",
        password: "admin"
    };
    const path = "/register";
    let response = await fetch(`${baseRoute}${path}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })
    let data = await response.json()
    expect(data.success).toBe(false)
});

test('getAllProducts - validate 12 products in the store',  async () => {
    const path = "/products";
    let response = await fetch(`${baseRoute}${path}`)
    let data = await response.json()

    expect(data.length).toBe(12)
});

test('addProductHappyFlow',  async () => {
    let body = {
        name: "testProduct",
        price: "200",
        image: "https://img.tennis-warehouse.com/watermark/rs.php?path=PVRTX-1.jpg&nw=540",
    };
    const path = "/products/new";
    let response = await fetch(`${baseRoute}${path}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })
    let data = await response.json()

    expect(data.success).toBe(true)
});