class Transport {
    constructor(name, speed, capacity) {
        this.name = name
        this.speed = speed
        this.capacity = capacity
    }

    start() {
        console.log(`${this.name} start`)
    }

    stop() {
        console.log(`${this.name} stop`)
    }
}

class Car extends Transport {
    constructor(name, speed, capacity, fuelType) {
        super(name, speed, capacity)
        this.fuelType = fuelType
    }

    driveMode(mode) {
        if (mode === "") {
            console.log("error mode")
        } else if (mode === "sport") {
            console.log(`mode changed to ${mode}`)
        } else if (mode === "eco") {
            console.log(`mode changed to ${mode}`)
        } else if (mode === "comfort") {
            console.log(`mode changed to ${mode}`)
        } else {
            console.log("unknown mode")
        }
    }
}

class Airplane extends Transport {
    constructor(name, speed, capacity, altitude) {
        super(name, speed, capacity)
        this.altitude = altitude
    }

    fly() {
        console.log(`${this.name} is starting to fly`)
    }
}

class Ship extends Transport {
    constructor(name, speed, capacity, cargoCapacity) {
        super(name, speed, capacity)
        this.cargoCapacity = cargoCapacity
    }

    sail() {
        console.log(`${this.name} is starting to sail`)
    }
}

const car1 = new Car("nexia", 200, 2, "Petrol")
const airplane1 = new Airplane("airbus", 900, 400, 35000)
const ship1 = new Ship("ship", 40, 2000, 10000)

// car
// car1.start()
// car1.driveMode("sport")
// car1.stop()

// airplane
// airplane1.start()
// airplane1.fly()
// airplane1.stop()

// ship
// ship1.start()
// ship1.sail()
// ship1.stop()
