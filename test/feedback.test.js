const { getFeedback, postFeedback } = require('../src/controllers/feedbackControllers');

const pool = require('../src/utilis/db');

const mockReq = {

};

const mockRes = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
};

const mockNext = jest.fn();

jest.mock('../src/utilis/db', () => ({
    query: jest.fn(),
})
);

describe('feedback controller', () => {
    it('should get all feedbacks', async () => {
        // setup
        const fackFeedback = [
            {
                id: 1,
                name: 'Adam',
                email: 'adam@hotmail.com',
                feedback: 'great work keep working',
                rate: 7.5
            },
            {
                id: 2,
                name: 'jk',
                email: 'jk@otmail.com',
                feedback: 'never give up, good work',
                rate: 8
            }
        ];
        pool.query.mockResolvedValue({ rows: fackFeedback });
        // call the actuall controler function

        await getFeedback(mockReq, mockRes, mockNext);

        // assert 
        expect(pool.query).toHaveBeenCalledWith('SELECT * FROM feedbacks');
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({
            status: 'success',
            result: fackFeedback
        })
    })
})