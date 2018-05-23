export abstract class Compte {
    numeroCompte: number;
    solde: number;
    dateOuverture: string;

    constructor(options: {
        numeroCompte?: number;
        solde?: number;
        dateOuverture?: string;
    } = {}) {
        this.numeroCompte = options.numeroCompte || null;
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
        this.carteBancaire = options.carteBancaire || {typeCarte:'AUCUNE'};
    }
}

export class CompteEpargne extends Compte {
    tauxRemun: number = 0.03;

    constructor(options: {
        tauxRemun?: number;
    } = {}) {
        super();
        this.tauxRemun = options.tauxRemun || null;
    }
}

export class CarteBancaire {
    typeCarte: string = 'AUCUNE';
}