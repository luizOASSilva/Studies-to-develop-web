import { Persistency } from "./Persistency";

describe('Persistency', () => {
    it('Should return undefined', () => {
        // System Under Test
        const sut = new Persistency();
        expect(sut.saveOrder()).toBeUndefined();
    });
})