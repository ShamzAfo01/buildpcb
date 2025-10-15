
import React, { useState } from "react";
import "./Faq.css";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <p>{question}</p>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: "What exactly does buildpcb do?",
      answer: "buildpcb is an AI-powered PCB design tool that takes your project from prompt to production in minutes.",
    },
    {
      question: "What kind of projects can I build with buildpcb?",
      answer: "You can build a wide variety of projects, from simple hobbyist boards to complex multi-layer designs.",
    },
    {
      question: "Do I need to install anything?",
      answer: "No, buildpcb is a web-based tool, so you can access it from any browser.",
    },
    {
      question: "Can I edit the design after it's generated?",
      answer: "Yes, you can export the design files and edit them in your favorite EDA software.",
    },
    {
      question: "Is it really faster than hiring an engineer or doing it myself?",
      answer: "Yes, our AI can generate designs in a fraction of the time it would take a human engineer.",
    },
  ];

  return (
    <div className="faq-container">
      <h2>To some of your likely Questions, we got answers</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
