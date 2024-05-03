import { test, expect } from '@playwright/test';

const UserUrl = process.env.USER_URL!;

test.describe('API Tests for Brewery DB', () => {
test('POST request to create a brewery', async ({ request }) => {
    const response = await request.post(`${UserUrl}/users`, {
        data: 
        {
            name: "Test Data",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            }
        }
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toHaveProperty('name', 'Test Data');
    });
});