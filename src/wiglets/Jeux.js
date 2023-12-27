import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid, Tab } from "semantic-ui-react";
import TroupCard from "./TroupCard";
import carteTroupes from "../constant/carteTroupes";
import carteStratageme from "../constant/carteStratageme";
import carteArchitecte from "../constant/carteArchitecte";

function Jeux(props) {
  const {} = props;

  const [idCardRemove, setIdCardRemove] = useState();

  const [listOfStratagemeCard, setlistOfStratagemeCard] =
    useState(carteStratageme);
  const [listOfArchitecteCard, setlistOfArchitecteCard] = useState(carteArchitecte);
  const [listOfDeckCard, setlistOfDeckCard] = useState(carteTroupes);

  const getRandomElements = (array, count) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  };

  const [listOfTroupCard, setlistOfTroupCard] = useState(
    getRandomElements(carteTroupes, 4)
  );

  const [listOfDefausseCard, setListOfDefausseCard] = useState(listOfTroupCard);

  const getRandomElementsExcluding = (list, excludedList, count) => {
    const availableElements = list.filter(
      (item) => !excludedList.includes(item)
    );

    const randomElements = [];
    while (randomElements.length < count && availableElements.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableElements.length);
      const randomElement = availableElements.splice(randomIndex, 1)[0];
      randomElements.push(randomElement);
    }

    return randomElements;
  };

  useEffect(() => {
    // Retirer l'élément avec l'ID spécifié de listOfTroupCard
    const updatedListOfTroupCard = listOfTroupCard.filter(
      (item) => item.id !== idCardRemove
    );

    // Ajouter un nouvel élément à la fin de la liste
    const newRandomElement = getRandomElementsExcluding(
      listOfDeckCard,
      updatedListOfTroupCard,
      1
    )[0];
    updatedListOfTroupCard.push(newRandomElement);

    // Mettre à jour l'état avec la nouvelle liste
    setlistOfTroupCard(updatedListOfTroupCard);

    // Mettre à jour la liste des éléments défaussés
    setListOfDefausseCard([...listOfDefausseCard, idCardRemove]);
  }, [idCardRemove]);

  return (
    <Tab.Pane>
      <Grid>
        <Grid.Row color={"red"} columns={5} only="tablet computer">
          {listOfTroupCard &&
            listOfTroupCard.map((film) => {
              if (film) {
                return (
                  <TroupCard
                    key={film.id}
                    film={film}
                    setIdCardRemove={setIdCardRemove}
                  />
                );
              }
              return true;
            })}
        </Grid.Row>
        <Grid.Row color={"green"} columns={5} only="tablet computer">
          {listOfStratagemeCard &&
            listOfStratagemeCard.map((film) => {
              if (film) {
                return (
                  <TroupCard
                    key={film.id}
                    film={film}
                    setIdCardRemove={setIdCardRemove}
                  />
                );
              }
              return true;
            })}
        </Grid.Row>
        <Grid.Row color={"blue"} columns={5} only="tablet computer">
          {listOfStratagemeCard &&
            listOfStratagemeCard.map((film) => {
              if (film) {
                return (
                  <TroupCard
                    key={film.id}
                    film={film}
                    setIdCardRemove={setIdCardRemove}
                  />
                );
              }
              return true;
            })}
        </Grid.Row>
        <Grid.Row color={"red"} columns={1} only="tablet mobile">
          {listOfTroupCard &&
            listOfTroupCard.map((film) => {
              if (film) {
                return <TroupCard key={film.id} film={film} />;
              }
              return true;
            })}
        </Grid.Row>
        <Grid.Row  color={"green"} columns={1} only="tablet mobile">
          {listOfStratagemeCard &&
            listOfStratagemeCard.map((film) => {
              if (film) {
                return <TroupCard key={film.id} film={film} />;
              }
              return true;
            })}
        </Grid.Row>
        <Grid.Row  color={"blue"} columns={1} only="tablet mobile">
          {listOfArchitecteCard &&
            listOfArchitecteCard.map((film) => {
              if (film) {
                return <TroupCard key={film.id} film={film} />;
              }
              return true;
            })}
        </Grid.Row>
      </Grid>
    </Tab.Pane>
  );
}

export default Jeux;
