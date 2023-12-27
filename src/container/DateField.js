import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";

import { Segment } from "semantic-ui-react";

//import Tags from "./Tags";

function DateField(props) {
  const { setDateA, setDateB } = props;

  //const [isOpen, setIsOpen] = useState(false);
  const [date1, setDate1] = useState(1900);
  const [date2, setDate2] = useState(2022);

  useEffect(() => {
    setDateA(date1);
    setDateB(date2);
  }, [date1, date2, setDateA, setDateB]);

  return (
    <Segment textAlign={"left"}>
      {/* <Dropdown
        placeholder="Select Friend"
        fluid
        selection
        options={friendOptions}
      /> */}
      <div>
        Sélection de film entre {date1} et {date2}
      </div>
      <input
        type="range"
        min={1900}
        max={2030}
        step={10}
        value={date1}
        onChange={(e) => {
          setDate1(e.target.value);
        }}
      />
      <input
        type="range"
        min={1900}
        max={2030}
        step={10}
        value={date2}
        onChange={(e) => {
          setDate2(e.target.value);
        }}
      />
    </Segment>
  );
}

export default DateField;
