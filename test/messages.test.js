const { getMessages } = require('../src/controllers/messagesControllers')
const pool = require('../src/utilis/db')

const mockReq = {};
const mockRes = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
};
const mockNext = jest.fn();

jest.mock('../src/utilis/db', () => ({
    query: jest.fn()
}));

describe('Messages', () => {
    it('should return 200', async () => {
        // setup fake data and mocked pool quuery
        const fakeMessages = [
            {
                id: 1,
                name: 'visitor1',
                email: 'visitor@hotmail.com',
                subject: 'testing you contact me component, Great work',
                messages: 'Keep going, practice makes you better!!'
            },
            {
                id: 2,
                name: 'visitor2',
                email: 'visitor2@hotmail.com',
                subject: 'testinf contact me component, Great work',
                messages: 'Keep going, practice makes you better!!'
            }
        ];
        pool.query.mockResolvedValue({ rows: fakeMessages });

        // call controller function
        await getMessages(mockReq, mockRes, mockNext);

        // assert required behaviour
        expect(pool.query).toHaveBeenCalledWith('SELECT * FROM messages');
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({
            status: 'success',
            result: fakeMessages
        })
    })
})