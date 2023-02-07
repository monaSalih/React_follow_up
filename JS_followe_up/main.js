// CLASS
class Car{
    constructor(model,make,year,min,max){
        this.model=model,
        this.make=make,
        this.age=this.carAge(year),
        this.cost=this.carCost(min,max)

        
    }

    getCarInfo(){
        return `A ${this.model} made by ${this.make} at ${this.age} and my cost ${this.cost}`
        // `A ${this.model} made by ${this.make} at ${this.year}` called templet litarels
    }

    carAge(year){
        return 2023-year;
    }

    carCost(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
const car1= new Car( "Camry","Toyota",2010,6000,10000);
console.log(car1.getCarInfo());


let list=[1,2,3,4,5,6,7,8];

const result = list.map(num => num * 10);

console.log(result,"uuuuuuuuuuuuuuuu");