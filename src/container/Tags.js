import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";

import TagsCheckbox from "./TagsCheckbox";

import actorObj from "../constant/actorObj";
import genreList from "../constant/genreList";
import CountryList from "../constant/CountryList";
import musicList from "../constant/MusicList";

function Tags(props) {
  const {
    listOfTagsSelected,
    setListOfTagsSelected,
    listOfAntiTagsSelected,
    setListOfAntiTagsSelected,
    type,
  } = props;

  var arrayTags = "";

  if (type === "ACTOR") arrayTags = actorObj;
  else if (type === "COUNTRY") arrayTags = CountryList;
  else if (type === "MUSIC") arrayTags = musicList;
  else if (type === "GENRE") arrayTags = genreList;

  const columns3 = Object.keys(arrayTags).map((lol, i) => {
    return (
      <TagsCheckbox key={i}
        listOfTagsSelected={listOfTagsSelected}
        listOfAntiTagsSelected={listOfAntiTagsSelected}
        setListOfAntiTagsSelected={setListOfAntiTagsSelected}
        setListOfTagsSelected={setListOfTagsSelected}
        lol={lol}
        arrayTags={arrayTags}
      />
    );
  });

  return (
    <Grid>
      <Grid.Row stretched columns={7} only="tablet computer">
        {columns3}
      </Grid.Row>
      <Grid.Row stretched columns={1} only="tablet mobile">
        {columns3}
      </Grid.Row>
    </Grid>
  );
}

export default Tags;
