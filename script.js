class Car {
    constructor(marca, anhio) {
        this.marca = marca;
        this.anhio = anhio  ;
    }
}

class Mascota {
    constructor(tipo, name) {
        this.tipo = tipo;
        this.name = name;
    }
}

class Person {
    constructor(name, lastname, age, city, auto) {
             this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.city = city;
           this.auto = auto;
    }

    get hasMascota  (){
        return new Mascota('perro', 'Firulais')
    }
}

const person1 = new Person('Santiago Gamboa', 31, 'Lisboa', new Car('Lamborgini', 2025));

