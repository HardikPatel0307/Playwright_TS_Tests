import { test, expect } from '@playwright/test';

const BookUrl = process.env.BOOK_URL!;

test.describe('API Tests for Book Management', () => {
    test('GET all books', async ({ request }) => {
        const response = await request.get(`${BookUrl}/books`);
        expect(response.status()).toBe(200);
        const book = await response.json();
        console.log("Received book data:", book);
        expect(response.status()).toBe(200);
    });

    test('POST to create a new book', async ({ request }) => {
        const newBook = {
            title: "Unlocking Apple",
            isbn: "1933988673",
            pageCount: 416,
            authors: ["W. Frank Smith", "Charlie Dean", "Robi Sen"]
        };
        const response = await request.post(`${BookUrl}/books`, {
            data: newBook,
            headers: {'Content-Type': 'application/json'}
        });
        expect(response.status()).toBe(201); // Assuming 201 for created
        const book = await response.json();
        console.log(book);
        expect(book.isbn).toBe("1933988673");
    });

    test('PUT to update a book', async ({ request }) => {
        const updatedBook = {
            id: 1,
            title: "Unlocking Apple Updated",
            isbn: "1933988673",
            pageCount: 420,
            authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"]
        };
        const response = await request.put(`${BookUrl}/books/1`, {
            data: updatedBook,
            headers: {'Content-Type': 'application/json'}
        });
        expect(response.status()).toBe(200);
        const book = await response.json();
        console.log(updatedBook);
        expect(book.pageCount).toBe(420);
    });

    test('DELETE a book', async ({ request }) => {
        const response = await request.delete(`${BookUrl}/books/1`);
        console.log(response);
        expect(response.status()).toBe(200); // Assuming 204 for no content on successful delete
    });
});
