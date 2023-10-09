export interface Employee {
    employeeId: number;
    employeeName: string;
    // departmentName: string;
    // birthday: string;
}

export class SearchCondition {
    id!: number;
    name!: string;
    fromDate!: string;
    toDate!: string;
    departmentId!: number;
}