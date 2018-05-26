export abstract class Compte {
    numCompte: number;
    solde: number;
    dateOuverture: string;

    constructor(options: {
        numCompte?: number;
        solde?: number;
        dateOuverture?: string;
    } = {}) {
        this.numCompte = options.numCompte || null;
        this.solde = options.solde || null;
        this.dateOuverture = options.dateOuverture || '';
    }
}

export class CompteCourant extends Compte {
    decouvertAutorise: number = 1000;
    carteBancaire: CarteBancaire;

    constructor(options: {
        decouvertAutorise?: number;
        carteBancaire?: CarteBancaire;
    } = {}) {
        super();
        this.decouvertAutorise = options.decouvertAutorise || null;
        this.carteBancaire = options.carteBancaire || null;
    }
}

export class CompteEpargne extends Compte {
    tauxRemun: number = 3;

    constructor(options: {
        tauxRemun?: number;
    } = {}) {
        super();
        this.tauxRemun = options.tauxRemun || null;
    }
}

export class CarteBancaire {
    typeCarte: string;
}