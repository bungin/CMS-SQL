INSERT INTO department (dep_id, dep_name)
VALUES
  (1, 'Engineering'),
  (2, 'Finance'),
  (3, 'Legal'),
  (4, 'Sales'),
  (5, 'Marketing'),
  (6, 'Human Resources'),
  (7, 'Customer Service'),
  (8, 'Research and Development'),
  (9, 'Quality Assurance'),
  (10, 'Information Technology');

INSERT INTO roles (role_id, title, salary, department_id)
VALUES
  (1, 'Software Engineer', 100000, 1),
  (2, 'Accounting', 80000, 2),
  (3, 'Lawyer', 120000, 3),
  (4, 'Sales Manager', 150000, 4),
  (5, 'Marketing Manager', 150000, 5),
  (6, 'HR Manager', 120000, 6),
  (7, 'Customer Service Manager', 120000, 7),
  (8, 'R&D Manager', 150000, 8),
  (9, 'QA Manager', 120000, 9),
  (10, 'IT Manager', 150000, 10),
  (11, 'Lead Software Engineer', 120000, 1),
  (12, 'Engineering Manager', 150000, 1),
  (13, 'Finance Manager', 120000, 2),
  (14, 'HR Representative', 80000, 6),
  (15, 'Sales Representative', 80000, 4),
  (16, 'Marketing Specialist', 80000, 5),
  (17, 'Customer Service Representative', 80000, 7),
  (18, 'R&D Pleb', 80000, 8),
  (19, 'QA Pleb', 80000, 9),
  (20, 'IT Plebian', 80000, 10);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'John', 'Doe', 1, 1),
    (2, 'Jane', 'Doe', 2, 1),
    (3, 'Alice', 'Smith', 3, 2),
    (4, 'Bob', 'Smith', 4, 2),
    (5, 'Charlie', 'Brown', 5, 2),
    (6, 'David', 'Brown', 6, 2),
    (7, 'Eve', 'Johnson', 7, 2),
    (8, 'Frank', 'Johnson', 8, 2),
    (9, 'Grace', 'Williams', 9, 2),
    (10, 'Heidi', 'Williams', 10, 2),
    (11, 'Ivan', 'Martinez', 11, 2),
    (12, 'Jill', 'Martinez', 12, 2),
    (13, 'Kevin', 'Garcia', 13, 2),
    (14, 'Linda', 'Garcia', 14, 2),
    (15, 'Morgan', 'Brown', 15, 2),
    (16, 'Nancy', 'Brown', 16, 2),
    (17, 'Oscar', 'Brown', 17, 2),
    (18, 'Pamela', 'Brown', 18, 2),
    (19, 'Quincy', 'Brown', 19, 2),
    (20, 'Randy', 'Brown', 1, 2);