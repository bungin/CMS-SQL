INSERT INTO department (dep_id, name)
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

INSERT INTO role (role_id, title, salary, department_id)
VALUES
  (1, 'Software Engineer', 100000, 1),
  (11, 'Lead Software Engineer', 120000, 1),
  (12, 'Engineering Manager', 150000, 1),
  (2, 'Accounting', 80000, 2),
  (13, 'Finance Manager', 120000, 2),
  (3, 'Lawyer', 120000, 3),
  (4, 'Sales Manager', 150000, 4),
  (15, 'Sales Representative', 80000, 4),
  (5, 'Marketing Manager', 150000, 5),
  (16, 'Marketing Specialist', 80000, 5),
  (6, 'HR Manager', 120000, 6),
  (14, 'HR Representative', 80000, 6),
  (7, 'Customer Service Manager', 120000, 7),
  (17, 'Customer Service Representative', 80000, 7),
  (8, 'R&D Manager', 150000, 8),
  (18, 'R&D Pleb', 80000, 8),
  (9, 'QA Manager', 120000, 9),
  (19, 'QA Pleb', 80000, 9),
  (10, 'IT Manager', 150000, 10);
  (20, 'IT Plebian', 80000, 10);
