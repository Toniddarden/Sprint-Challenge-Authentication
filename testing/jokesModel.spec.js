const db = require('../database/dbConfig');
const Users = require('../jokes/jokes-model');

describe('Users model', () => {
    describe('add user', () => {
        it('should insert the provided user into db', async () => {
            await Users.add({username: "koby", password: "hello"});
            await Users.add({username: "bryant", password: "helloagain"});
    
            const users = await db('users');
    
        })
        

    })

})

beforeEach(async () => {
    await db('users').truncate();
})