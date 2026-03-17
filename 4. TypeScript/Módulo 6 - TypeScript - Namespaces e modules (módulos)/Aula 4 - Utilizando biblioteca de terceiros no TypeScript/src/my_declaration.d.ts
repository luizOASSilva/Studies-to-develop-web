// criando uma tipagem dentro da biblioteca lodash para uso

// arquivos d.ts são unicamente para tipagens com interfaces e types

declare namespace _ { // typescript fazdeclaration erge automaticamente
    interface LoDashStatic {
        mul(array: number[]): number;
    }
}
