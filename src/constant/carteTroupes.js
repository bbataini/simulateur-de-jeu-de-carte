import tagsList from "./tagsList";

import Affreux_sales_et_mechants from "../Images/ImagesFilm/Affreux_sales_et_mechants.jpeg";
import alice from "../Images/ImagesFilm/Alice.jpeg";
import casablanca from "../Images/ImagesFilm/casablanca.jpeg";
import clerks from "../Images/ImagesFilm/clerks.jpeg";
import climax from "../Images/ImagesFilm/climax.jpeg";
import goupsmainsrouge from "../Images/ImagesFilm/goupsmainsrouge.jpeg";
import Hitokiri_le_chatiment from "../Images/ImagesFilm/Hitokiri_le_chatiment.jpeg";
import Le_Roman_d_un_tricheur from "../Images/ImagesFilm/Le_Roman_d_un_tricheur.jpeg";
import nobody_knows from "../Images/ImagesFilm/nobody_knows.jpeg";
import samouraishorslaloi from "../Images/ImagesFilm/3samouraishorslaloi.jpeg";
import scopone from "../Images/ImagesFilm/scopone2.jpg";
import tel_pere_tel_fils from "../Images/ImagesFilm/tel_pere_tel_fils.jpeg";
import troisenterrements from "../Images/ImagesFilm/troisenterrements.jpeg";
import undergrouns from "../Images/ImagesFilm/undergrouns.jpeg";
import Pirates from "../Images/ImagesFilm/Pirates.png";

// import florette from ""
// import florette from "../Images/ImagesFilm"
// import florette from "../Images/ImagesFilm"
// import florette from "../Images/ImagesFilm"
// import florette from "../Images/ImagesFilm"

// import florette from "../Images/ImagesFilm

const t = tagsList;

// icon is optional

const carteTroupes = [
  {
    id: 0,
    key: "t0",
    titre: "Lancier 1",
    description: "Infantrie légére anti-charge",
    coutOr: 1,
    coutBois: 1,
    coutFer: 0,
    coutAcier: 0,
    coutNourriture: 1,

    vie: 3,

    attaque: 0,
    magique: 0,
    tire: 0,
    perceArmure: 0,
    briseArmure: 0,

    armure: 0,
    armureMagique : 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [t.francais, t.comedie, t.triste],
  },
  {
    id: 1,
    key: "t1",

    titre: "Arbalétrier",
    description: "Infantrie légére de tir",

    coutOr: 0,
    coutBois: 2,
    coutFer: 0,
    coutAcier: 0,
    coutNourriture: 1,

    vie: 0,

    attaque: 0,
    magique: 0,
    tire: 0,
    perceArmure: 0,
    briseArmure: 0,

    armure: 0,
    armureMagique : 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [t.francais, t.comedie, t.triste],
  },
  {
    id: 3,
    key: "t3",
    titre: "Cavalerie Lourde 1",
    description: "Cavalerie lourde bouclier",
    coutOr: 3,
    coutBois: 0,
    coutFer: 1,
    coutAcier: 2,
    coutNourriture: 2,

    vie: 4,

    attaque: 2,
    magique: 0,
    tire: 0,
    perceArmure: 0,
    briseArmure: 0,

    armure: 2,
    armureMagique : 0,
    bouclier: 2,
    esquive: 0,

    charge: 2,
    charge2: 0,
    inébranlable: 0,
    déplacement: 2,
    redéploiment: 1,

    tag: [t.francais, t.comedie, t.triste],
  },
  {
    id: 4,
    key: "t4",
    titre: "Troupe 4",
    description: "Infantrie légére",
    coutOr: 0,
    coutBois: 0,
    coutFer: 0,
    coutAcier: 0,
    coutNourriture: 0,

    vie: 0,

    attaque: 0,
    magique: 0,
    tire: 0,
    perceArmure: 0,
    briseArmure: 0,

    armure: 0,
    armureMagique : 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [t.francais, t.comedie, t.triste],
  },
  {
    id: 5,
    key: "t5",
    titre: "Troupe 5",
    description: "Infantrie légére",
    coutOr: 0,
    coutBois: 0,
    coutFer: 0,
    coutAcier: 0,
    coutNourriture: 0,

    vie: 0,

    attaque: 0,
    magique: 0,
    tire: 0,
    perceArmure: 0,
    briseArmure: 0,

    armure: 0,
    armureMagique : 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [t.francais, t.comedie, t.triste],
  },
  {
    id: 6,

    key: "t6",
    titre: "Troupe 6",
    description: "Infantrie légére",
    coutOr: 0,
    coutBois: 0,
    coutFer: 0,
    coutAcier: 0,
    coutNourriture: 0,

    vie: 0,

    attaque: 0,
    magique: 0,
    tire: 0,
    perceArmure: 0,
    briseArmure: 0,

    armure: 0,
    armureMagique : 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [t.francais, t.comedie, t.triste],
  },
  {
    id: 7,
    titre: "Troupe 7",
    key: "t7",
    description: "Infantrie légére",
    coutOr: 0,
    coutBois: 0,
    coutFer: 0,
    coutAcier: 0,
    coutNourriture: 0,

    vie: 0,

    attaque: 0,
    magique: 0,
    tire: 0,
    perceArmure: 0,
    briseArmure: 0,

    armure: 0,
    armureMagique : 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [t.francais, t.comedie, t.triste],
  },
  {
    id: 8,
    key: "t8",
    titre: "Troupe 8",
    description: "Infantrie légére",
    coutOr: 0,
    coutBois: 0,
    coutFer: 0,
    coutAcier: 0,
    coutNourriture: 0,

    vie: 0,

    attaque: 0,
    magique: 0,
    tire: 0,
    perceArmure: 0,
    briseArmure: 0,

    armure: 0,
    armureMagique : 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [t.francais, t.comedie, t.triste],
  },
  {
    id: 9,
    key: "t9",
    titre: "Troupe 9",
    description: "Infantrie légére",
    coutOr: 0,
    coutBois: 0,
    coutFer: 0,
    coutAcier: 0,
    coutNourriture: 0,

    vie: 0,

    attaque: 0,
    magique: 0,
    tire: 0,
    perceArmure: 0,
    briseArmure: 0,

    armure: 0,
    armureMagique : 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [t.francais, t.comedie, t.triste],
  },
];
export default carteTroupes;
