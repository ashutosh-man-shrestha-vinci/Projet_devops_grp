export class BerlinClock {

    singleMinutes(minutes) {
        //minutes simples : 4 lampes jaunes, 1 lampe représente 1 minute
        const lampsOn = minutes % 5;
        return 'Y'.repeat(lampsOn).padEnd(4, '0');
    }

    fiveMinutes(minutes) {
        //5 minutes : 11 lampes (jaune, avec une rouge toutes les 3 lampes)
        const lampsOn = Math.floor(minutes / 5);
        let lamps = '';
        for (let i = 1; i <= 11; i++) {
            lamps += i <= lampsOn ? (i % 3 === 0 ? 'R' : 'Y') : '0';
        }
        return lamps;
    }

}