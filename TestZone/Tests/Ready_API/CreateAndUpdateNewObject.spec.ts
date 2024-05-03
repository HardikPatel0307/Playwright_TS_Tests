import { test, expect } from '@playwright/test';

const ReadyUrl = process.env.READY_URL!;

test.describe('API Test for Creating and Updating an Object', () => {
    test('Create and update an object', async ({ request }) => {
        let deviceId: number; 
        const postData = {
            name: "Apple MacBook Pro 16",
            data: {
                year: 2019,
                price: 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                color: "silver"
            }
        };

        const postResponse = await request.post('https://api.restful-api.dev/objects', {
            data: postData,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const postResponseObject = await postResponse.json();
        console.log("POST Response Object:", postResponseObject);
        deviceId = postResponseObject.id;
        console.log(deviceId);
        expect(postResponse.status()).toBe(200);

        const putData = {
            name: "Apple MacBook Pro 16",
            data: {
                year: 2020, // Updated year
                price: 2049.99, // Updated price
                cpuModel: "Intel Core i9",
                hardDiskSize: "2 TB", // Updated disk size
                color: "Space Gray" // Updated color
            }
        };

        const putResponse = await request.put(`https://api.restful-api.dev/objects/${deviceId}`, {
            data: putData,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const putResponseObject = await putResponse.json();
        console.log(putResponseObject);
        expect(putResponse.status()).toBe(200);
        expect(putResponseObject.data.hardDiskSize).toBe(putData.data.hardDiskSize);
    });
});
