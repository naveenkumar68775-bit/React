use college

db.createCollection("employees")

db.employees.insertMany([
    {
        id: 101,
        name: "Naveen",
        salary: 25000,
        role: "Developer"
    },
    {
        id: 102,
        name: "Kumar",
        salary: 30000,
        role: "Tester"
    },
    {
        id: 103,
        name: "Arun",
        salary: 35000,
        role: "Manager"
    }
])

db.employees.find()
