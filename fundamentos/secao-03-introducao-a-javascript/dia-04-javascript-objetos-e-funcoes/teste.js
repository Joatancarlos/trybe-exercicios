let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (valor in names) {
console.log(`Olá, ${names[valor]}`);
}

let car = {
model: 'A3 Sedan',
manufacturer: 'Audi',
year: 2020
};

for (key in car) {
    console.log(key, car[key]);
}