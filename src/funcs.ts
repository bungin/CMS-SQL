import { pool } from './connections.ts';
import inquirer from 'inquirer';
import { Employee, Department, Role } from './types.ts';



export const viewAllEmployees = async () => {
    const query = `SELECT * FROM employees`;
    const res = await pool.query(query);
    console.table(res.rows);
}

export const addEmployee = async () => {
    const roles = await pool.query(`SELECT * FROM roles`);
    const inputData = await 
    inquirer
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
                choices: roles.map((role) => ({name: role.title, value: role.id}))
            },

])
};
export const updateEmployeeRole = async () => {
    const employees = await pool.query(`SELECT * FROM employees`);
    const roles = await pool.query(`SELECT * FROM roles`);
    const inputData = await 
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employee_id',
                message: 'Select the employee to update',
                choices: employees.map((employee) => (
                    {name: `${employee.first_name} ${employee.last_name}`, value: employee.id}))
            }
            ])
        };
                