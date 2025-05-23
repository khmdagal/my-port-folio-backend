const { getCollaborationTools } = require('../src/controllers/collaborationToolsControllers');
const pool = require('../src/utilis/db');
jest.mock('../src/utilis/db', () => ({
    query: jest.fn(),
}));

const mockReq = {};
const mockRes = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
};
const mockNext = jest.fn();

describe('collaboration Tools', () => {
    it('should return 200', async () => {
        // setup
        const collaborationTools = [{ id: 1, name: 'Slack' }, { id: 2, name: '' }]
        pool.query.mockResolvedValue({ rows: collaborationTools });

        // call controller
        await getCollaborationTools(mockReq, mockRes, mockNext)

        // assert expectation
        expect(pool.query).toHaveBeenCalledWith('SELECT * FROM collaborations');
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({
            status: 'success',
            result: collaborationTools
        })
    });

    it('should return fail', async () => {
        // setup
        const error = new Error('fail');
        pool.query.mockRejectedValue(error);

        // call the controller
        await getCollaborationTools(mockReq, mockRes, mockNext);

        // assert expected behaviour
        expect(mockNext).toHaveBeenCalledWith(error)
    })
})