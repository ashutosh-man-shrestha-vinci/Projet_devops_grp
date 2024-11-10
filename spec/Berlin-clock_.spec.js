import { BerlinClock } from '../src/BerlinClock.js';

describe("Berlin Clock Tests", function() {
    let clock = new BerlinClock();

    it("should display the correct single-minute", function() {
        expect(clock.singleMinutes(0)).toBe('0000');
        expect(clock.singleMinutes(1)).toBe('Y000');
        expect(clock.singleMinutes(4)).toBe('YYYY');
        expect(clock.singleMinutes(5)).toBe('0000');
    });

    it("should display the correct five-minute", function() {
        expect(clock.fiveMinutes(0)).toBe('00000000000');
        expect(clock.fiveMinutes(5)).toBe('Y0000000000');
        expect(clock.fiveMinutes(15)).toBe('YYR00000000');
        expect(clock.fiveMinutes(59)).toBe('YYRYYRYYRYY');
    });

    it("should display the correct single-hour", function() {
        expect(clock.singleHours(0)).toBe('0000');
        expect(clock.singleHours(2)).toBe('RR00');
        expect(clock.singleHours(4)).toBe('RRRR');
        expect(clock.singleHours(23)).toBe('RRR0');
    });

    it("should display the correct five-hour row", function() {
        expect(clock.fiveHours(0)).toBe('0000');
        expect(clock.fiveHours(5)).toBe('R000');
        expect(clock.fiveHours(13)).toBe('RR00');
        expect(clock.fiveHours(23)).toBe('RRRR');
    });

    it("should return 'Y' for even seconds", function() {
        expect(clock.secondsLamp(0)).toBe('R');
        expect(clock.secondsLamp(2)).toBe('R');
        expect(clock.secondsLamp(1)).toBe('0');
    });

    
});