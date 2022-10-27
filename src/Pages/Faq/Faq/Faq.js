import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Programming Language?</Accordion.Header>
        <Accordion.Body>
        A programming language is a computer language that is used by programmers (developers) to communicate 
        with computers. It is a set of instructions written 
        in any specific language ( C, C++, Java, Python) to perform a specific task.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is c++ use for?</Accordion.Header>
        <Accordion.Body>
        What is C++ Used For? C++ (or “C-plus-plus”) is a general-purpose programming and coding language. 
        C++ is used in developing browsers, operating systems, and applications,
         as well as in-game programming, software engineering, data structures, etc.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What do you mean by computer networking?</Accordion.Header>
        <Accordion.Body>
        Computer networking refers to interconnected computing devices that can exchange data and share 
        resources with each other. These networked devices use a system of rules, 
        called communications protocols, to transmit information over physical or wireless technologies.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Why is learning robotics important?</Accordion.Header>
        <Accordion.Body>
        Robotics concocts students for the competitive workforce of tomorrow. 
        Robotics allows children to work on their life skills along with social skills. These skills help them to stand out of the crowd in front of their future employers. 
        Robotics is breaking new ground in learning methodologies around the world.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Does web development is a good career?</Accordion.Header>
        <Accordion.Body>
        Yes, web development is a good career. Mondo's annual Tech and Digital Marketing Salary guide found 
        “Web Developer” was the most in-demand job title in tech and one of its top-paying jobs. And, 
        according to the U.S. Bureau of Labor, 
        the job market for Web Developers is expected to grow 15 percent by 2026
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>What do app developers do?</Accordion.Header>
        <Accordion.Body>
        A mobile app developer uses programming languages and development skills to create, test, and 
        develop applications on mobile devices. They work in popular operating system environments like 
        iOS and Android and often take into account UI and UX principles when creating applications.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
};

export default Faq;