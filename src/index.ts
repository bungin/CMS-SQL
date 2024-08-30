import { QueryResult } from 'pg';
import { pool, connectToDb } from './connections.js';
import inquirer from 'inquirer';
import { viewAllEmployees, addEmployee } from './funcs.ts';

await connectToDb();

const startCli = async () => {
    const data = await
    inquirer
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

    ])
switch (data.selection) {
    case 'View all Employees':
        {viewAllEmployees(); startCli();}
        break;
    case 'Add Employee':
        {addEmployee(); startCli();}
        break;
    // case 'Update Employee Role':
    //     {updateEmployeeRole(); startCli();}
    //     break;
    // case 'View all Roles':
    //     {viewAllRoles(); startCli();}
    //     break;
    // case 'Add Role':
    //     {addRole(); startCli();}
    //     break;
    // case 'View all Departments':
    //     {viewAllDepartments(); startCli();}
    //     break;
    // case 'Add Department':
    //     {addDepartment(); startCli();}
    //     break;
    case 'Quit':
        {console.log('Goodbye!'); process.exit();}
}
};



