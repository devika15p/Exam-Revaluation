import React from "react";
import { Accordion, Container } from "react-bootstrap";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the purpose of this exam revaluation system?",
      answer:
        "This system allows students to apply for revaluation of their exam answer scripts if they are not satisfied with their initial scores. It provides a transparent and streamlined process for submitting revaluation requests and tracking their status.",
    },
    {
      question: "Who is eligible to apply for revaluation?",
      answer:
        "Generally, any student who has appeared for an exam conducted by the institution and is not content with their awarded marks can apply for revaluation. Specific eligibility criteria, like minimum mark differences or certain exam types, might apply and are detailed in the university/department guidelines.",
    },
    {
      question: "How do I apply for revaluation?",
      answer:
        "You can apply for revaluation through this online portal. Log in with your credentials, navigate to the revaluation section, select the exam and subject you wish to re-evaluate, and follow the instructions provided.",
    },
    {
      question: "What is the fee for revaluation?",
      answer: "The revaluation fee varies depending on the subject and the institution.",
    },
    {
      question: "How long does the revaluation process take?",
      answer:
        "The revaluation process typically takes a few weeks. You will receive notifications about the status of your application via email and/or through this portal.",
    },
    {
      question: "How will I know the outcome of my revaluation?",
      answer:
        "Once the revaluation is complete, the revised marks (if any) will be updated in your academic record. You will also be notified about the outcome through the portal and/or email.",
    },
    {
      question: "What if I am still not satisfied with the revaluation result?",
      answer:
        "In some cases, there might be a provision for further review or appeal after the initial revaluation. Check the university/department guidelines for information regarding the appeal process.",
    },
    {
      question: "Whom should I contact if I have any questions or encounter issues?",
      answer:
        "If you have any questions or face any technical issues while using the system, please contact the support team at [Email Address] or [Phone Number].",
    },
  ];

  return (
    <div className="bg-black text-white py-5 min-vh-100">
      <Container>
        <h2 className="text-center fw-bold mb-4">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0" className="bg-dark">
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index} className="bg-dark text-white">
              <Accordion.Header className="bg-dark text-white">{faq.question}</Accordion.Header>
              <Accordion.Body className="text-light bg-dark">{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQ;
