export default class Poll<T> {
    private _question: string;
    private _optionsText: T[];
    private _votes: number[];

    constructor(question: string, options: T[]) {
        if (options.length <= 1) throw new Error('Pelo menos duas opções');
        this._question = question;
        this._optionsText = options;
        this._votes = new Array(options.length).fill(0);
    }

    vote(index: number): void {
        if (index < 0 || index >= this._votes.length) throw new Error('Índice inválido');
        this._votes[index]++;
    }

    get options(): readonly T[] {
        return this._optionsText;
    }

    get question(): string {
        return this._question;
    }

    get votes(): readonly number[] {
        return this._votes;
    }
}