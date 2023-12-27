import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Header, Icon, Accordion } from "semantic-ui-react";

import Tags from "./Tags";

function ActorField(props) {
  const {
    listOfTagsSelected,
    setListOfTagsSelected,
    listOfAntiTagsSelected,
    setListOfAntiTagsSelected,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Segment textAlign={"left"}>
      <Accordion>
        <Accordion.Title
          active={isOpen}
          index={0}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Header>
            Filtre des acteurs <Icon name="dropdown" />
          </Header>
        </Accordion.Title>
        <Accordion.Content active={isOpen}>
          <Tags
            listOfTagsSelected={listOfTagsSelected}
            setListOfTagsSelected={setListOfTagsSelected}
            listOfAntiTagsSelected={listOfAntiTagsSelected}
            setListOfAntiTagsSelected={setListOfAntiTagsSelected}
            type={"ACTOR"}
          />
        </Accordion.Content>
      </Accordion>
    </Segment>
  );
}

export default ActorField;