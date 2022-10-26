import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const QuestionAndAnswer = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-3">
          <span className="text-[#1e467f]">1.</span> What is cors?
        </h1>
        <p className="text-gray-700 text-lg">
          Cross-Origin Resource Sharing (CORS) is an HTTP-header-based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request. It extends
          and adds flexibility to the same-origin policy (SOP). However, it also
          provides the potential for cross-domain attacks, if a website's CORS
          policy is poorly configured and implemented. CORS is not a protection
          against cross-origin attacks such as cross-site request forgery
          (CSRF).
        </p>
      </div>
      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-3">
          <span className="text-[#1e467f]">2.</span> Why are you using firebase?
          What other options do you have to implement authentication?
        </h1>
        <p className="text-gray-700 text-lg">
          Firebase <span className="text-[#f23276]">Authentication</span>{" "}
          provides backend services, easy-to-use SDKs, and ready-made UI
          libraries to authenticate users to your app. It supports
          authentication using passwords, phone numbers, popular federated
          identity providers like Google, Facebook and Twitter, and more.
        </p>
        <h2 className="font-bold my-2">
          User Other Authentication Platforms [Auth0, Firebase Alternatives]
        </h2>
        <ul className="flex gap-8">
          <div>
            <li className="flex items-center gap-2 mb-1">
              <AiOutlineArrowRight />
              <span>Okta.</span>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <AiOutlineArrowRight />
              <span>PingIdentity.</span>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <AiOutlineArrowRight />
              <span>Keycloak.</span>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <AiOutlineArrowRight />
              <span>Frontegg.</span>
            </li>
          </div>
          <div>
            <li className="flex items-center gap-2 mb-1">
              <AiOutlineArrowRight />
              <span>STYTCH.</span>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <AiOutlineArrowRight />
              <span>Ory.</span>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <AiOutlineArrowRight />
              <span>Supabase.</span>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <AiOutlineArrowRight />
              <span>Ory.</span>
            </li>
          </div>
        </ul>
      </div>
      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-3">
          <span className="text-[#1e467f]">3.</span> How does the private route
          work?
        </h1>
        <p className="text-gray-700 text-lg">
          The private route component is used to protect selected pages in a
          React app from{" "}
          <span className="text-[#f23276]"> unauthenticated users.</span> The
          private route component is similar to the public route, the only
          change is the redirect URL and authenticates condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-3">
          <span className="text-[#1e467f]">4.</span> What is Node? How does Node
          work?
        </h1>
        <p className="text-gray-700 text-lg">
          TNode. js is a JavaScript{" "}
          <span className="text-[#f23276]">runtime environment</span> that
          achieves low latency and high throughput by taking a “non-blocking”
          approach to serving requests. In other words, Node. js wastes no time
          or resources waiting for I/O requests to return.
        </p>
        <p className="mt-2 text-gray-700 text-lg">
          <span className="font-bold ">Working of Node.js:</span> Node.js
          accepts the request from the clients and sends the response, while
          working with the request node.js handles them with a single thread. To
          operate I/O operations or requests node.js use the concept of threads.
          A thread is a sequence of instructions that the server needs to
          perform. It runs parallel on the server to provide the information to
          multiple clients. Node.js is an event loop single-threaded language.
          It can handle concurrent requests with a single thread without
          blocking it for one request.
        </p>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
