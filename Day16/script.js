 //1 Create an array of objects with the key as employee name and value as street name 

 const company = {
     details: {
         name: "Acme Corp",
         address: "123 Main St",
         city: "Anytown",
         state: "CA",
     },
     employees: [{
             name: "Alice",
             age: 30,
             address: {
                 street: "123 Main St",
                 zip: "12345",
             },
         },
         {
             name: "Bob",
             age: 25,
             address: {
                 street: "456 Main St",
                 zip: "23456",
             },
         },
         {
             name: "Charlie",
             age: 35,
             address: {
                 street: "789 Main St",
                 zip: "34567",
             },
         },
     ],
 };



 // {Alice: "123 Main St", Bob: "456 Main St", Charlie: "789 Main St"}

 const func = ({
     employees
 }) => employees.reduce((acc, {
     name,
     address: {
         street
     }
 }) => ({
     ...acc,
     [name]: street
 }), {})


 //2 mean: sum of all values divided by the total number of values
 // median: A median is the centre value of a given list of observations when arranged in an order.
 // Find the mean and median of numbers
 const numbers1 = [12, 46, 32, 64, 100, 120, 198];
 const numbers2 = [12, 46, 32, 100, 120, 198];

 const median = arr => {
     let newArr = arr.sort(function (a, b) {
         return a - b
     })
     return newArr.length % 2 === 0 ? (newArr[(newArr.length) / 2] + newArr[((newArr.length) / 2) - 1]) / 2 : newArr[Math.floor((newArr.length) / 2)]

 }




 //3 write a function which removes all letters between first and last letter of a word and replace with number of letters

 const input = "Every developer likes to mix kubernetes and javascript";

 const inputArray = input.split(" ")

 let newArray = inputArray.map((word) => {
     let wordLength = word.length
     let firstLetter = word[0]
     let lastLetter = word[word.length - 1]
     return wordLength > 2 ? $ {
         firstLetter
     }
     $ {
         wordLength - 2
     }
     $ {
         lastLetter
     }: word + " "
 })



 //4 Find the average salary of all the employees
 let employees = [{
         "id": 11,
         "name": "Abhinav",
         "salary": 75000
     },
     {
         "id": 2131,
         "name": "Gaurav",
         "salary": 62000
     },
     {
         "id": 3012,
         "name": "Raj",
         "salary": 32000
     },
     {
         "id": 3014,
         "name": "Abhi",
         "salary": 48000
     }
 ]



 //5 .Find all the employee names who earn more than the average salary?

 const findAvgSalary = employees => employees.reduce((acc, member, index, employees) =>
     (member.salary / employees.length) + acc, 0)

 const avgSalary = findAvgSalary(employees)

 const findRichEmployees = employees => employees.filter((employee) => employee.salary > avgSalary).map(({
     name
 }) => name)





 // Find the sum of all members workExp sum who are permanent (isPermenant)?

 var members = [{
         id: 111,
         name: "Chelsea Foster",
         workExp: 7,
         deptExp: 6,
         isPermanent: true,
     },
     {
         id: 102,
         name: "Aggie Sparling",
         workExp: 13,
         deptExp: 10,
         isPermanent: false,
     },
     {
         id: 123,
         name: "Timmy Matthews",
         workExp: 23,
         deptExp: 15,
         isPermanent: false,
     },
     {
         id: 66,
         name: "Emmet Foster",
         workExp: 22,
         deptExp: 9,
         isPermanent: true,
     },
     {
         id: 89,
         name: "Brent Dolan",
         workExp: 16,
         deptExp: 12,
         isPermanent: true,
     },
 ];