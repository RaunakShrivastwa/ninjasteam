import React from 'react'

function Intro() {
  return (
    <div className='p-3  overflow-x-hidden mb-5'>

      <h1 class="mb-4 text-success">What is JavaScript?</h1>
      <p className='text-dark'>JavaScript is a programming language that helps make web pages interactive. When you see things like moving images, buttons that change when you click them, or forms that check if you filled them out correctly, that's often thanks to JavaScript. It works with HTML and CSS to create a complete web experience.</p>
      <p className='text-dark mt-4'>JavaScript is a <strong>high-level, lightweight, interpreted, JIT-compiled, multi-paradigm, prototype-based, synchronous, single-threaded, dynamic language.</strong> Let's break down what each of these terms means:</p>

      <ul class="list-group mt-4">
        <li class="list-group-item">
          <strong>High Level:</strong> High-level languages are those that are independent of the system's architecture. This means you don't have to worry about the hardware details of your computer.
        </li>
        <li class="list-group-item">
          <strong>Light-weighted:</strong> A lightweight application uses very little system resources, like memory and processing power, making it faster and more efficient.
        </li>
        <li class="list-group-item">
          <strong>Interpreted or JIT-compiled:</strong> Browsers can read and run JavaScript code directly. Modern browsers use JIT (Just-In-Time) compilation to convert JavaScript to executable code just before running it, making it faster.
        </li>
        <li class="list-group-item">
          <strong>Multi-Paradigm:</strong> JavaScript supports different styles of coding, allowing you to write the same functionality in various ways.
        </li>
        <li class="list-group-item">
          <strong>Prototype-Based:</strong> You can create objects directly without needing to define a blueprint (class) first. This makes object creation simpler.
        </li>
        <li class="list-group-item">
          <strong>Synchronous:</strong> JavaScript code runs in the order it's written, one instruction after another.
        </li>
        <li class="list-group-item">
          <strong>Single-Threaded:</strong> JavaScript can only do one thing at a time. It finishes the current task before moving on to the next one.
        </li>
        <li class="list-group-item">
          <strong>Dynamic Language:</strong> Variables in JavaScript can hold different types of values and can change their type during the execution of the program.
        </li>
      </ul>

      {/* understanding js */}
      <div class=" mt-5">
        <u className='text-success'><h1 class="mb-4 text-success">Understanding JavaScript</h1></u>
        <p className='text-dark'>JavaScript can be used both on the client-side (in the browser) and on the server-side (on the server). Here's what that means:</p>

        <div class="mt-4">
          <h3 className='text-success'>Client-Side JavaScript</h3>
          <ul class="list-group">
            <li class="list-group-item">
              <strong>Runs in the browser:</strong> Client-side JavaScript is executed on the user's browser. This means it can make web pages interactive without needing to reload.
            </li>
            <li class="list-group-item">
              <strong>Manipulates the DOM:</strong> It can change the content, structure, and style of a web page dynamically.
            </li>
            <li class="list-group-item">
              <strong>Handles user events:</strong> JavaScript can respond to user actions like clicks, input, and other interactions.
            </li>
            <li class="list-group-item">
              <strong>Examples:</strong> Form validation, dynamic content updates, animations, and handling user interactions.
            </li>
          </ul>
        </div>

        <div class="mt-4">
          <h3 className='text-success'>Server-Side JavaScript</h3>
          <ul class="list-group">
            <li class="list-group-item">
              <strong>Runs on the server:</strong> Server-side JavaScript is executed on the server, which means it can handle tasks like database operations, file manipulations, and more.
            </li>
            <li class="list-group-item">
              <strong>Processes requests:</strong> It can handle HTTP requests from the client, process them, and send back responses.
            </li>
            <li class="list-group-item">
              <strong>Examples:</strong> Using Node.js, you can create web servers, access databases, handle authentication, and more.
            </li>
          </ul>
        </div>
      </div>

      {/* why js */}
      <div class="mt-5">
        <h1 class="mb-4 text-success">Why JavaScript?</h1>
        <p className='text-dark'>Earlier, you learned how to create HTML elements and position or style them with CSS. But until now, you could not manipulate HTML elements or make the page dynamic. This is where JavaScript comes into play. JavaScript provides you with broad functionality which you can use to make your page dynamic.</p>

        <p className='text-dark'>Here are a few reasons why JavaScript is so popular and what it offers over HTML and CSS:</p>

        <ul class="list-group mt-4">
          <li class="list-group-item">
            <strong>Interactivity:</strong> HTML and CSS are static languages that can create beautiful and well-structured web pages, but they are limited in terms of interactivity. JavaScript offers the ability to add interactivity to web pages, which can help engage users and create a more dynamic experience.
          </li>
          <li class="list-group-item">
            <strong>Dynamic content:</strong> JavaScript allows for creating dynamic content on web pages, which can help make websites more engaging and responsive. For example, JavaScript can be used to create live updating news feeds, interactive maps, or real-time chat applications.
          </li>
          <li class="list-group-item">
            <strong>Event handling:</strong> JavaScript offers powerful event handling capabilities, which allow web developers to respond to user interactions and other events on the web page. This can be used to trigger animations, update content, or perform other actions in response to user input.
          </li>
          <li class="list-group-item">
            <strong>Third-party libraries and frameworks:</strong> JavaScript has a large and vibrant ecosystem of third-party libraries and frameworks, which can help developers build applications more efficiently. These libraries and frameworks can provide pre-built components, tools, and utilities that can save time and effort.
          </li>
        </ul>
      </div>

      {/* history */}

      <div class=" mt-4 overflow-x-hidden">
        <div class="row">
          <div class="col-md-12">
            <h1 class="mb-4 text-success">The Story of JavaScript</h1>

            <p>Once upon a time, the Internet was invented. In December 1991, Marc Andreessen and Eric Bina created the first web browser called Mosaic at the University of Illinois. This was a significant step in the world of the web.</p>

            <p>However, back then, websites were static. They were built using HTML and could only display fixed content without any interactive capabilities based on user interaction.</p>

            <p>In 1993, Marc Andreessen co-founded Netscape, introducing a new web browser. Despite Netscape's advancements, websites remained static and lacked interactivity beyond displaying static content defined in HTML.</p>

            <p>Recognizing the need for dynamic websites that could change based on user interaction, Netscape hired Brendan Eich in 1995 to develop a scripting language for browsers.</p>

            <p>Within just 10 days, Brendan Eich created the first draft of JavaScript and initially named it "Mocha". Later, it was renamed "LiveScript" and eventually to "JavaScript". The choice of name was influenced by the popularity of Java programming language at that time, although JavaScript has no relation to Java.</p>

            <p>To compete with Netscape, Microsoft introduced its own scripting technology called JScript in Internet Explorer 3 in 1996.</p>

            <p>With two different scripting languages available in different browsers, developers faced challenges in learning and implementing both. To address this, Netscape submitted JavaScript to Ecma International for standardization.</p>

            <p>In 1997, the first version of ECMAScript (ES), commonly known as JavaScript, was released by Ecma International. Since then, JavaScript has continued to evolve with new versions and features added over time, becoming a fundamental language not only for web browsers but also for server-side programming (such as Node.js) and mobile application development (such as React Native).</p>

            <p>This journey of JavaScript illustrates how a small scripting language grew to revolutionize web development, shaping the future of interactive and dynamic web experiences.</p>
          </div>
        </div>
      </div>

      {/* advanteges */}

      <div class=" mt-4 overflow-x-hidden">
        <div class="row">
            <div class="col-md-12">
                <h1 class="mt-3 text-success mb-3">Advantages of JavaScript</h1>

                <ul className='text-dark list-group'>
                    <li className='list-group-item'><strong>High-Level Language:</strong> JavaScript operates at a high level of abstraction, making it easier to write and understand code.</li>
                    <li className='list-group-item'><strong>Lightweight:</strong> JavaScript is lightweight in terms of memory usage and resources, running directly in web browsers.</li>
                    <li className='list-group-item'><strong>Easy to Use:</strong> JavaScript has a simple and straightforward syntax, facilitating rapid development and debugging.</li>
                    <li className='list-group-item'><strong>Dynamic Web Pages:</strong> JavaScript enables the creation of dynamic and interactive web pages, responding to user actions without page reloads.</li>
                    <li className='list-group-item'><strong>Animation and Effects:</strong> JavaScript provides powerful features for creating animations and visual effects, enhancing user experience.</li>
                    <li className='list-group-item'><strong>Server-Side Development:</strong> With Node.js, JavaScript can be used for server-side programming, allowing for scalable and efficient backend development.</li>
                    <li className='list-group-item'><strong>Rich Ecosystem:</strong> JavaScript has a vast ecosystem of libraries and frameworks like React.js and AngularJS that enhance productivity and extend capabilities.</li>
                </ul>
            </div>
        </div>
    </div>

    {/* disadvateges */}

    <div class=" mt-4">
        <div class="row">
            <div class="col-md-12">
                <h1 class="mt-4 mb-3 text-success">Disadvantages of JavaScript</h1>

                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action">
                        <strong>Browser Support Dependency:</strong> JavaScript execution depends on the user's browser and its version, leading to compatibility issues.
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <strong>Client-Side Security:</strong> Being client-side, JavaScript can be vulnerable to attacks like cross-site scripting (XSS).
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <strong>Performance:</strong> Heavy use of JavaScript can impact page load times and overall performance.
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <strong>Single Threaded:</strong> JavaScript's single-threaded nature can lead to blocking operations and affect responsiveness.
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <strong>Debugging Complexity:</strong> Debugging JavaScript code, especially in complex applications, can be challenging due to its dynamic nature.
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <strong>Dependency on Third-Party Libraries:</strong> While libraries enhance functionality, reliance on them can introduce maintenance and security risks.
                    </a>
                </div>
            </div>
        </div>
    </div>

    {/* Execution of js */}

    <div class=" mt-4">
    <div class="row">
        <div class="col-md-12">
            <h1 class="mt-4 mb-3 text-success">JavaScript Execution</h1>
              <p class="card-text">When you write JavaScript, it runs in a special environment called the JavaScript Runtime Environment (JRE). An interpreter reads your code line by line and does what each line says right away. And with JIT compilation, your code gets even faster over time by turning frequently used parts into faster versions.</p>
                    <p class="card-text">These parts work together to make sure your JavaScript programs work well and run smoothly wherever you use them, like on websites or in other programs.</p>

            <div class="card text-dark">
                <div class="card-body">
                    <h5 class="card-title">JavaScript Runtime Environment (JRE):</h5>
                    <p class="card-text">Think of it like a playground for JavaScript. It's a safe place where your JavaScript code can run.</p>
                    <p class="card-text"><strong>Key Functions:</strong> Sets up the environment where your code can work, like handling variables, functions, and other basic tasks.</p>
                </div>
            </div>

            <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title">Interpreter:</h5>
                    <p class="card-text">Imagine it as a real-time translator. It reads your JavaScript code line by line and immediately does what each line says.</p>
                    <p class="card-text"><strong>How it works:</strong> It translates each line into something your computer understands right when it reads it.</p>
                </div>
            </div>

            <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title">JIT (Just-In-Time) Compilation:</h5>
                    <p class="card-text">This is like a super smart helper that makes your code faster over time.</p>
                    <p class="card-text"><strong>How it works:</strong> Instead of just translating each line, it also looks at which parts of your code are used a lot. It then turns those parts into a faster version that your computer can run quickly.</p>
                    <p class="card-text"><strong>Benefits:</strong> Makes your code faster as you use it more often, which is really helpful for making websites and programs run smoothly.</p>
                </div>
            </div>
        </div>
    </div>
   </div>

   {/* for the career */}
   <div class=" mt-4">
        <div class="row">
            <div class="col-md-12">
                <h1 class="mt-4 mb-3 text-success">Career Paths in JavaScript</h1>

                <div class="card">
                    <div class="card-body text-dark">
                        <h5 class="card-title">Front-End Developer:</h5>
                        <p class="card-text">Creating user interfaces for websites.</p>
                    </div>
                </div>

                <div class="card mt-3">
                    <div class="card-body text-dark">
                        <h5 class="card-title">Back-End Developer:</h5>
                        <p class="card-text">Handling server-side logic and databases.</p>
                    </div>
                </div>

                <div class="card mt-3">
                    <div class="card-body text-dark">
                        <h5 class="card-title">Full-Stack Developer:</h5>
                        <p class="card-text">Combining front-end and back-end development.</p>
                    </div>
                </div>

                <div class="card mt-3">
                    <div class="card-body text-dark">
                        <h5 class="card-title">Mobile App Developer:</h5>
                        <p class="card-text">Building apps for iOS and Android.</p>
                    </div>
                </div>

                <div class="card mt-3">
                    <div class="card-body text-dark">
                        <h5 class="card-title">Game Developer:</h5>
                        <p class="card-text">Creating interactive games for web browsers.</p>
                    </div>
                </div>

                <div class="card mt-3">
                    <div class="card-body">
                        <h5 class="card-title">Freelancer or Entrepreneur:</h5>
                        <p class="card-text">Working independently on projects or starting a tech business.</p>
                    </div>
                </div>

                <div class="mt-4">
                    <p>These paths offer diverse opportunities in web development, mobile apps, games, and entrepreneurship, all rooted in your JavaScript skills.</p>
                </div>
            </div>
        </div>
    </div>



    </div>
  )
}

export default Intro