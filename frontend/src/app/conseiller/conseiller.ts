export class Conseiller {
  idConseiller: number;
  nom: string;
  prenom: string;
  login: string;
  password: string;

  constructor(options: {
    id?: number;
    nom?: string;
    prenom?: string;
    login?: string;
    password?: string;
  }={}) {
    this.idConseiller = options.id || null;
    this.nom = options.nom || '';
    this.prenom = options.prenom|| '';
    this.login = options.login|| '';
    this.password = options.password|| '';
  }

}