// Singleton - GoF
export class Database {

    private static database: Database;

    private constructor(
        private host: string, 
        private user: string, 
        private password: string
    ) {}

    connect(): void {
        console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
    }

    static getDatabase(host: string, user: string, password: string): Database {
        if (Database.database) return Database.database;
        Database.database = new Database(host, user, password);
        return Database.database;

    }
}

const db1 = Database.getDatabase('teste', 'admin', '12345'); // cria uma instância se não houver
db1.connect();

const db2 = Database.getDatabase('teste', 'admin', '12345'); // não cria outra instância, repete a utilização da instância já criada
db2.connect();