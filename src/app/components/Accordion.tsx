import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function MyAccordion({ faqData }: any) {
  const [open, setOpen] = useState("0");
  const toggle = (id: any) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        {faqData.map((faq: any, i: number) => (
          <AccordionItem>
            <AccordionHeader targetId={`${i}`}>{faq.question}</AccordionHeader>
            <AccordionBody accordionId={`${i}`}>
              <i>{faq.answer}</i>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default MyAccordion;
