import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Cors?</Accordion.Header>
        <Accordion.Body>
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a 
        server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. 
        CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting 
        the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, 
        the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why we using firebase?What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
        Firebase Hosting works out-of-the-box with Firebase services, including Cloud Functions, 
        Authentication, Realtime Database, Cloud Firestore, and Cloud Messaging.
         You can build powerful microservices and web apps using these complementary Firebase services. <br />

         Top Alternatives to Firebase Authentication are: <br />
         1.MongoDB. <br />
         2.Passport. <br />
         3.Octa. <br />
         4.Amazon Cognito. <br />
         5.JSON Web Token.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does the private route work?</Accordion.Header>
        <Accordion.Body>
        The private route component is similar to the public route, the only change is that redirect URL
         and authenticate condition. If the user is not authenticated he will be redirected to the login
         page and the user can only access the authenticated routes If he is authenticated (Logged in).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is Node?How does Node Works?</Accordion.Header>
        <Accordion.Body>
        Node (or more formally Node. js) is an open-source, cross-platform runtime environment that allows 
        developers to create all kinds of server-side tools and applications in JavaScript. The runtime is 
        intended for use outside of a browser context (i.e. running directly on a computer or server OS). <br />

        It is a used as backend service where javascript works on the server-side of the application. 
        This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts 
        javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
};

export default Blog;