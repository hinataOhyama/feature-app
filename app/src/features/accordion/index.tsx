import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"
import data from "./data";

const accordion = () => {
    return (
      <Accordion type="multiple" className="max-w-96 m-auto bg-orange-700">
        {data.map((item) => (
          <AccordionItem key={item.id} value={`item-${item.id}`} className="p-4">
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
};

export default accordion;
