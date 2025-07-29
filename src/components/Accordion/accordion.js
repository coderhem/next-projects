import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

const CardAccordion = () => {
  return (
    <>
      <Accordion>
        <AccordionItem className="accordion-item">
          <AccordionItemButton>
            <div className='accordion-title'>
              <strong>1. What is an online clinic?</strong>
              <div className="icon">
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </AccordionItemButton>
          <AccordionItemPanel className='transition-all duration-300'>
            <div className="accordion-content">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in
                cupidatat occaecat ut occaecat consequat est minim minim
                esse tempor laborum consequat esse adipisicing eu
                reprehenderit enim.
              </p>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="accordion-item">
          <AccordionItemButton>
            <div className='accordion-title'>
              <strong>2. What is an online clinic?</strong>
              <div className="icon">
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </AccordionItemButton>
          <AccordionItemPanel className='transition-all duration-300'>
            <div className="accordion-content">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in
                cupidatat occaecat ut occaecat consequat est minim minim
                esse tempor laborum consequat esse adipisicing eu
                reprehenderit enim.
              </p>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
       {/* <div className='accordion-wrapper'>
        <div className="accordion-item">
          <div className='accordion-title' onClick={()=>{setIsOpen(!isOpen)}}>
            <strong>1. What is an online clinic?</strong>
            <div className="icon">
              <i className="fa fa-chevron-down"></i>
            </div>
          </div>
          <div className="accordion-content">
            <p>
              Exercitation in fugiat est ut ad ea cupidatat ut in
              cupidatat occaecat ut occaecat consequat est minim minim
              esse tempor laborum consequat esse adipisicing eu
              reprehenderit enim.
            </p>
          </div>
        </div>
        <AccordionItem className="accordion-item">
          <AccordionItemButton>
            <div className='accordion-title'>
              <strong>2. What is an online clinic?</strong>
              <div className="icon">
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </AccordionItemButton>
          <AccordionItemPanel className='transition-all duration-300'>
            <div className="accordion-content">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in
                cupidatat occaecat ut occaecat consequat est minim minim
                esse tempor laborum consequat esse adipisicing eu
                reprehenderit enim.
              </p>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </div> */}
    </>
  )
}

export default CardAccordion;
