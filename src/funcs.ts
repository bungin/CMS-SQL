import { pool } from './connections.js';
import inquirer from 'inquirer';
import type { Employee, Department, Role } from './types.js';
import { QueryResult } from 'pg';
import { startCli } from './index.js';



export const viewAllEmployees = async () => {
    const query = 'SELECT * FROM employee';
    const res = await pool.query(query);
    console.table(res.rows);
    startCli();
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
                choices: roles.map((role: Role) => ({ name: role.title, value: role.role_id }))
            },
            {
                type: 'input',
                name: 'manager_id',
                message: "Enter the employee's manager's ID",
                default: null
            }
        ])
    try { 
        const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
        const res = await pool.query(query, [inputData.first_name, inputData.last_name, inputData.role_id, inputData.manager_id ? inputData.manager_id : null]);
        console.log('Employee added!');
        startCli();
    } catch (error) {
        console.log(error);
    }
};

export const updateEmployeeRole = async () => {
    const employeeResult = await pool.query('SELECT * FROM employee');
    const employees = employeeResult.rows;

    const rolesResult = await pool.query('SELECT * FROM roles');
    const roles = rolesResult.rows;

    const inputData = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'employee_id',
                message: 'Select the employee to update',
                choices: employees.map((employee: Employee) => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id }))
            },
            {
                type: 'list',
                name: 'role_id',
                message: 'Select the new role',
                choices: roles.map((role: Role) => ({ name: role.title, value: role.role_id }))
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'Enter the manager ID'
            }
        ])
    const query = 'UPDATE employee SET role_id = $1, manager_id = $2 WHERE id = $3';
    const res = await pool.query(query, [inputData.role_id, inputData.manager_id ? inputData.manager_id : null, inputData.employee_id]);
    startCli();
};

export const viewAllRoles = async () => {
    const query = 'SELECT * FROM roles';
    const res = await pool.query(query);
    console.table(res.rows);
    startCli();
};

export const addRole = async () => {
    const departmentResult = await pool.query('SELECT * FROM department');
    const department = departmentResult.rows;

    const inputData = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of the new role'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary for the new role'
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'Select the department for the new role',
                choices: department.map((department: Department) => ({ name: department.dep_name, value: department.dep_id }))
            }
        ])
    const query = 'INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)';
    const res = await pool.query(query, [inputData.title, inputData.salary, inputData.department_id]);
    console.log('Role added!');
    startCli();
};

export const viewAllDepartments = async () => {
    const query = 'SELECT * FROM department';
    const res = await pool.query(query);
    console.table(res.rows);
    startCli();
};

export const addDepartment = async () => {
    const inputData = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'dep_name',
                message: 'Enter the name of the new department'
            }
        ])
    const query = 'INSERT INTO department (dep_name) VALUES ($1)';
    const res = await pool.query(query, [inputData.dep_name]);
    console.log('Department added!');
    startCli();
};

export const removeEmployee = async () => {
    const employeeResult = await pool.query('SELECT * FROM employee');
    const employees = employeeResult.rows;

    const inputData = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'employee_id',
                message: 'Select the employee to remove',
                choices: employees.map((employee: Employee) => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id }))
            }
        ])
    const query = 'DELETE FROM employee WHERE id = $1';
    const res = await pool.query(query, [inputData.employee_id]);
    console.log('Employee removed!');
    startCli();
};

export const removeRole = async () => {
    const roleResult = await pool.query('SELECT * FROM roles');
    const roles = roleResult.rows;

    const inputData = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'role_id',
                message: 'Select the role to remove',
                choices: roles.map((role: Role) => ({ name: role.title, value: role.role_id }))
            }
        ])
    try {
    const query = 'DELETE FROM roles WHERE role_id = $1';
    const res = await pool.query(query, [inputData.role_id]);
    console.log('Role removed!');
    startCli();
    } catch (error){
        console.log(error);
    }
};

export const removeDepartment = async () => {
    const departmentResult = await pool.query('SELECT * FROM department');
    const departments = departmentResult.rows;

    const inputData = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'dep_id',
                message: 'Select the department to remove',
                choices: departments.map((department: Department) => ({ name: department.dep_name, value: department.dep_id }))
            }
        ])
    try {
        const query = 'DELETE FROM department WHERE dep_id = $1';
        const res = await pool.query(query, [inputData.dep_id]);
        console.log('Department removed! Make sure to update your Employees information');
        startCli();
    } catch (error){
        console.log(error);
    }
};

export const viewDepartmentSalary = async () => {
    const departmentResult = await pool.query('SELECT * FROM department');
    const department = departmentResult.rows;

    const inputData = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'dep_id',
                message: 'Select the department to view total salary',
                choices: department.map((department: Department) => ({ name: department.dep_name, value: department.dep_id }))
            }
        ])
    try {
        const query = 'SELECT SUM(salary) FROM roles WHERE department_id = $1';
        const res = await pool.query(query, [inputData.dep_id]);
        console.log(`The total salary for this department is: $${res.rows[0].sum}`);
        startCli();
    } catch (error) {
        console.log(error);
    }
};