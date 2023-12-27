import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";

import { Segment } from "semantic-ui-react";

//import Tags from "./Tags";

function TimeField(props) {
  const { setDurreeA, setDurreeB } = props;

  //const [isOpen, setIsOpen] = useState(false);
  const [time1, setTime1] = useState(0);
  const [time2, setTime2] = useState(300);

  useEffect(() => {
    setDurreeA(time1);
    setDurreeB(time2);
  }, [time1, time2, setDurreeA, setDurreeB]);

  return (
    <Segment textAlign={"left"}>
      {/* <Dropdown
        placeholder="Select Friend"
        fluid
        selection
        options={friendOptions}
      /> */}
      <div>
        La durrée du film est comprise entre {time1} et {time2} min
      </div>
      <input
        type="range"
        min={0}
        max={4 * 60}
        step={10}
        value={time1}
        onChange={(e) => {
          setTime1(e.target.value);
        }}
      />
      <input
        type="range"
        min={0}
        max={5 * 60}
        step={10}
        value={time2}
        onChange={(e) => {
          setTime2(e.target.value);
        }}
      />
    </Segment>
  );
}

export default TimeField;
