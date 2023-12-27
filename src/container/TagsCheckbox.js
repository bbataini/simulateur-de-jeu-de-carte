import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Checkbox, Card, Grid, Image } from "semantic-ui-react";

function TagsCheckbox(props) {
  const {
    listOfTagsSelected,
    setListOfTagsSelected,
    listOfAntiTagsSelected,
    setListOfAntiTagsSelected,
    lol,
    arrayTags,
  } = props;

  const [avecCheck, setAvecCheck] = useState(false);
  const [sansCheck, setSansCheck] = useState(false);

  function addTag(label) {
    setListOfTagsSelected(listOfTagsSelected.concat(label));
  }

  function removeTag(label) {
    setListOfTagsSelected(listOfTagsSelected.filter((el) => el !== label));
  }

  function addAntiTag(label) {
    setListOfAntiTagsSelected(listOfAntiTagsSelected.concat(label));
  }

  function removeAntiTag(label) {
    setListOfAntiTagsSelected(
      listOfAntiTagsSelected.filter((el) => el !== label)
    );
  }

  return (
    <Grid.Column key={lol}>
      <Card>
        <Card.Content>
          <Card.Header>{arrayTags[lol] && arrayTags[lol].label}</Card.Header>
          <Card.Content>
            {arrayTags[lol] && (
              <Checkbox
                label="AVEC"
                checked={avecCheck}
                onChange={(e, props) => {
                  if (props.checked) {
                    addTag(arrayTags[lol].label);
                    removeAntiTag(arrayTags[lol].label);
                    setSansCheck(false);
                    setAvecCheck(true);
                  } else {
                    setAvecCheck(false);
                    removeTag(arrayTags[lol].label);
                  }
                }}
              />
            )}
            {arrayTags[lol] && (
              <Checkbox
                label="SANS"
                checked={sansCheck}
                onChange={(e, props) => {
                  if (props.checked) {
                    addAntiTag(arrayTags[lol].label);
                    setAvecCheck(false);
                    removeTag(arrayTags[lol].label);
                    setSansCheck(true);
                  } else {
                    setSansCheck(false);
                    removeAntiTag(arrayTags[lol].label);
                  }
                }}
              />
            )}
          </Card.Content>
          <Image
            wrapped
            size={"tiny"}
            src={arrayTags[lol] && arrayTags[lol].icon}
          ></Image>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default TagsCheckbox;
