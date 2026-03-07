export default class Poll {
    _question;
    _optionsText;
    _votes;
    constructor(question, options) {
        if (options.length <= 1)
            throw new Error('Pelo menos duas opções');
        this._question = question;
        this._optionsText = options;
        this._votes = new Array(options.length).fill(0);
    }
    vote(index) {
        if (index < 0 || index >= this._votes.length)
            throw new Error('Índice inválido');
        this._votes[index]++;
    }
    get options() {
        return this._optionsText;
    }
    get question() {
        return this._question;
    }
    get votes() {
        return this._votes;
    }
}
//# sourceMappingURL=Poll.js.map