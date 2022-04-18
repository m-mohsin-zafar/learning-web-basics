export default class Person {

    private id: number;
    private name: String;
    private phone: String[];
    private address: String | number[]

    constructor(
        id?: number, 
        name?: String,
        phone?: String[],
        address?: String | number[]
        ){
            this.id = id;
            this.name = name;
            this.phone = phone;
            this.address = address;
        }

    logNmae(){
        console.log(this.name);
    }
    set Id(value: number){
        this.id = value;
    }
    get Id(): number{
        return this.id;
    }

}
