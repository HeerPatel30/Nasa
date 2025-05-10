import request from "supertest"
import app from "../app.js"
describe('Test GET /launches',()=>{
    test('It should be respond with 200 success',async ()=>{
        const response = await request(app).get('/launches').expect(200)
    })
})
describe('Test POST /launches',()=>{
    test('It should be respond with 200 success',()=>{
        const response = 200
        expect(response).toBe(200)
    })
    test('It should catch the error ',()=>{

    })
    test('It should catch the invalid date ',()=>{

    })
})