"use client";
import { Accordion } from "../ui/Accordion";
import { Span } from "../ui/Span";
import { Tag } from "../ui/Tag";
import { motion } from "motion/react";
const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payments methods depending on your location.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of teams members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply whit the best industry practices to ensure that your data is stored securely and accessed only authorized users.",
  },
];
export function Faqs() {
  return (
    <section className="py-24 flex justify-center" id="FAQs">
      <div className="container">
        <div className="text-center">
          <Tag>FAQs</Tag>
        </div>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeIn" },
          }}
          viewport={{ once: true }}
          className="text-6xl font-medium text-center mt-8"
        >
          Questions? We&apos;ve
          <br /> got{" "}
          <Span className="bg-gradient-to-b">answers</Span>
        </motion.h2>
        {/* faqs */}
        <div className="mt-12 flex flex-col gap-6">
          {items.map((item) => (
            <motion.div
              key={item.answer}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "backInOut" },
              }}
              viewport={{ once: true }}
            >
              <Accordion answer={item.answer} question={item.question} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
