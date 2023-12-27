import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid, Tab, Input, Button } from "semantic-ui-react";
import TroupCard from "./TroupCard";
import carteTroupes from "../constant/carteTroupes";
import carteStratageme from "../constant/carteStratageme";
import carteArchitecte from "../constant/carteArchitecte";

function Mains(props) {
  const {} = props;

  const [idCardRemove, setIdCardRemove] = useState();
  const [idCardAdd, setIdCardAdd] = useState();

  const [listOfTroupCard, setlistOfTroupCard] = useState([]);

  useEffect(() => {
    // Retirer l'élément avec l'ID spécifié de listOfTroupCard
    const updatedListOfTroupCard = listOfTroupCard.filter(
      (item) => item.id !== idCardRemove
    );

    // Mettre à jour l'état avec la nouvelle liste
    setlistOfTroupCard(updatedListOfTroupCard);
  }, [idCardRemove]);

  const handleAddCard = () => {
    var selectedCard = null;
    if (idCardAdd[0] == "t") {
      selectedCard = carteTroupes.find((card) => card.key === idCardAdd);
    } else if (idCardAdd[0] == "s") {
      selectedCard = carteStratageme.find((card) => card.key === idCardAdd);
    } else if (idCardAdd[0] == "a") {
      selectedCard = carteArchitecte.find((card) => card.key === idCardAdd);
    }
    console.log("cartetroupe", carteTroupes);
    // Vérifier si la carte a été trouvée
    if (selectedCard) {
      // Ajouter la carte à la liste listOfTroupCard
      setlistOfTroupCard((prevList) => [...prevList, selectedCard]);
    } else {
      // La carte avec l'ID spécifié n'a pas été trouvée
      console.log(
        `Carte avec l'ID ${idCardAdd} non trouvée dans carteTroupes.`
      );
    }

    // Réinitialiser l'input après l'ajout
    setIdCardAdd("");
  };

  return (
    <Tab.Pane>
      <Input
        size="massive"
        icon="search"
        placeholder="Ajout carte Troupe"
        onChange={(e, { value }) => setIdCardAdd(value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddCard();
          }
        }}
      />
      <Button
        primary
        onClick={(e, { value }) => {
          handleAddCard();
        }}
      >
        Ajouter
      </Button>

      <Grid>
        <Grid.Row columns={5} only="tablet computer">
          {listOfTroupCard &&
            listOfTroupCard.map((film) => {
              if (film) {
                return (
                  <TroupCard
                    key={film.key}
                    film={film}
                    setIdCardRemove={setIdCardRemove}
                  />
                );
              }
              return true;
            })}
        </Grid.Row>
        <Grid.Row columns={1} only="tablet mobile">
          {listOfTroupCard &&
            listOfTroupCard.map((film) => {
              if (film) {
                return (
                  <TroupCard
                    key={film.key}
                    film={film}
                    setIdCardRemove={setIdCardRemove}
                  />
                );
              }
              return true;
            })}
        </Grid.Row>
      </Grid>
    </Tab.Pane>
  );
}

export default Mains;
