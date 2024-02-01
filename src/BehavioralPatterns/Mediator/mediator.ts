interface Mediator {
    notify(sender: object, event: string): void;
    addColleague(colleague: object): void;
}

interface Colleague {
    mediator: Mediator;
    send(message: string): void;
    receive(message: string): void;
}

class ConcreteMediator implements Mediator {
    private colleagues: Colleague[] = [];

    public addColleague(colleague: Colleague): void {
        this.colleagues.push(colleague);
    }

    public notify(sender: Colleague, event: string): void {
        this.colleagues.forEach((colleague) => {
            if (colleague === sender) return;
            colleague.receive(
                `${sender.constructor.name} sends message: ${event}`
            );
        });
    }
}

class ConcreteColleagueA implements Colleague {
    mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
        this.mediator.addColleague(this);
    }

    public send(message: string): void {
        console.log(`Colleague A sends: ${message}`);
        this.mediator.notify(this, message);
    }

    public receive(message: string): void {
        console.log(`Colleague A receives: ${message}`);
    }
}

class ConcreteColleagueB implements Colleague {
    mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
        this.mediator.addColleague(this);
    }

    public send(message: string): void {
        console.log(`Colleague B sends: ${message}.`);
        this.mediator.notify(this, message);
    }

    public receive(message: string): void {
        console.log(`Colleague B receives: ${message}.`);
    }
}

const mediator = new ConcreteMediator();

const colleagueA = new ConcreteColleagueA(mediator);
const colleagueB = new ConcreteColleagueB(mediator);

colleagueA.send("Hello from Colleague A!");
colleagueB.send("Hi from Colleague B!");
