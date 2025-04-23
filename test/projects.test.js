const { getProjects } = require('../src/controllers/projectsControllers')

const pool = require('../src/utilis/db')

jest.mock('../src/utilis/db', () => ({
    query: jest.fn()
}));

const mockReq = {};
const mockRes = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
};
mockNext = jest.fn();

describe('Projects', () => {
    it('Should return 200', async () => {
        // setup
        const fackProjects = [
            {
                id: 1,
                name: 'The Collective Foundation Project',
                role: 'Developer',
                demo: ['https://starter-kit-fhvk.onrender.com', 'https://starter-kit-fhvk.onrender.com/admin'],
                objective: 'This was a CYF boot camp project',
                frontend: 'Blended React.js, JavaScript and CSS',
                backed: 'Utilized Node.js .',
                tech_stack: 'React.js, Ant Design, JavaScript, Node.js and PostgreSQL'
            },
            {
                id: 2,
                name: 'The Collective Foundation Project',
                role: 'Developer',
                demo: ['https://starter-kit-fhvk.onrender.com', 'https://starter-kit-fhvk.onrender.com/admin'],
                objective: 'This was a CYF boot camp project',
                frontend: 'Blended React.js, JavaScript and CSS',
                backed: 'Utilized Node.js .',
                tech_stack: 'React.js, Ant Design, JavaScript, Node.js and PostgreSQL'
            }
        ]
        pool.query.mockResolvedValue([fackProjects])

        // call the controller function
        await getProjects(mockReq, mockRes, mockNext)
        // assert the behaviour

        expect(pool.query).toHaveBeenCalledWith('SELECT * FROM projects')
        expect(mockRes.status).toHaveBeenCalledWith(200)
        expect(mockRes.json({
            status: 'success',
            result: fackProjects
        }))

    })
});