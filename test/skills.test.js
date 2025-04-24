// import the controller function and database connection
const { getSkills } = require('../src/controllers/skillsControllers');
const pool = require('../src/utilis/db');

// mock database connnection with jest
jest.mock('../src/utilis/db', () => ({
    query: jest.fn()
}));

// create global request response next
const mockReq = {};

const mockRes = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
};

const mockNext = jest.fn();


// create the test suite with descrite and it key words

describe('Skills', () => {
    it('Should return 200', async () => {
        // setup
        const fackSkills = [
            {
                "id": 1,
                "name": "JavaScript",
                "type": "technical",
                "image": "../Images/javaScript-logo.jpg"
            },
            {
                "id": 2,
                "name": "HTML5",
                "type": "technical",
                "image": "../Images/html5-logo.png"
            }
        ]

        // mock the pool query as a referrence not as function request witht the resolved value of the facke data
        pool.query.mockResolvedValue({rows:fackSkills})

        // call the controller function
        await getSkills(mockReq, mockRes, mockNext)

        // assert required behabiour
        expect(pool.query).toHaveBeenCalledWith('SELECT * FROM skills')
        expect(mockRes.status).toHaveBeenCalledWith(200)
        expect(mockRes.json).toHaveBeenCalledWith({
            status: 'success',
            result: fackSkills
        })
    })
})


