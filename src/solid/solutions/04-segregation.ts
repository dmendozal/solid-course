interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly() { return 100; }
    public eat() { }
}

class HumminBird implements Bird, FlyingBird {
    public fly() { return 200; }
    public eat() { }
}

class OstrichBird implements Bird, RunningBird {
    public run() { }
    public eat() { }
}

class PenguinBird implements Bird, SwimmerBird {
    public eat() { }
    public swim() { }
}