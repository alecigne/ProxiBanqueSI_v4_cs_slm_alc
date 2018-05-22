export class Conseiller {
  idConseiller: Number;
  nom: string;
  prenom: string;
  login: string;
  password: string;

  constructor(options: {
    idConseiller: Number;
    nom: string;
    prenom: string;
    login: string;
    password: string;
  }) {
    this.nom = options.nom;
    this.prenom = options.prenom;
    this.login = options.login;
    this.password = options.password;
  }

}