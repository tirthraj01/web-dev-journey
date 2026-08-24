// 1. Define an Interface to enforce a data structure
interface User {
    id: number;
    name: string;
    role: "Admin" | "User"; // Union type limiting options
}

// 2. Create a Class that uses types
class UserManager {
    private users: User[] = []; // Array of User objects

    // Method to add a user
    addUser(newUser: User): void {
        this.users.push(newUser);
        console.log(`✅ User "${newUser.name}" successfully added.`);
    }

    // Method to find a user by ID
    getUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }
}

// --- Execution ---

// Instantiate the class
const manager = new UserManager();

// Add valid users
manager.addUser({ id: 1, name: "Alice", role: "Admin" });
manager.addUser({ id: 2, name: "Bob", role: "User" });

// Fetch and display a user
const foundUser = manager.getUserById(1);
if (foundUser) {
    console.log(`Found: ${foundUser.name} (${foundUser.role})` );
}
