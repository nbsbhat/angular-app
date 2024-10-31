// tests/server.test.js

const request = require('supertest');
const app = require('../server'); // Import the app

describe('CRUD API Tests', () => {
    it('should create a new item', async () => {
        const res = await request(app)
            .post('/items')
            .send({ name: 'Item 1' });
        
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toEqual('Item 1');
    });

    it('create an empty item should return 500', async () => {
        const res = await request(app)
            .post('/items')
            .send({});
        
        expect(res.statusCode).toBe(500);
    });

    it('should read all items', async () => {
        const res = await request(app).get('/items');
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('should read a specific item', async () => {
        const createRes = await request(app)
            .post('/items')
            .send({ name: 'Item 2' });

        const res = await request(app).get(`/items/${createRes.body.id}`);
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('Item 2');
    });

    it('should update an item', async () => {
        const createRes = await request(app)
            .post('/items')
            .send({ name: 'Item 3' });

        const res = await request(app)
            .put(`/items/${createRes.body.id}`)
            .send({ name: 'Updated Item 3' });
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('Updated Item 3');
    });

    it('should delete an item', async () => {
        const createRes = await request(app)
            .post('/items')
            .send({ name: 'Item 4' });

        const res = await request(app).delete(`/items/${createRes.body.id}`);
        
        expect(res.statusCode).toEqual(200);
        expect(res.body[0].name).toEqual('Item 4'); // Check if the deleted item is returned
    });

    it('should return 404 for a non-existing item', async () => {
        const res = await request(app).get('/items/999');
        expect(res.statusCode).toEqual(404);
    });
});
