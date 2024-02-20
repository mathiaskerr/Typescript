class Vehicle{
    // public drive(): void{
    //     console.log('chugga chugga');
    // }

    // ///////////////////////////////////
    // this
    // color: string;

    // constructor(color: string){
    //     this.color = color;
    // }
// is the same as this
    constructor(public color: string){}
//////////////////////////////////////
    protected honk(): void{
        console.log('honk')
    }
}

const vehicle = new Vehicle('orange');
// vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);

// inheritance
class Car extends Vehicle{
    constructor(public wheels: number, color: string){
        super(color);
    }

    // overwriting method in child class
    private drive(): void{
        console.log('vroom  vroom');
    }
    startDrivingProcess(): void{
        this.drive();
        this.honk();
    }
}


const car = new Car(4, 'purple');
// car.drive();
car.startDrivingProcess();
// car.honk();