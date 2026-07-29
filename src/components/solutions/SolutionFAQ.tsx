import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { containerVariants, itemVariants } from "@/lib/animations";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
  title: string;
}

const SolutionFAQ = ({ faqs, title }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-20 lg:py-24" ref={ref}>
      <div className="container mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="font-display text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-3 block">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-[#051139] tracking-tight">
              {title} <span className="text-primary">Answered</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-4 lg:gap-6 items-start">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl px-6 py-1 border border-slate-200 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300">
                  <AccordionTrigger className="text-left font-display font-bold text-[14px] sm:text-[15px] hover:no-underline text-[#051139] py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 font-medium leading-relaxed text-[13.5px] sm:text-[14px] pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionFAQ;
