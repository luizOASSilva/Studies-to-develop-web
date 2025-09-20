// intersection type -> &

type HasName = { name: string };
type HasSecondName = { secondName: string };
type HasYearsOld = { yearsOld: number };

type Person = HasName & HasSecondName & HasYearsOld // todos os tipos se tornam obrigatórios, é criado uma junção, diferente de union types, onde um tipo pode ser omitido

const person1: Person = { // agora o objeto person1 deve conter especificamente todos os tipos satisfeitos
    name: 'Luiz',
    secondName: 'Silva',
    yearsOld: 21
}

type AB = 'A' | 'B';
type AC = 'A' | 'C';

type intersection = AB & AC; // uando tipos se repetem o tipo recebe a interseção entre ambos, nesse caso "A", presente nos dois...
