import { test, expect } from '@playwright/test';

const ReadyUrl = process.env.READY_URL!;

test.describe('US_119_Start Creating API Testing_Get_Data', () =>{
    test('Set up Test for get data', async ({ request }) => {
        try{
            const response = await request.get(`${ReadyUrl}/objects`);
            const data = await response.json();
            console.log(data);
            expect(response.status()).toBe(200);
            expect(data).toBeTruthy();
        }
        catch(error){
            console.error("Failed to fetch Data", error);
            throw error;
        }
    });
    test('Set up Test for Get Data by Id', async ({ request }) => {
        try{
            const response = await request.get(`${ReadyUrl}/objects?id=3`);
            const data = await response.json();
            console.log(data);
            expect(response.status()).toBe(200);

            const objectWithId3 = data.find((item: any) => item.id === "3");
            expect(objectWithId3).toBeDefined();
            expect(objectWithId3.id).toBe("3");

            expect(objectWithId3.name).toBe("Apple iPhone 12 Pro Max");
            expect(objectWithId3.data).toEqual({
            "capacity GB": 512,
            "color": "Cloudy White"
        });
        }
        catch(error){
            console.error("Failed to fetch Data", error);
            throw error;
        }
    })
    test('Set up Test for Getting Single Object', async ({ request }) => {
        try{
            const response = await request.get(`${ReadyUrl}/objects/7`);
            const object = await response.json();
            console.log(object);

            expect(response.status()).toBe(200);
            expect(object.id).toBe("7");
            expect(object.name).toBe("Apple MacBook Pro 16");
            expect(object.data).toBeDefined();
            expect(object.data.year).toBe(2019);
            expect(object.data.price).toBe(1849.99);
            expect(object.data['CPU model']).toBe("Intel Core i9");
            expect(object.data['Hard disk size']).toBe("1 TB");
        }
            catch(error){
            console.error("Failed to fetch Data", error);
            throw error;
        }
    })
    test('Test for Creating an Object', async ({ request }) => {
        const postData = {
            name: "Apple MacBook Pro 16",
            data: {
                year: 2019,
                price: 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        };
        const responsedata = await request.post(`${ReadyUrl}/objects`, {
            data: postData,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseObject = await responsedata.json();
        console.log(responseObject)

        expect(responsedata.status()).toBe(200);
        expect(responseObject).toHaveProperty('id');
        expect(responseObject.name).toBe(postData.name);
        expect(responseObject.data.year).toBe(postData.data.year);
        expect(responseObject.data.price).toBe(postData.data.price);
        expect(responseObject.data['CPU model']).toBe(postData.data['CPU model']);
        expect(responseObject.data['Hard disk size']).toBe(postData.data['Hard disk size']);
    })
})