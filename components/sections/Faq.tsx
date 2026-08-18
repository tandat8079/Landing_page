"use client";

import { useState } from "react";
import { faqs } from "@/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq section" id="faq">
      <div className="faq__head reveal">
        <SectionLabel>Thông tin lưu trú</SectionLabel>
        <h2>
          Trước khi
          <br />
          <em>lên đường.</em>
        </h2>
      </div>
      <div className="faq__list">
        {faqs.map(([question, answer], index) => (
          <article key={question} className="reveal">
            <button
              aria-expanded={open === index}
              onClick={() => setOpen(open === index ? -1 : index)}
            >
              <span>0{index + 1}</span>
              {question}
              <i>{open === index ? "−" : "+"}</i>
            </button>
            <div
              className={
                open === index ? "faq__answer faq__answer--open" : "faq__answer"
              }
            >
              <p>{answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
