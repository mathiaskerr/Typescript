const carMakers = ['ford', 'toyota', 'chevy'];

// annotate empty arrays to avoid any types being assigned
const emptyArray: string[] = []; 

const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]; 

// help with inference when extracting values
const vehicle = carMakers[0];
const myVehicle = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with map
// when the tpe is known you get access to the methods ie string methods

carMakers.map((car:string): string => {
  return car.toUpperCase();
});

// Flexible types

const importantDates = [new Date(), '2030-10-10'];

const importantDatesTwo: (Date | string)[] = [new Date()];
// you will have to overwrite the type inference if declared as above or as empty array. now you can can add dates and strings
importantDatesTwo.push('2030-10-10');
importantDatesTwo.push(new Date());