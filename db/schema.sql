DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;
\c cms_db;

CREATE TABLE department (
  dep_id SERIAL PRIMARY KEY,
  dep_name VARCHAR(255) UNIQUE NOT NULL
);

-- references need set

CREATE TABLE roles (
  role_id SERIAL PRIMARY KEY,
  title VARCHAR(255) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department (dep_id)
);

CREATE TABLE employee ( 
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES roles (role_id),
    FOREIGN KEY (manager_id) REFERENCES employee (id)
);
-- manager id is a self reference to employee id????