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

});