const { getAboutMe } = require('../src/controllers/aboutMeControllers')
const pool = require('../src/utilis/db')
jest.mock('../src/utilis/db', () => ({
    query: jest.fn(),
}));

const mockReq = {};
const mockRes = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
};
const mockNext = jest.fn();

describe('About Me', () => {
    it('Should return 200', async () => {
        const fackDataAboutMe = [
            {
                "id": 1,
                "first_name": "Khadar M",
                "last_name": "Dagal",
                "profession": "Junior Web Developer",
                "about": "I'm junior web Developer. I have designed, developed and deployed several projects ,and my mission is to embrace a journey of continuous learning, crafting innovative web applications, and effecting positive change. This mission follows my successful completion of a rigorous 9-month software development program at CodeYourFuture boot camp in Manchester."
            }
        ]

        pool.query.mockResolvedValue({ rows: fackDataAboutMe })
        await getAboutMe(mockReq, mockRes, mockNext)

        expect(pool.query).toHaveBeenCalledWith('SELECT * FROM about_me')
        expect(mockRes.status).toHaveBeenCalledWith(200)
        expect(mockRes.json).toHaveBeenCalledWith({
            status: 'success',
            result: fackDataAboutMe
        })

    })
})