import { Compte } from "./compte";

export interface Client {
  idClient?: Number;
  prenom: string;
  nom: string;
  email: string;
  adresse: string;
  codePostal:string;
  ville:string;
  telephone:string;
  compteCourant:Compte;
  compteEpargne:Compte;
}