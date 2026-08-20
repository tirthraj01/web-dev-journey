// 1. Type Definitions
type Employee = {
    name: string;
    startDate: Date;
};

type Manager = {
    name: string;
    department: string;
};

// Union type: A TeamLead can be an Employee, a Manager, or both
type TeamLead = Employee | Manager; 

// 2. Object Assignments
let emp: Employee = {
    name: "Avanti",
    startDate: new Date("2025-12-01") // Fixed: Initialized as Date object
};

let manager: Manager = {
    name: "Raj",
    department: "IT"
};

let teamLead: TeamLead = {
    name: "Harkirat",
    startDate: new Date("2019-01-01"), // Fixed: Initialized as Date object
    department: "HR"                   // Valid: Union allows combined properties
};

// 3. Helper Function to Handle Union Types Safely
function printTeamLeadDetails(leader: TeamLead) {
    console.log(`Name: ${leader.name}`);
    
    // Check if 'startDate' exists on the object before using it
    if ("startDate" in leader) {
        console.log(`Start Date: ${leader.startDate.toDateString()}`);
    }
    
    // Check if 'department' exists on the object before using it
    if ("department" in leader) {
        console.log(`Department: ${leader.department}`);
    }
}

// 4. Execution Examples
printTeamLeadDetails(teamLead);
