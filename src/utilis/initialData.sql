-- Insert into about_me its initial data
INSERT INTO about_me (first_name, last_name, gitHub, linkedIn, profession, about)
VALUES (
    'Kh',
    'D',
    'https://github.com/khmdagal',
    'https://www.linkedin.com/in/kh-m-dagal/',
    'Junior Web Developer',
    'I''m a junior web Developer and have designed, developed, and deployed several projects. My mission is to embark on a journey of continuous learning, crafting innovative web applications, and effecting positive change. This mission follows my successful completion of a rigorous 9-month software development program at the CodeYourFuture boot camp in Manchester.'
);

-- Insert technical skills its initial data
INSERT INTO skills (name, type, image) VALUES
('JavaScript', 'technical', '../Images/javaScript-logo.jpg'),
('HTML5', 'technical', '../Images/html5-logo.png'),
('CSS3', 'technical', '../Images/css3-logo.jpg'),
('Express.js', 'technical', '../Images/cypress_logo.png'),
('REST APIs', 'technical', '../Images/rest-apis-logo.png'),
('React.js', 'technical', '../Images/react-js-logo.png'),
('Ant Design', 'technical', '../Images/ant-design-logo.jpg'),
('Bootstrap', 'technical', '../images/bootstrap-logo.png'),
('TDD', 'technical', '../Images/tdd-logo.png'),
('Automation Testing', 'technical', '../Images/test-automation-logo.png'),
('Cypress.io', 'technical', '../Images/cypress_logo.png'),
('PostgreSQL', 'technical', '../Images/PostgreSQL-logo.jpg'),
('SQL Sever', 'technical', '../Images/microsoft-sql-server-logo.jpg'),
('MongoDB', 'technical', '../Images/mongoDB-logo.png'),
('Responsive Web Design', 'technical', '../Images/responsive-logo.png'),
('Accessibility auditing', 'technical', '../Images/accessibility-logo.jpg');

-- Insert soft skills its initial data
INSERT INTO skills (name, type, image) VALUES
('Presentation skills', 'soft', NULL),
('Time Management', 'soft', NULL),
('Collaboration', 'soft', NULL),
('Problem Solving', 'soft', NULL),
('Microsoft Office programs', 'soft', NULL);

-- Insert projects its initial data
INSERT INTO projects (name, role, demo, objective, frontend, backend, tech_stack)
VALUES
(
  'CYF Group Buddy Project',
  'Developer',
  ARRAY['https://ksk-energey-saving-system.netlify.app'],
  'To cultivate collaborative teamwork, problem-solving skills and a strategic programming mindset. Initiated dynamic brainstorming sessions to conceive and develop a project with a significant positive impact.',
  'The endeavor was centered on the utilization of modern front-end technologies, particularly HTML, CSS and pure JavaScript. Rather than relying on traditional frameworks, we harnessed the capabilities of the following technologies.',
  '',
  'HTML, CSS and JavaScript'
),
(
  'Spelling Test Practice Project',
  'Developer',
  ARRAY['https://statutory-spelling-practice-app.netlify.app/'],
  'The project was undertaken with the overarching goal of creating a modern web application to aid children''s preparation for statutory spelling assessments.',
  'Leveraged powerful modern technologies such as React.js, JavaScript and CSS to deliver an interactive user experience.',
  'Employed Node.js and Express library to establish a seamless and efficient connection between front-end and back-end components. Additionally, incorporated PostgreSQL database to manage robust data storage and retrieval.',
  'HTML, CSS, React.js, JavaScript, Node.js, PostgreSQL and Cypress'
),
(
  'The Collective Foundation Project',
  'Developer',
  ARRAY['https://starter-kit-fhvk.onrender.com', 'https://starter-kit-fhvk.onrender.com/admin'],
  'This was a CYF boot camp project undertaken to construct a fully operational CMS website catering to the needs of the Collective Foundation Charity, based in Hungary.',
  'Blended React.js, JavaScript, CSS, and Ant Design to shape a dynamic and visually engaging front-end.',
  'Utilized Node.js to ensure the smooth flow of data processing, impeccable communication between client-side and server-side, and integration with a PostgreSQL database.',
  'React.js, Ant Design, JavaScript, Node.js, PostgreSQL, HTML5 and CSS3, deployed on render.com'
);

-- Insert collaboration tools its initial data
INSERT INTO collaborations (name) VALUES
('GitHub Kanban Board'),
('Trello Kanban'),
('Miro'),
('Slack'),
('Zoom'),
('Google Meet'),
('Teams');

-- Insert techchallenges its initial data
INSERT INTO techChallenges (situation, task, action, result, date) 
VALUES 
(
    'When selected the words to be assigned, they appeared in the correct format in the form, but didn’t make it to the database. The table wasn’t showing the words either.',
    'I had to debug where the problem was coming from and solve the issue.',
    'Started with GitHub commits for the setAssignment component. Checked backend logs and realized words were not reaching the server. Focused on the frontend and debugged the setAssignment component. Created a state variable `words`, used `useEffect()` to sync with `selectedWords`, and updated `formData` before submission.',
    'Successfully solved the problem. Deployed and tested the solution and it worked as expected.',
    '2025-01-19'
),
(
    'Build failed with error: Module not found: Can’t resolve ./pages/LogIn.',
    'I needed to identify the actual issue and fix the build error.',
    'Initially confused since the file appeared to exist. Then checked the deployed structure and noticed a casing mismatch: expected `LogIn` but found `Login`. Renamed the import path to match the actual file.',
    'Build succeeded after renaming. Learned the importance of case sensitivity in imports and deployment environments.',
    '2025-01-08'
),
(
    'Opened a pull request to the master branch instead of the QA branch after implementing XSS/CSP security features.',
    'Had to change the base branch of the PR safely to QA before merging.',
    'Researched GitHub documentation on changing the base branch. Clarified the meaning of base branch. Carefully followed the instructions to rebase and update the PR target branch.',
    'Successfully changed the PR to QA branch and learned what rebasing a branch really means.',
    '2025-02-04'
),
(
    'Needed to choose the right tech stack to test my app both on the frontend and backend.',
    'Had to learn a variety of testing concepts and frameworks for both front-end and back-end.',
    'Created a dedicated branch `testing_branch`. Started researching on frontend and backend testing using resources like GeeksforGeeks.',
    'Gained broader understanding of testing and different frameworks, which helped me make more informed decisions.',
    '2025-02-04'
),
(
    'Faced issues running Mocha and Chai for backend testing. Errors included module not supported and incorrect import/export syntax.',
    'Understand and resolve the ES module vs CommonJS conflicts in the test setup.',
    'Installed Mocha and Chai as dev dependencies. Encountered errors related to ES modules. Learned that dynamic `import()` should be used or `"type": "module"` must be set in package.json. Updated the import style and fixed file paths.',
    'Successfully configured Mocha and Chai and ran my tests without issues.',
    '2025-02-05'
),
(
    'While working on my portfolio backend with time constraints, I got a module not found error related to incorrect pathing: .././routes/collaborationRoutes.',
    'Debug and fix the broken import to make the server run.',
    'Paused work to prioritize rest. Resumed next morning, read the Node.js error message, understood the path issue, and corrected the directory address in the import.',
    'The server started successfully after fixing the path, and I learned a deeper understanding of module resolution.',
    '2025-04-20'
);