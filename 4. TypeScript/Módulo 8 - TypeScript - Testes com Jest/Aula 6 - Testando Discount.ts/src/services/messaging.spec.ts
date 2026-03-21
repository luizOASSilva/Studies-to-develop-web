import { Messaging } from "./Messaging";

describe('Messaging', () => {

    let sut: Messaging;
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        sut = new Messaging();
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('Should return undefined', () => {
        expect(sut.sendMessage('teste')).toBeUndefined();
    });

    it('Should call console.log once', () => {
        sut.sendMessage('teste');
        expect(consoleSpy).toHaveBeenCalledTimes(1); 
    });

    it('Should call console.log with "mensagem enviada:" and msg', () => {
        sut.sendMessage('teste');
        expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
    });
});