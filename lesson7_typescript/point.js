export default class Person {
    constructor(id, name, phone, address) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
    logNmae() {
        console.log(this.name);
    }
    set Id(value) {
        this.id = value;
    }
    get Id() {
        return this.id;
    }
}
