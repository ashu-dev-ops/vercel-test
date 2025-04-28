import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import Link from "next/link";

export function Faq({
  faqTitle,
  subtitle,
  faqData = [],
  className = "",
  h1 = false,
  showMore = false,
}: {
  faqTitle: string;
  subtitle?: string;
  faqData: {
    question: string;
    answer: string | React.ReactNode;
  }[];
  className?: string;
  h1?: boolean;
  showMore?: boolean;
}) {
  return (
    <section
      className={`container w-full max-w-4xl mx-auto py-12 px-4 ${className}`}
    >
      <div className="text-center mb-20">
        {h1 ? (
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{faqTitle}</h1>
        ) : (
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{faqTitle}</h2>
        )}
        {subtitle && (
          <h3 className="text-gray-600 text-lg: md:text-xl max-w-2xl mx-auto">{subtitle}</h3>
        )}
      </div>

      <div className="space-y-4">
        <Accordion type="single" defaultValue={`item-0`} collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem
              
              key={index}
              value={`item-${index}`}
              className="border last:border-b-1 rounded-lg mb-4 overflow-hidden transition-shadow duration-200 "
            >
              <AccordionTrigger className="text-left  font-bold text-lg px-6 py-5 hover:bg-gray-50 transition-colors duration-200 data-[state=open]:bg-gray-100">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white text-base">
                {typeof faq.answer === "string" ? (
                  <p className="text-gray-700">{faq.answer}</p>
                ) : (
                  faq.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {showMore && (
          <div className="text-center mt-20">
            <Button asChild className="px-12 py-6 text-lg font-bold">
              <Link href="/faq">Show More</Link>
            </Button>
          </div>
        )}
      </div>
      
    </section>
  );
}