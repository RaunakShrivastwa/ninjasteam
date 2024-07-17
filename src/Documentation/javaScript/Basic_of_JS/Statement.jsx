import React from 'react'
import Codepen from './Codepen'

function Statement() {
  return (
    <div className="container mt-4 p-3 border-0 overflow-x-hidden mb-5">
      <h1 className="text-center">JavaScript Statements</h1>

      <div className="card my-3">
        <div className="card-header">
          Overview
        </div>
        <div className="card-body">
          <p>
            JavaScript statements are made of values, operators, keywords, comments, and expressions. They execute sequentially, line by line.
          </p>
        </div>
      </div>

      {/* using of semicolon */}
      <div className="card my-3">
        <div className="card-header">
          Using Semicolons
        </div>
        <div className="card-body">
          <ul>
            <li>Semicolons separate JavaScript statements.</li>
            <li>They indicate the end of a line in JavaScript.</li>
          </ul>
          <h5>Example:</h5>
          <Codepen url={'https://codepen.io/RaunakShrivastwa/embed/BagNGvY?default-tab=&editable=true&theme-id=dark'} />
          <p>Note: Multiple statements are allowed if they are separated by semicolons.</p>
          <small>let a = 10; let b = 20; ✓ </small> <br />
          <small>let a = 10 let b = 20 〤 </small>
        </div>
      </div>

      {/* codeblock */}
      <div className="card my-3">
        <div className="card-header">
          Code Block in JavaScript
        </div>
        <div className="card-body">
          <p>
            JavaScript statements can be grouped inside curly brackets, which is known as a code block. The main purpose is to execute statements together.
          </p>
          <h5>Example:</h5>
          <pre><code>{`function myFunction() {
let x = 5;
let y = 6;
let z = x + y;

}`}</code>
          </pre>
        </div>
      </div>

            {/* for the white space */}
      <div className="card ">
        <div className="card-header">
          White Space in JavaScript
        </div>
        <div className="card-body">
          <p>JavaScript ignores multiple white spaces.</p>
        </div>
        <strong>Example</strong>
        <Codepen url={'https://codepen.io/RaunakShrivastwa/embed/NWZqEmB?default-tab=&editable=true&theme-id=dark'} />
      </div>

      <div className="card my-3">
        <div className="card-header">
          Line Length and Line Break
        </div>
        <div className="card-body">
          <p>
            In JavaScript, we should take care of line length and line breaks. They do not impact JavaScript output but increase code readability. We should use a maximum of 80 characters in one line. The best place to break a code line in JavaScript, if it doesn’t fit, is after an operator.
          </p>
        </div>
      </div>

      <div className="card my-3">
        <div className="card-header">
          Keywords in JavaScript
        </div>
        <div className="card-body">
          <p>
            Keywords are reserved words and cannot be used as a variable name. A JavaScript keyword tells what kind of operation it will perform.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Statement