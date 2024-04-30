// const products = [
//     { name: "Product 1", price: 40, category: "Electronics" },
//     { name: "Product 2", price: 35, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 50, category: "Clothes" },
//     { name: "Product 6", price: 85, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 75, category: "Electronics" },
// ];

// const res = products.reduce((acum, item) => {
//     let key = item.category;
//     if (acum[key]) {
//         acum[key].push(item.price)
//         return acum
//     }
//     else {
//         acum[key] = [item.price];
//         return acum
//     }
// }, {})

// console.log(res)


// const products2 = [
//     { name: "Product 1", price: 40, category: "Electronics" },
//     { name: "Product 2", price: 35, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Cars" },
//     { name: "Product 4", price: 40, category: "Electronics" },
//     { name: "Product 5", price: 70, category: "Clothes" },
//     { name: "Product 6", price: 50, category: "Clothes" },
//     { name: "Product 7", price: 40, category: "Cars" },
//     { name: "Product 8", price: 85, category: "Electronics" },
//     { name: "Product 9", price: 45, category: "Clothes" },
//     { name: "Product 10", price: 10, category: "Cars" },
//     { name: "Product 11", price: 50, category: "Cars" },
// ];

// const res2 = products2.reduce((acum,item)=>{
//     let key = item.category
//     if(acum[key]){
//     acum[key].push(item.price)
//     return acum
//     } else{
//         acum[key]=[item.price]
//         return acum
//     }
// },{})

// console.log(res2)


const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
  ];


  const res=employees.reduce((acum,employee)=>{
    let key = employee.department
    if(acum[key]){
        acum[key].push(employee.salary)
        return acum
    } else{
        acum[key] = [employee.salary]
        return acum
    }
  }, {})


    const avgSalary= object.keys(res).map(department=> {
        const sum = res[key].reduce((acum,employee) => acum + employee.salary,0)
        return {department: key, average:sum/res[key].length}
    })
    const highPaidDepartments = avgSalaryByDepartment.filter(department => department.average > 65000);
//   function calcAvg(res)



  console.log(res)