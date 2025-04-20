-- Insert into about_me
INSERT INTO about_me (first_name, last_name, profession, about)
VALUES (
    'Kh',
    'D',
    'Junior Web Developer',
    'I''m junior web Developer. I have designed, developed and deployed several projects ,and my mission is to embrace a journey of continuous learning, crafting innovative web applications, and effecting positive change. This mission follows my successful completion of a rigorous 9-month software development program at CodeYourFuture boot camp in Manchester.'
);

-- Insert technical skills
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

-- Insert soft skills
INSERT INTO skills (name, type, image) VALUES
('Presentation skills', 'soft', NULL),
('Time Management', 'soft', NULL),
('Collaboration', 'soft', NULL),
('Problem Solving', 'soft', NULL),
('Microsoft Office programs', 'soft', NULL);

-- Insert projects
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

-- Insert collaboration tools
INSERT INTO collaborations (name) VALUES
('GitHub Kanban Board'),
('Trello Kanban'),
('Miro'),
('Slack'),
('Zoom'),
('Google Meet'),
('Teams');
