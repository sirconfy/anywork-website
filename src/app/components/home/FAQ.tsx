"use client";

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function FAQ() {
  const faqData = [
    {
      id: 1,
      question: "How do I know the artisan is trustworthy?",
      answer: "All artisans are vetted, background-checked, and rated by users after every job.",

    },
    {
      id: 2,
      question: "What if I'm not satisfied with the work?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with the work, we'll send another artisan to fix it at no additional cost.",
    },
    {
      id: 3,
      question: "How quickly can I get service?",
      answer: "Most services can be scheduled within 24 hours. Emergency services are available same-day in most areas.",
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, mobile money, and bank transfers for your convenience.",
    }
  ];

  return (
    <div className="bg-[#F5F9FD] py-16">
      <h2 className="text-2xl sm:text-[28px] text-center font-semibold text-textcolor ">
        Frequently Asked Questions
      </h2>

<p className='text-[#282E3280] text-md font[400] text-center mb-10'>Get answers to common questions about AnyWork</p>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {faqData.map((faq, index) => (
          <Accordion
            key={faq.id}
            disableGutters
            square={false}
            sx={{
              mb: index === faqData.length - 1 ? 0 : 2,
              borderRadius: '12px',
              boxShadow: 'none',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${faq.id}-content`}
              id={`panel${faq.id}-header`}
            >
              <Typography sx={{ color: '#282E32', fontWeight: 500 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: '#282E3280', fontSize: '16px' }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
            {/* {faq.hasActions && (
              <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions>
            )} */}
          </Accordion>
        ))}
      </div>
    </div>
  );
}