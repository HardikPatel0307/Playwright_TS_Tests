import { test, expect } from '@playwright/test';

const ReadyUrl = process.env.READY_URL!;

test('DELETE object with ID 6', async ({ request }) => {
    const response = await request.delete(`${ReadyUrl}/objects/1}`);

    console.log("Status Code:", response.status());

    expect(response.status()).toBe(200); 

    if (response.status() === 200) {
        const responseBody = await response.json();
        console.log("Response Body:", responseBody);
        expect(responseBody.message).toMatch("Object with id = 1, has been deleted."); 
    }
});