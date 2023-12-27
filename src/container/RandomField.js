import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
// eslint-disable-next-line
import { Segment, Header, Icon, Accordion, Button } from "semantic-ui-react";
import TroupCard from "../wiglets/TroupCard";

function RandomField(props) {

  const { listOfSearch } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [randomN, setRandomN] = useState(getRandomInt(0, 193));

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <Segment textAlign={"left"}>
      <Accordion>
        <Accordion.Title
          active={isOpen}
          index={0}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Header>
            Choisis un film aléatoire parmis la liste <Icon name="dropdown" />
          </Header>
        </Accordion.Title>
        <Accordion.Content active={isOpen}>
          <Button onClick={()=> setRandomN(getRandomInt(0, listOfSearch.length))}>
            <Icon name="random" />
          </Button>
          <TroupCard film={listOfSearch && listOfSearch[randomN]} />
        </Accordion.Content>
      </Accordion>
    </Segment>
  );
}

export default RandomField;
