"use client";

import { useState } from "react";

export default function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full divide-y border-t border-b border-subtle mt-16 mb-24">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-6">
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between text-left focus:outline-none"
            >
              <h3 className="text-xl font-bold text-(--color-on-surface) pr-8">{item.question}</h3>
              <span className="flex-shrink-0 text-(--color-primary)">
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </span>
            </button>
            {isOpen && (
              <div className="mt-4 text-(--color-on-surface-variant) leading-relaxed">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
