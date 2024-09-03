// create emps, department and role interfaces.
export interface Department {
    dep_id: number;
    dep_name: string;
}

export interface Role {
    role_id: number;
    title: string;
    salary: number;
    department_id: number;
}

export interface Employee {
    id:number;
    first_name: string;
    last_name: string;
    role_id: number;
    manager_id: number;
}