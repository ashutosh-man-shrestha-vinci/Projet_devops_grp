export class BerlinClock {

    singleMinutes(minutes) {
        //minutes simples : 4 lampes jaunes, 1 lampe représente 1 minute
        const lampsOn = minutes % 5;
        return 'Y'.repeat(lampsOn).padEnd(4, '0');
    }
    
}