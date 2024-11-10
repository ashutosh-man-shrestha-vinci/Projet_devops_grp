export class BerlinClock {

    singleMinutes(minutes) {
        //minutes simples : 4 lampes jaunes, 1 lampe représente 1 minute
        const lampsOn = minutes % 5;
        return 'Y'.repeat(lampsOn).padEnd(4, '0');
    }

    fiveMinutes(minutes) {
        //5 minutes : 11 lampes (jaune, avec une rouge toutes les 3 lampes)
        const lampsOn = Math.floor(minutes / 5); //ex: 23/5 = 4.6 --> reste de 0.6 alors on récup que 4 avec l'arrondis bas
        let lamps = '';
        for (let i = 1; i <= 11; i++) {
            lamps += i <= lampsOn ? (i % 3 === 0 ? 'R' : 'Y') : '0'; // le ? est un if et le : est un else
        }
        return lamps;
    }

    singleHours(hours) {
        // 1 heure : lampe rouge = 1 heure
        const lampsOn = hours % 5;
        return 'R'.repeat(lampsOn).padEnd(4, '0');
    }

    fiveHours(hours) {
        // 5 heure : lampe rouge = 1 heure
        const lampsOn = Math.floor(hours / 5);
        return 'R'.repeat(lampsOn).padEnd(4, '0');
    }

   

}