INSERT INTO department (dep_id, dep_name)
VALUES
  (DEFAULT, 'Engineering'),
  (DEFAULT, 'Finance'),
  (DEFAULT, 'Legal'),
  (DEFAULT, 'Sales'),
  (DEFAULT, 'Marketing'),
  (DEFAULT, 'Human Resources'),
  (DEFAULT, 'Customer Service'),
  (DEFAULT, 'Research and Development'),
  (DEFAULT, 'Quality Assurance'),
  (DEFAULT, 'Information Technology');

INSERT INTO roles (role_id, title, salary, department_id)
VALUES
  (DEFAULT, 'Software Engineer', 100000, 1),
  (DEFAULT, 'Accounting', 80000, 2),
  (DEFAULT, 'Lawyer', 120000, 3),
  (DEFAULT, 'Sales Manager', 150000, 4),
  (DEFAULT, 'Marketing Manager', 150000, 5),
  (DEFAULT, 'HR Manager', 120000, 6),
  (DEFAULT, 'Customer Service Manager', 120000, 7),
  (DEFAULT, 'R&D Manager', 150000, 8),
  (DEFAULT, 'QA Manager', 120000, 9),
  (DEFAULT, 'IT Manager', 150000, 10),
  (DEFAULT, 'Lead Software Engineer', 120000, 1),
  (DEFAULT, 'Engineering Manager', 150000, 1),
  (DEFAULT, 'Finance Manager', 120000, 2),
  (DEFAULT, 'HR Representative', 80000, 6),
  (DEFAULT, 'Sales Representative', 80000, 4),
  (DEFAULT, 'Marketing Specialist', 80000, 5),
  (DEFAULT, 'Customer Service Representative', 80000, 7),
  (DEFAULT, 'R&D Pleb', 80000, 8),
  (DEFAULT, 'QA Pleb', 80000, 9),
  (DEFAULT, 'IT Plebian', 80000, 10);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
  (DEFAULT, 'John', 'Doe', 1, 1),
  (DEFAULT, 'Jane', 'Doe', 2, 1),
  (DEFAULT, 'Alice', 'Smith', 3, 2),
  (DEFAULT, 'Bob', 'Smith', 4, 2),
  (DEFAULT, 'Charlie', 'Brown', 5, 2),
  (DEFAULT, 'David', 'Brown', 6, 2),
  (DEFAULT, 'Eve', 'Johnson', 7, 2),
  (DEFAULT, 'Frank', 'Johnson', 8, 2),
  (DEFAULT, 'Grace', 'Williams', 9, 2),
  (DEFAULT, 'Heidi', 'Williams', 10, 2),
  (DEFAULT, 'Ivan', 'Martinez', 11, 2),
  (DEFAULT, 'Jill', 'Martinez', 12, 2),
  (DEFAULT, 'Kevin', 'Garcia', 13, 2),
  (DEFAULT, 'Linda', 'Garcia', 14, 2),
  (DEFAULT, 'Morgan', 'Brown', 15, 2),
  (DEFAULT, 'Nancy', 'Brown', 16, 2),
  (DEFAULT, 'Oscar', 'Brown', 17, 2),
  (DEFAULT, 'Pamela', 'Brown', 18, 2),
  (DEFAULT, 'Quincy', 'Brown', 19, 2),
  (DEFAULT, 'Randy', 'Brown', 1, 2);

    SELECT * FROM department;
    SELECT * FROM roles;
    SELECT * FROM employee;