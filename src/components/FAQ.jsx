import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import './FAQ.css';

const faqs = [
  {
    question: "What exactly will I receive?",
    answer: "You will receive a digital PDF download containing the complete sticker collection (900+ stickers, 48 teams), collection pages, and bonus backing templates. All files are high-resolution and arranged by team for easy printing."
  },
  {
    question: "How should I print the stickers?",
    answer: "For the best appearance, we recommend using sticker paper or quality photo paper (matte or glossy). However, standard printer paper can also be used. You can print them on your home printer, at local print shops, or professional printing centers."
  },
  {
    question: "How do future file updates work?",
    answer: "Your purchase includes access to future updates. Whenever additional content, new teams, or extra sticker pages become available, the updated files will be added to your download folder at no extra charge."
  },
  {
    question: "Do I have to print everything at once?",
    answer: "Not at all! The files are arranged by team, so you can simply print what you want, when you want. Just print, trim along the borders, and place the stickers into your album."
  }
];

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqsList = [
    { question: t('faq_q1'), answer: t('faq_a1') },
    { question: t('faq_q2'), answer: t('faq_a2') },
    { question: t('faq_q3'), answer: t('faq_a3') },
    { question: t('faq_q4'), answer: t('faq_a4') }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title text-center">{t('faq_title')}</h2>
        
        <div className="faq-list">
          {faqsList.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
