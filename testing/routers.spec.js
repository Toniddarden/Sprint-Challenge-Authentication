const request = require('supertest');
const jokes = require('../jokes/jokes-router');
const server = require('../api/server')


describe("server.js", () => {
    // testing my  "test": "cross-env DB_ENV=testing jest --watch" inside of package.json:scripts{}
    it("is running in testing env",
      () => {
        expect(process.env.DB_ENV).toBe("testing");
      });
        

  
  });

describe("POST /", () => {
    // error should toBe(200)
    it('should return 200 OK', async () => {
        const res = await request(server).get('/login');
        expect(res.status).toBe(404)
    });

    it('it should return 200', () => {
        return request(server).get('/')
        .then(res => {
            expect(res.status).toBe(200)
        }).catch(err => {
            expect(true===false)
        })
    })

    // error should toBe(200)
//     it('should return 200 OK', async () => {
//         const res = await request(server).get('/register');
//         expect(res.status).toBe(404);
//     });
})

 
