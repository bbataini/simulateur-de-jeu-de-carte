import tagsList from "./tagsList";

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

    attaque: 1,
    magique: 0,
    tire: 0,
    perceArmure: 0,
    briseArmure: 0,

    armure: 0,
    armureMagique: 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 3,
    redéploiment: 0,

    tag: [t.murDeLance, t.infiltration],
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
    armureMagique: 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 3,
    redéploiment: 0,

    tag: [],
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
    armureMagique: 0,
    bouclier: 2,
    esquive: 0,

    charge: 2,
    charge2: 0,
    inébranlable: 0,
    déplacement: 2,
    redéploiment: 1,

    tag: [],
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
    armureMagique: 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [],
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
    armureMagique: 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [],
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
    armureMagique: 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [],
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
    armureMagique: 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [],
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
    armureMagique: 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [],
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
    armureMagique: 0,
    bouclier: 0,
    esquive: 0,

    charge: 0,
    charge2: 0,
    inébranlable: 0,
    déplacement: 0,
    redéploiment: 0,

    tag: [],
  },
];
export default carteTroupes;
