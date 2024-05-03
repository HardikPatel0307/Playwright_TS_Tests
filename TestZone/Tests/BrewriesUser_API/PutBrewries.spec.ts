import { test, expect } from "@playwright/test";

const UserUrl = process.env.USER_URL!;

test("PUT to update user with ID 1", async ({ request }) => {
    const updateData = {
    id: 1,
    name: "Leanne Data",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 700",
        city: "Gwenborough",
        zipcode: "69801-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496",
        },
    },
    };

    const response = await request.put(`${UserUrl}/users/1`, {
    data: updateData,
    headers: {
        "Content-Type": "application/json",
    },
    });

    const responseObject = await response.json();

    console.log(responseObject);

    expect(response.status()).toBe(200);

    expect(responseObject.id).toBe(updateData.id);
    expect(responseObject.name).toBe(updateData.name);
    expect(responseObject.username).toBe(updateData.username);
    expect(responseObject.email).toBe(updateData.email);
    expect(responseObject.address.street).toBe(updateData.address.street);
    expect(responseObject.address.suite).toBe(updateData.address.suite);
    expect(responseObject.address.city).toBe(updateData.address.city);
    expect(responseObject.address.zipcode).toBe(updateData.address.zipcode);
    expect(responseObject.address.geo.lat).toBe(updateData.address.geo.lat);
    expect(responseObject.address.geo.lng).toBe(updateData.address.geo.lng);
});
