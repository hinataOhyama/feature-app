import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import data from "./data";

const accordion = () => {
  return (
    <>
      <h1 className="text-3xl text-center font-bold my-8">Accordion</h1>
      <Accordion type="multiple" className="max-w-96 m-auto bg-orange-400">
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            value={`item-${item.id}`}
            className="p-4"
          >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default accordion;
