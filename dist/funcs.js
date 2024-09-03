import { pool } from './connections.js';
import inquirer from 'inquirer';
export const viewAllEmployees = async () => {
    const query = 'SELECT * FROM employee';
    const res = await pool.query(query);
    console.table(res.rows);
};
export const addEmployee = async () => {
    const rolesResult = await pool.query('SELECT * FROM roles');
    const roles = rolesResult.rows;
    const inputData = await inquirer
        .prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "Enter the employee's first name"
        },
        {
            type: 'input',
            name: 'last_name',
            message: "Enter the employee's last name"
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What is the Employees role?',
            choices: roles.map((role) => ({ name: role.title, value: role.role_id }))
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "Enter the employee's manager's ID"
        }
    ]);
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
    const res = await pool.query(query, [inputData.first_name, inputData.last_name, inputData.role_id, inputData.manager_id]);
    console.table(res.rows);
    console.log('Employee added!');
};
export const updateEmployeeRole = async () => {
    const employeesResult = await pool.query(`SELECT * FROM employees`);
    const roles = await pool.query(`SELECT * FROM roles`);
    const employees = employeesResult.rows;
    const inputData = await inquirer
        .prompt([
        {
            type: 'list',
            name: 'employee_id',
            message: 'Select the employee to update',
            choices: employees.map((employee) => ({ name: `${employee.first_name}' '${employee.last_name}`, value: employee.id }))
        }
    ]);
};
export const viewAllRoles = async () => {
    const query = `SELECT * FROM roles`;
    const res = await pool.query(query);
    console.table(res.rows);
};
