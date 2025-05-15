class Car {
    constructor(marca, anhio) {
        this.marca = marca;
        this.anhio = anhio;
    }
}

class Person {
    constructor(name, age, city, auto) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.auto = auto;
    }
}

const person1 = new Person('Tamir Gamboa', 64, 'Lisboa', new Car('Toyota', 2024));
