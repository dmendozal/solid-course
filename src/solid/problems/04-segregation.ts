interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
    swim(): void;
}

export class Tucan implements Bird {
    fly(): void { }
    eat(): void { }
    run(): void { }
    swim(): void { }
}

class HumminBird implements Bird {
    fly(): void { }
    eat(): void { }
    run(): void { }
    swim(): void { }
}

class Ostrich implements Bird {
    fly(): void {
        throw new Error('esta ave no vuela');
    }
    eat(): void { }
    run(): void { }
    swim(): void { }
}

class Penguin implements Bird {
    fly(): void {
        throw new Error("esta ave no vuela.");
    }
    eat(): void { }
    run(): void { }
    swim(): void { }
}