import { connectToDb } from './connections.js';
import inquirer from 'inquirer';
import { viewAllEmployees, addEmployee, updateEmployeeRole, viewAllRoles, addRole, viewAllDepartments, addDepartment } from './funcs.js';
console.log('Welcome to the Employee Tracker!');
await connectToDb();
console.log('welcome 2');
export const startCli = async () => {
    const data = await inquirer
        .prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'Select an option',
            choices: [
                'View all Employees',
                'Add Employee',
                'Update Employee Role',
                'View all Roles',
                'Add Role',
                'View all Departments',
                'Add Department',
                'Quit'
            ]
        }
    ]);
    switch (data.selection) {
        case 'View all Employees':
            {
                viewAllEmployees();
            }
            break;
        case 'Add Employee':
            {
                addEmployee();
            }
            break;
        case 'Update Employee Role':
            {
                updateEmployeeRole();
            }
            break;
        case 'View all Roles':
            {
                viewAllRoles();
            }
            break;
        case 'Add Role':
            {
                addRole();
            }
            break;
        case 'View all Departments':
            {
                viewAllDepartments();
            }
            break;
        case 'Add Department':
            {
                addDepartment();
            }
            break;
        case 'Quit':
            {
                console.log('Goodbye!');
                process.exit();
            }
    }
};
startCli();
