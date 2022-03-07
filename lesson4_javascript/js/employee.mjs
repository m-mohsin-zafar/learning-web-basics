class Employee {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    static displayDetails = () => {
        console.log(`ID: ${this.id} \tName: ${this.name}`);
    }
    
    displayDetailsInternal = () => {
        console.log(`ID: ${this.id} \tName: ${this.name}`);
    }

    get getId(){
        return this.id;
    }

    set setId(id){
        this.id = id;
    }
    
}

class JuniorStaff extends Employee {
    constructor(id, name, age){
        super(id, name, age);
    }
    
}

const PI = 3.14;

export {PI, Employee, JuniorStaff};