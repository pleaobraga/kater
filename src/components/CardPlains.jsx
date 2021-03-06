import React from "react";
import CardBase from "./CardBase";
import PlainsList from "./PlainsList";
import RegisterPlainForm from "./RegisterPlainForm";

const CardPlains = ({ card, selectPlain, form, plain }) => {
  return (
    <CardBase card={card}>
      <PlainsList card={card} selectPlain={selectPlain} />
      {card.contentcomplete && (
        <div
          className="contentcomplete"
          dangerouslySetInnerHTML={{ __html: card.contentcomplete }}
        />
      )}
      {plain.type !== undefined && (
        <RegisterPlainForm form={form} plain={plain} />
      )}
    </CardBase>
  );
};

export default CardPlains;
