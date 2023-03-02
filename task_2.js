let employees = {
    pay (employee, munth, sum){
        employee.wallet [munth] = sum;
    }
}

let frontendDeveloper = {
    wallet: {},
    name: 'Mike',
}

Object.setPrototypeOf (frontendDeveloper, employees);

let backendDeveloper = {
    wallet: {},
    name: 'Bob',
};

Object.setPrototypeOf (backendDeveloper, employees);

employees.pay(backendDeveloper, 'june', 1500);
employees.pay(frontendDeveloper, 'june', 1000);

console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);