import { pool } from './connections.js';
import inquirer from 'inquirer';
export const viewAllEmployees = async () => {
    const query = `SELECT * FROM employees`;
    console.log('Employee check'); // crashes on 11, no error
    const res = await pool.query(query);
    console.log('res', res);
    console.log('Employee check 2'); // This is not being printed
    console.table(res.rows);
};
export const addEmployee = async () => {
    const rolesResult = await pool.query(`SELECT * FROM roles`);
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
            choices: roles.map((role) => ({ name: role.title, value: role.id }))
        },
    ]);
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
