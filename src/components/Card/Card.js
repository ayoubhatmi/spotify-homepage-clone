import React from "react";
import { MdDone } from "react-icons/md";
import { Button } from "../Button";
import { CardDiv } from "./CardElements";

const Card = ({ title, subtitle, list, text, buttonText }) => {
  return (
    <CardDiv>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{text}</p>
        <hr />
        <ul>
          <li>
            <MdDone />
            {list[0]}
          </li>
          <li>
            <MdDone />
            {list[1]}
          </li>
          <li>
            <MdDone />
            {list[2]}
          </li>
          <li>
            <MdDone />
            {list[3]}
          </li>
        </ul>
      </div>
      <Button primary={false} fontcolor={false}>
        {buttonText}
      </Button>
    </CardDiv>
  );
};

export default Card;
