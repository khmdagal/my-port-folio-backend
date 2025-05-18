const { asyncWrapProviders } = require('async_hooks');
const { getFeedback, postFeedback } = require('../src/controllers/feedbackControllers');
const pool = require('../src/utilis/db');
const { deserialize } = require('v8');
jest.mock('../src/utilis/db', () => ({
    query: jest.fn(),
}));

 const mockReq = {
    };

    const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };

    const mockNext = jest.fn();
describe('GET / feedbacks', () => {
   
    it('should get all feedbacks 200', async () => {
        // setup
        const feedback = [
            {
                id: 1,
                name: 'Adam',
                email: 'adam@hotmail.com',
                feedback: 'great work keep working',
                rate: 7
            },
            {
                id: 2,
                name: 'jk',
                email: 'jk@otmail.com',
                feedback: 'never give up, good work',
                rate: 8
            }
        ];
        pool.query.mockResolvedValue({ rows: feedback });
        // call the actuall controler function

        await getFeedback(mockReq, mockRes, mockNext);

        // assert 
        expect(pool.query).toHaveBeenCalledWith('SELECT * FROM feedbacks');
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({
            status: 'success',
            result: feedback
        })
    });
});

describe('POST / feedbacks 201', () => {


    it('Should return 201 for posting new feedback', async () => {
        //1. setup the request body
        const newFeedback = {
            id: 1,
            name: 'Adam',
            email: 'adam@hotmail.com',
            feedback: 'great work keep working',
            rating: 7
        }
        mockReq.body = newFeedback;
        // 2. setup resolved query
        await pool.query.mockResolvedValue({ rowCount: 1 });


        // function to test

        await postFeedback(mockReq, mockRes, mockNext);
        // assert
        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(pool.query).toHaveBeenCalledWith(`insert into feedbacks(id, name, email, feedback, rating) 
            values($1, $2, $3, $4, $5)`, [newFeedback.id, newFeedback.name, newFeedback.email, newFeedback.feedback, newFeedback.rating]);

        expect(mockRes.json).toHaveBeenCalledWith({
            status: 'success',
            message: 'New feedback received'
        })

    });
     it('Should return 400 Invalid Data', async () => {
        
        // setup
        const invalidfeedback = {
            id: 1,
            name: 'Adam',
            email: 'adam@hotmail.com',
            feedback: 'great work keep working',
            rating: 7 // this field violates data validation rule, number instead of string
        };

        mockReq.body = invalidfeedback;

        pool.query.mockResolvedValue({ rowCount: 0 });

        // call the controller function
        await postFeedback(mockReq, mockRes, mockNext);
        // assert
        expect(mockRes.status).toHaveBeenCalledWith(400)
        expect(pool.query).toHaveBeenCalledWith(`insert into feedbacks(id, name, email, feedback, rating) 
            values($1, $2, $3, $4, $5)`, [invalidfeedback.id, invalidfeedback.name, invalidfeedback.email, invalidfeedback.feedback, invalidfeedback.rating]);
        expect(mockRes.json).toHaveBeenCalledWith({
            status: 'fail',
            message: 'Feedback not posted'
        })
    })

});

