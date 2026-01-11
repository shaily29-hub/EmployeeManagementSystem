const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build Login Page",
        description: "Create login UI using React and Tailwind",
        date: "2025-01-10",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve mobile responsiveness issue",
        date: "2025-01-05",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate authentication API",
        date: "2025-01-08",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    firstName: "Riya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Dashboard",
        description: "Create dashboard wireframe in Figma",
        date: "2025-01-11",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update README",
        description: "Add project setup steps",
        date: "2025-01-06",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Optimize CSS",
        description: "Improve performance and remove unused styles",
        date: "2025-01-12",
        category: "Frontend"
      }
    ]
  },
  {
    id: 3,
    firstName: "Kunal",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create REST APIs",
        description: "Develop CRUD APIs using Spring Boot",
        date: "2025-01-09",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database Schema",
        description: "Design MySQL schema",
        date: "2025-01-04",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "JWT Auth",
        description: "Implement JWT authentication",
        date: "2025-01-07",
        category: "Security"
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Unit Tests",
        description: "Add JUnit tests for services",
        date: "2025-01-13",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Refactor",
        description: "Improve code readability",
        date: "2025-01-03",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Error Handling",
        description: "Add global exception handling",
        date: "2025-01-14",
        category: "Backend"
      }
    ]
  },
  {
    id: 5,
    firstName: "Sahil",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Deploy App",
        description: "Deploy project on Render",
        date: "2025-01-15",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Environment Setup",
        description: "Configure local dev environment",
        date: "2025-01-02",
        category: "Setup"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "CI Pipeline",
        description: "Setup GitHub Actions",
        date: "2025-01-08",
        category: "DevOps"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Rajesh",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage=()=>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
const employees=JSON.parse(localStorage.getItem('employees'))
const admin=JSON.parse(localStorage.getItem('admin'))
return{employees,admin}
}