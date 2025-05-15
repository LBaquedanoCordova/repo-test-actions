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

let person2 = new Person('Maria Cruz', 20, 'Paris', new Car('Nissan', 2025));