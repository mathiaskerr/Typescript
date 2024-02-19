const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// type alias
// array is lots of records whereas tuple is records referencing one object or thing
type Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ['brown', true, 40];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number]= [400, 3354];
// object much clearer to display information
const carStats={
    horsepower: 400,
    weight: 3354,
};
