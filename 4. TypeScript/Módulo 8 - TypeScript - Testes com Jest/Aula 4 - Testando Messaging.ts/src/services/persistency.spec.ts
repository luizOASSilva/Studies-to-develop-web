import { PersistencyInterface } from "../interfaces/PersistencyInterface";
import { Persistency } from "./Persistency";

describe('Persistency', () => {

    let sut: PersistencyInterface;

    beforeEach(() => {
        sut = new Persistency();
    });

    afterEach(() => {
        jest.restoreAllMocks()
}   );

    it('Should return undefined', () => {
        expect(sut.saveOrder()).toBeUndefined();
    });

    it('Should call console.log once', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(()=> {});
        sut.saveOrder();
        expect(consoleSpy).toHaveBeenCalledTimes(1); 
    });

    it('Should call console.log with "Pedido salvo com sucesso..."', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(()=> {});
        sut.saveOrder();
        expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
    });
});