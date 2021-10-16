const request = require('supertest')

describe('Check staff', () => {
  it('should staff list with count and rows', async () => {
    const res = await request(__SERVER__).get('/staff')

    expect(typeof res.body.data.count).toEqual('number')
    expect(Array.isArray(res.body.data.rows)).toEqual(true)
    expect(res.statusCode).toEqual(200)
  })
})
