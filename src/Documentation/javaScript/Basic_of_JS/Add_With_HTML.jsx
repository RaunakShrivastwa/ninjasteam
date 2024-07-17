import React from 'react'
import Codepen from './Codepen'

function Add_With_HTML({ url }) {
  return (
    <div class="p-3 border-0 overflow-x-hidden mb-5 ">
      {/* General Structure of js */}
      <div class="row">
        <div class="col">
          <h1>JavaScript Overview</h1>
          <p>In the previous lecture, we saw what JavaScript is and all the history related to JavaScript and we saw its advantages and disadvantages in depth. So, now at this time, we can move ahead with JavaScript and see how to use JavaScript and where to use it?</p>
          <h1 className='mt-2 mb-3'>How to use JavaScript?</h1>
          <p>Generally, to use JavaScript, we use HTML. I hope that if you know HTML then you can move ahead. And by using HTML, we can use JavaScript at different places. So, we will see each part in depth as to where to add JavaScript in which part, and what are its advantages and disadvantages, and we have approached to use JavaScript. We will also see this.</p>
          <h1 className='mt-5'>General Structure of HTML</h1>
           <Codepen url={'https://codepen.io/RaunakShrivastwa/embed/VwJLwee?default-tab=html%2Cresult&editable=true&theme-id=dark'}/>
          <p>There are different places to use JavaScript in HTML:</p>
          <ol className='text-dark'>
            <li>1. Inside the <code>&lt;head&gt;</code> section in HTML</li>
            <li>2. Inside the end of the <code>&lt;body&gt;</code> section known as Internal JavaScript</li>
            <li>3. Outside from the HTML file known as External JavaScript</li>
          </ol>
        </div>
      </div>


      {/* js using html */}
      <div className="container mt-4">
      <h1 className="text-center">JavaScript Placement in HTML</h1>

      {/* js inside js */}
      <div className="card my-3">
        <div className="card-header">
          JavaScript inside <code>&lt;head&gt;</code> section
        </div>
        <div className="card-body">
          <p>
            We can write JavaScript inside the <code>&lt;head&gt;</code> section of HTML with the help of the <code>&lt;script&gt;</code> tag. While using JavaScript inside <code>&lt;head&gt;</code>, the JavaScript will load before HTML loads.
          </p>
          <pre><code>{`<script>/ Your JavaScript code</script>`}</code></pre>
          <strong>Example:- </strong>
          <Codepen url={'https://codepen.io/RaunakShrivastwa/embed/OJeVZQr?default-tab=html%2Cresult&editable=true&theme-id=dark'}/>
          <h5>Advantages of using JS inside <code>&lt;head&gt;</code></h5>
          <ul>
            <li><strong>Early Execution:</strong> JavaScript in the <code>&lt;head&gt;</code> section loads and executes early in the page rendering process, potentially allowing scripts to be ready before the rest of the page loads.</li>
            <li><strong>Preloading:</strong> You can preload necessary scripts or resources before the page content, which can optimize loading times.</li>
            <li><strong>Global Scope:</strong> Variables and functions declared in the <code>&lt;head&gt;</code> section are available globally throughout the page, making them accessible to other scripts or functions.</li>
          </ul>
          <h5>Disadvantages of Using JS inside <code>&lt;head&gt;</code></h5>
          <ul>
            <li><strong>Slower Page Loading:</strong> When JavaScript is in the <code>&lt;head&gt;</code>, the browser has to load and execute it before showing any content. This can make your website feel slower to users because they have to wait longer to see anything on the screen.</li>
            <li><strong>Rendering Delays:</strong> JavaScript in the <code>&lt;head&gt;</code> can delay the rendering of the page content. This means users might see a blank screen or incomplete page while the scripts are loading and running.</li>
            <li><strong>Order Dependencies:</strong> If scripts in the <code>&lt;head&gt;</code> depend on each other, they must be loaded in the correct order. If not, errors can occur, making parts of your website not work as expected.</li>
            <li><strong>User Experience Issues:</strong> Especially on slower internet connections or older devices, putting JavaScript in the <code>&lt;head&gt;</code> can worsen the user experience by increasing loading times and potentially causing the page to freeze or load incorrectly.</li>
          </ul>
        </div>
      </div>

        {/* js inside end of body */}
      <div className="card my-3">
        <div className="card-header">
          JavaScript inside end of <code>&lt;body&gt;</code> section
        </div>
        <div className="card-body">
          <p>
            To place JavaScript at the end of the <code>&lt;body&gt;</code> tag, simply include your <code>&lt;script&gt;</code> tag just before the closing <code>&lt;/body&gt;</code> tag in your HTML document:
          </p>
          <pre><code>{`<script>
// Your JavaScript code
</script>`}</code></pre>
          <Codepen url={'https://codepen.io/RaunakShrivastwa/embed/oNrNjQo?default-tab=html%2Cresult&editable=true&theme-id=dark'} />
          <h5>Advantages of Internal JavaScript</h5>
          <ul>
            <li><strong>Faster Perceived Load Time:</strong> Placing JavaScript at the end of the <code>&lt;body&gt;</code> allows the browser to load and display the HTML content first. Users see the page content sooner, which improves perceived performance.</li>
            <li><strong>Improved Page Rendering:</strong> Since JavaScript execution doesn't block parsing of HTML, the page can render progressively. This reduces the likelihood of users seeing blank or incomplete pages during load.</li>
            <li><strong>Simpler Dependency Management:</strong> Scripts placed at the end of <code>&lt;body&gt;</code> are less likely to encounter issues with dependencies on other scripts or HTML elements. By the time they execute, most of the DOM has been parsed and is accessible.</li>
          </ul>
          <h5>Disadvantages of Internal JavaScript</h5>
          <ul>
            <li><strong>Delayed Script Execution:</strong> Scripts at the end of <code>&lt;body&gt;</code> can execute later than those in <code>&lt;head&gt;</code>, potentially delaying interactive features or functionality that rely on JavaScript.</li>
            <li><strong>Global Scope Issues:</strong> Variables and functions declared in scripts at the end of <code>&lt;body&gt;</code> are globally scoped by default, which might lead to naming conflicts or unintended interactions with other scripts.</li>
            <li><strong>Script Load Dependencies:</strong> If scripts need to be loaded in a specific order, arranging them at the end of <code>&lt;body&gt;</code> requires careful planning to ensure dependencies are met without errors.</li>
          </ul>
        </div>
      </div>

        {/* external js */}
      <div className="card my-3">
        <div className="card-header">
          External JavaScript
        </div>
        <div className="card-body">
          <p>
            We can write JavaScript outside of the HTML page by creating another file and linking that file in the HTML page at the end of the <code>&lt;body&gt;</code>. Note: The file extension must be .js
          </p>
          <pre><code>{`<script src="path/to/your/file.js"></script>`}</code></pre>
           <strong>Example:-</strong>
           <Codepen url={'https://codepen.io/RaunakShrivastwa/embed/ExBjLpW?default-tab=html%2Cresult&editable=true&theme-id=dark'} />
          <h5>Advantages of External JavaScript</h5>
          <ul>
            <li><strong>Faster Initial Page Load:</strong> By placing the script at the end of the <code>&lt;body&gt;</code>, the HTML content can load and render first, making the page appear faster to users.</li>
            <li><strong>Non-blocking Rendering:</strong> External JavaScript files placed at the end do not block the rendering of the HTML content, improving the overall user experience.</li>
            <li><strong>DOM Availability:</strong> By the time the script is loaded and executed, the entire DOM is usually available, reducing the risk of errors when manipulating DOM elements.</li>
            <li><strong>Better Performance:</strong> For large scripts or multiple scripts, placing them at the end of the <code>&lt;body&gt;</code> can improve performance by allowing the browser to download and render the page content first.</li>
          </ul>
          <h5>Disadvantages of External JavaScript</h5>
          <ul>
            <li><strong>Delayed Script Execution:</strong> Since the script executes only after the entire HTML content is loaded, any functionality dependent on the script is delayed until the end of the page load.</li>
            <li><strong>Dependency Management:</strong> If your scripts depend on each other, you must carefully manage their order of inclusion to ensure they execute correctly.</li>
            <li><strong>SEO Considerations:</strong> If your scripts include essential SEO content, placing them at the end might delay the processing of that content by search engines, though this is less of an issue with modern SEO practices.</li>
          </ul>
        </div>
      </div>

        {/* node js */}
      <div className="card my-3">
        <div className="card-header">
          Node.js
        </div>
        <div className="card-body">
          <p>
            This is a cross-platform, open-source JavaScript runtime environment. With Node.js, we can run JavaScript outside of the browser, and we don't need to use HTML.
          </p>
          <p>
            <strong>Note:</strong> <a href="https://nodejs.org/en/download/prebuilt-installer/current"> Install Node.js and set it up. In this tutorial, we are using Node.js to execute JavaScript.</a>
          </p>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Add_With_HTML