import React from "react";
import PropTypes from "prop-types";
import { Accordion } from "react-bootstrap-accordion";

AccordionItem.propTypes = {
  item: PropTypes.object,
};

function AccordionItem(props) {
  const { item } = props;

  return (
    <Accordion key={item.id} title={item.title}>
      {/* // <Accordion key={item.id} title={item.title} show={item.show}> */}
      <p className="toggle-content text-justify">{item.content}</p>
    </Accordion>
  );
}

export default AccordionItem;
