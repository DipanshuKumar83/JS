const employee={
    calcTax (){
        console.log("tax is 5% of salary");
    },
};

const karan={
    salary: 50000,
};

karan.__proto__=employee;
