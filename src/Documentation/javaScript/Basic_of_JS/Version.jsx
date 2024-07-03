import React from 'react'

function Version() {
  return (
    <div class="p-3  overflow-x-hidden mb-5">

      {/* for the ECMA Thery */}
    <div class="row">
        <div class="col-md-12">
            <h1 class="mt-4 mb-3">ECMA and JavaScript</h1>

            <div class="card border-0">
                <div class="card-body">
                    <h5 class="card-title">What is ECMA?</h5>
                    <p class="card-text">
                        ECMA (European Computer Manufacturers Association) is a group that creates standards for different technologies. One of the main things they work on is ECMAScript, which is the base for JavaScript and other similar languages.
                    </p>
                    <p class="card-text">
                        ECMA was started in 1961 and includes members from tech companies, standards organizations, and government agencies. Their main goal is to create rules that help different technologies work well together.
                    </p>
                </div>
            </div>

            <div class="card border-0 mt-3">
                <div class="card-body">
                    <h5 class="card-title">ECMAScript vs. JavaScript</h5>
                    <p class="card-text"><strong>ECMAScript:</strong> This is the official set of rules for how scripting languages like JavaScript should work. It defines the basic features and behavior of these languages, making sure they work the same way everywhere.</p>
                    <p class="card-text"><strong>JavaScript:</strong> JavaScript is a programming language that follows the ECMAScript rules. It adds extra features that allow you to interact with web pages, like changing the content or responding to user actions.</p>
                </div>
            </div>

            <div class="card border-0 mt-3">
                <div class="card-body">
                    <h5 class="card-title">Why ECMA Standards are Important for JavaScript</h5>
                    <p class="card-text"><strong>Interoperability:</strong> ECMA standards ensure that JavaScript works the same way across different browsers and platforms.</p>
                    <p class="card-text"><strong>Stability:</strong> These standards keep JavaScript features consistent, so code written today will still work in the future.</p>
                    <p class="card-text"><strong>Language Evolution:</strong> ECMA helps JavaScript grow by adding new features and improvements in a controlled way.</p>
                    <p class="card-text"><strong>Collaboration and Consensus:</strong> The standards process involves input from many developers and stakeholders to make sure the language meets the needs of everyone using it.</p>
                </div>
            </div>
        </div>
    </div>

    {/* ECMA Version Image */}
    <div className='container d-flex justify-content-center'>
        <img className='w-100' src="/ecma.JPG" alt="dd" />
    </div>

    <div class="container mt-5">
    <h1 class="mb-4 text-center">ECMA Timeline</h1>
    <div class="table-responsive">
        <table class="table table-bordered text-center">
            <thead class="thead-light">
                <tr>
                    <th>Version</th>
                    <th>Name</th>
                    <th>Release Year</th>
                    <th>Features</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ES1</td>
                    <td>ECMAScript 1</td>
                    <td>1997</td>
                    <td>Initial version</td>
                </tr>
                <tr>
                    <td>ES2</td>
                    <td>ECMAScript 2</td>
                    <td>1998</td>
                    <td>Editorial changes to keep in sync with ISO/IEC 16262 international standard</td>
                </tr>
                <tr>
                    <td>ES3</td>
                    <td>ECMAScript 3</td>
                    <td>1999</td>
                    <td>Regular expressions, better string handling, new control statements</td>
                </tr>
                <tr>
                    <td>ES4</td>
                    <td>ECMAScript 4</td>
                    <td>1998</td>
                    <td>Never fully released, influenced later editions</td>
                </tr>
                <tr>
                    <td>ES5</td>
                    <td>ECMAScript 5</td>
                    <td>2009</td>
                    <td>Added "strict mode", JSON support, array methods</td>
                </tr>
                <tr>
                    <td>ES6</td>
                    <td>ECMAScript 6</td>
                    <td>2015</td>
                    <td>Classes, modules, arrow functions, let and const</td>
                </tr>
                <tr>
                    <td>ES.Next</td>
                    <td>ECMAScript Next</td>
                    <td>Ongoing</td>
                    <td>Features added in yearly updates</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</div>
  )
}

export default Version