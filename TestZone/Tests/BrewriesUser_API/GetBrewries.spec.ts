import { test, expect } from '@playwright/test';

const UserUrl = process.env.USER_URL!;

test.describe('US_109_First Test', () =>{
    test('Set up Test for get data', async ({ request }) => {
        await test.step('1) Get Data', async () => {
            const response = await request.get(`${UserUrl}/users`);
            const data = await response.json();
            console.log(data);
            expect(response.status()).toBe(200);
            expect(data).toBeTruthy();
        })
    })
})