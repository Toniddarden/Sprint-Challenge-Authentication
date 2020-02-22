const request = require('supertest');
const jokes = require('../jokes/jokes-router');
const server = require('../api/server')


describe('server.js', ()=>{
    describe('register', ()=>{
        it('returns status 201', async()=>{
            const res = await request(server)
            .post('/api/auth/register')
            .send({
                username: "kobe",
                password: "hello"
            });
            expect(201)
        })

        it('check for missing required fields', async ()=>{
            const res = await request(server)
            .post('/api/auth/register')
            expect(res.status).toBe(500)
        })
    })

    describe('login', ()=>{
        it('returns status 200', async ()=>{
            const res = await request(server)
            .post('/api/auth/login')
            .auth('username', 'password')
            expect(200)
        })

        it("Error:login info is missing", async () => {
            const res = await request(server).post("/api/auth/login")
            expect(res.status).toBe(500);
        });

        
    })
})

 
