-- Create the about_me table
CREATE TABLE about_me (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    gitHub VARCHAR(100),
    linkedIn VARCHAR(100),
    profession VARCHAR(100),
    about TEXT
);

-- Create contact_me table
CREATE TABLE contact_me (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(250),
    subject VARCHAR(250),
    message txt
);
-- Create the skills table (combined tech and soft skills)
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(50), -- 'technical' or 'soft'
    image TEXT
);

-- Create the projects table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name TEXT,
    role TEXT,
    demo TEXT[],
    objective TEXT,
    frontend TEXT,
    backend TEXT,
    tech_stack TEXT
);

-- Create the collaborations table
CREATE TABLE collaborations (
    id SERIAL PRIMARY KEY,
    name TEXT
);

-- Create Tech Challenges table
CREATE TABLE techChallenges(
    id  SERIAL PRIMARY KEY,
    situation  text,
    task text,
    action text,
    result text,
    date date
);

-- Create feedback table

CREATE TABLE feedbacks(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(250),
    feedback TEXT,
    rate INTEGER
);