import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid, Segment, Header, Input, Button } from "semantic-ui-react";
import WigletsFilter from "../wiglets/WigletsFilter";
import "../App.css";

import RandomField from "./RandomField";

function Container() {

  const [listOfTagsSelected, setListOfTagsSelected] = useState([]);
  const [listOfAntiTagsSelected, setListOfAntiTagsSelected] = useState([]);

  const containsAll = (needles, haystack) =>
    needles.every(Set.prototype.has, new Set(haystack));

  // useEffect(() => {

  
  //   // eslint-disable-next-line
  // }, [
  //   listOfTagsSelected,
  //   cardNumberTroup,
  //   listOfAntiTagsSelected,
  // ]);



  return (
    <Segment>
      {/* <Header as="h1">Plateau</Header> */}

      <Header as="h1">Choisis des filtres :</Header>
     
      {/* <RandomField listOfTroupCard={listOfTroupCard} /> */}

      <Grid>
        <Grid.Row stretched>
          <Grid.Column>
            <WigletsFilter  />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default Container;
