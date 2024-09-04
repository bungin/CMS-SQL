import { connectToDb } from './connections.js';
import inquirer from 'inquirer';
import { viewAllEmployees, addEmployee, updateEmployeeRole, viewAllRoles, addRole, removeRole, viewAllDepartments, addDepartment, removeDepartment, removeEmployee, viewDepartmentSalary } from './funcs.js';
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
                'Remove Employee',
                'Update Employee Role',
                'View all Roles',
                'Add Role',
                'Remove Role',
                'View all Departments',
                'View Department Salary',
                'Add Department',
                'Remove Department',
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
        case 'Remove Employee':
            {
                removeEmployee();
            }
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
        case 'Remove Role':
            {
                removeRole();
            }
        case 'View all Departments':
            {
                viewAllDepartments();
            }
            break;
        case 'View Department Salary':
            {
                viewDepartmentSalary();
            }
            break;
        case 'Add Department':
            {
                addDepartment();
            }
            break;
        case 'Remove Department':
            {
                removeDepartment();
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
