import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function MyAccordion({
  faqData,
}: {
  faqData: {
    question: string;
    answer: string;
  }[];
}) {
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
        {faqData.map((faq, i) => (
          <AccordionItem key={i}>
            <AccordionHeader targetId={`${i}`}>
              <i>{faq.question}</i>
            </AccordionHeader>
            <AccordionBody accordionId={`${i}`}>
              <strong>{faq.answer}</strong>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default MyAccordion;
