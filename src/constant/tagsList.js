// Country
import archer from "../Images/ImagesFilm/archer.png";
import armure from "../Images/ImagesFilm/armure.png";
import assassinat from "../Images/ImagesFilm/assassinat.png";
import boucliers from "../Images/ImagesFilm/boucliers.png";
import brisearmure from "../Images/ImagesFilm/brise armure.png";
import inébranlable from "../Images/ImagesFilm/inébranlable.png";
import invisible from "../Images/ImagesFilm/invisible.png";
import defenseur from "../Images/ImagesFilm/provocation.png";
import accrochage from "../Images/ImagesFilm/provocation.png";
import curieux from "../Images/ImagesFilm/Curieux.png";

// icon is optional
// if label is country put it in first
// then actor

const tagsList = {
  infiltration: { label: "Infiltrateur", icon: invisible, description: "Ignore les troupes et les remparts ennemis pour se déplacer" },
  accrochage: { label: "Accrocheur", icon: accrochage, description: "Empêche les troupes adverses de se redéployer." },
  défenseur: { label: "Défenseur", icon: defenseur, description: "Subit les dégats en premier" },
  roder: { label: "Rôdeur", icon: archer, description: "Subit les dégats en dernier" },
  traqueur: { label: "Traqueur", icon: curieux , description: "Ignore les capacités adverses camouflé et Rôdeur"},
  //glissant: { label: "Glisseur", icon: italyflag },
  //agile: { label: "Agile", icon: italyflag },
  murDeBouclier: { label: "Mur de Bouclier", icon: boucliers },
  murDeLance: { label: "Mur de Lance", icon: inébranlable },
};

export default tagsList;
