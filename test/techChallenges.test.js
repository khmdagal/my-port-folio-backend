const { getTechChallenges } = require('../src/controllers/techchallengesControllers');
const pool = require('../src/utilis/db');
jest.mock('../src/utilis/db', () => ({
    query: jest.fn()
}));


const mockReq = {};
const mockRes = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
};
const mockNext = jest.fn();




describe('Tech Challenges', () => {
    it('Should return 200', async () => {
        const fackTechChallenges = [
            {
                "id": 1,
                "situation": "Build failed with error.",
                "task": "I needed to identify ..",
                "action": "Initially confused ..",
                "result": "Build succeeded ..",
                "date": "2025-01-08T00:00:00.000Z"
            },
            {
                "id": 2,
                "situation": "Build failed with error.",
                "task": "I needed to identify ..",
                "action": "Initially confused ..",
                "result": "Build succeeded ..",
                "date": "2025-01-08T00:00:00.000Z"
            },
        ]

        pool.query.mockResolvedValue({ rows: fackTechChallenges })

        await getTechChallenges(mockReq, mockRes, mockNext)

        expect(pool.query).toHaveBeenCalledWith('SELECT * FROM techchallenges')
        expect(mockRes.status).toHaveBeenCalledWith(200)
        expect(mockRes.json).toHaveBeenCalledWith({
            status: 'success',
            result: fackTechChallenges
        })
    })
})


