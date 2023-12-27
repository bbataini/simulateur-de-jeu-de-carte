import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Tab } from "semantic-ui-react";
import Jeux from "./Jeux";
import Mains from "./Mains";

function WigletsFilter(props) {
  const {  } = props;

  const panes = [
    {
      menuItem: "JEUX",
      render: () => <Jeux  />,
    },
    { menuItem: "MAINS", render: () => <Mains  /> },
  ];

  return (
    <div>
      <Tab panes={panes} />
    </div>
  );
}

export default WigletsFilter;
