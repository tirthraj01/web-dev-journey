enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

// Usage in a function
function checkAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full access granted.");
  }
}

checkAccess(UserRole.Admin); // Output: "Full access granted."
