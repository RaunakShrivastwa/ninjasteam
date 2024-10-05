import { v4 as uuidv4 } from 'uuid';

const course = [
  {
    id: uuidv4(),
    name: "JavaScript",
    paradigm: "Event-driven, Functional, Imperative",
    year: 1995,
    courseImage: "https://th.bing.com/th/id/OIP.EiJMyxDCiFhz5RpIsR3j_wHaFb?w=202&h=147&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A versatile language primarily used for web development."
  },
  {
    id: uuidv4(),
    name: "Python",
    paradigm: "Object-oriented, Functional, Imperative",
    year: 1991,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A popular language known for its readability and simplicity."
  },
  {
    id: uuidv4(),
    name: "Java",
    paradigm: "Object-oriented, Class-based, Concurrent",
    year: 1995,
    courseImage: "https://th.bing.com/th/id/OIP.EQzVg0ZlCRiH0JBYEcJAAAHaEK?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A widely-used language designed for portability across platforms."
  },
  {
    id: uuidv4(),
    name: "C++",
    paradigm: "Object-oriented, Procedural, Generic",
    year: 1985,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "An extension of C that includes object-oriented features."
  },
  {
    id: uuidv4(),
    name: "C#",
    paradigm: "Object-oriented, Functional, Component-oriented",
    year: 2000,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/9/99/Csharp_logo.png",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A language developed by Microsoft for the .NET framework."
  },
  {
    id: uuidv4(),
    name: "Ruby",
    paradigm: "Object-oriented, Functional, Imperative",
    year: 1995,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "Known for its elegant syntax and productivity."
  },
  {
    id: uuidv4(),
    name: "PHP",
    paradigm: "Server-side scripting, Object-oriented",
    year: 1995,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A widely-used language for web development."
  },
  {
    id: uuidv4(),
    name: "Swift",
    paradigm: "Object-oriented, Protocol-oriented",
    year: 2014,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A language developed by Apple for iOS and macOS development."
  },
  {
    id: uuidv4(),
    name: "Go",
    paradigm: "Concurrent, Procedural, Functional",
    year: 2009,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A statically typed language known for its simplicity and performance."
  },
  {
    id: uuidv4(),
    name: "Rust",
    paradigm: "Multi-paradigm, Systems programming",
    year: 2010,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_Logo_Gray_1.0.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A language focused on safety and performance."
  },
  {
    id: uuidv4(),
    name: "Kotlin",
    paradigm: "Object-oriented, Functional",
    year: 2011,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kotlin-logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A modern language that runs on the JVM and is fully interoperable with Java."
  },
  {
    id: uuidv4(),
    name: "TypeScript",
    paradigm: "Object-oriented, Functional, Imperative",
    year: 2012,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Typescript.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A superset of JavaScript that adds static types."
  },
  {
    id: uuidv4(),
    name: "Perl",
    paradigm: "Procedural, Object-oriented",
    year: 1987,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/3/30/Perl_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A high-level language known for its text processing capabilities."
  },
  {
    id: uuidv4(),
    name: "Scala",
    paradigm: "Object-oriented, Functional",
    year: 2003,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Scala-Logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A language that combines object-oriented and functional programming."
  },
  {
    id: uuidv4(),
    name: "Haskell",
    paradigm: "Functional, Concurrent",
    year: 1990,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/8/88/Haskell-logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A standardized, general-purpose purely functional programming language."
  },
  {
    id: uuidv4(),
    name: "Lua",
    paradigm: "Multi-paradigm",
    year: 1993,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Lua-Logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A lightweight scripting language commonly used in game development."
  },
  {
    id: uuidv4(),
    name: "R",
    paradigm: "Functional, Object-oriented",
    year: 1995,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/1/1c/R_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A language and environment for statistical computing and graphics."
  },
  {
    id: uuidv4(),
    name: "Objective-C",
    paradigm: "Object-oriented, Functional",
    year: 1984,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Objective-C_logo.png",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A general-purpose programming language that adds Smalltalk-style messaging to the C programming language."
  },
  {
    id: uuidv4(),
    name: "Shell",
    paradigm: "Scripting",
    year: 1971,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Bash_logo.png",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A command-line interpreter that provides a user interface for the Unix operating system."
  },
  {
    id: uuidv4(),
    name: "Dart",
    paradigm: "Object-oriented, Functional",
    year: 2011,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Dart-logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A client-optimized language for fast apps on any platform."
  },
  {
    id: uuidv4(),
    name: "Clojure",
    paradigm: "Functional, Concurrent",
    year: 2007,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Clojure_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A modern Lisp dialect that runs on the JVM."
  },
  {
    id: uuidv4(),
    name: "Elixir",
    paradigm: "Functional, Concurrent",
    year: 2011,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Elixir_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A dynamic, functional language designed for building scalable and maintainable applications."
  },
  {
    id: uuidv4(),
    name: "F#",
    paradigm: "Functional, Object-oriented",
    year: 2005,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/6/6a/FSharp.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A functional-first language that runs on the .NET platform."
  },
  {
    id: uuidv4(),
    name: "Visual Basic .NET",
    paradigm: "Object-oriented",
    year: 2001,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Visual_Basic_Logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "An evolution of Visual Basic that runs on the .NET framework."
  },
  {
    id: uuidv4(),
    name: "Assembly Language",
    paradigm: "Low-level programming",
    year: 1940,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/8/85/Assembly_language.png",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A low-level programming language that is closely related to machine code."
  },
  {
    id: uuidv4(),
    name: "Scratch",
    paradigm: "Visual programming",
    year: 2003,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Scratch_logo.png",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A visual programming language aimed at children."
  },
  {
    id: uuidv4(),
    name: "COBOL",
    paradigm: "Procedural, Object-oriented",
    year: 1959,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Cobol.png",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A language designed for business, finance, and administrative systems."
  },
  {
    id: uuidv4(),
    name: "Fortran",
    paradigm: "Procedural, Object-oriented",
    year: 1957,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/6/68/Fortran_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A language used mainly for scientific and engineering applications."
  },
  {
    id: uuidv4(),
    name: "Ada",
    paradigm: "Multi-paradigm",
    year: 1980,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ada_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A structured, statically typed language known for safety and maintainability."
  },
  {
    id: uuidv4(),
    name: "Groovy",
    paradigm: "Object-oriented, Functional",
    year: 2003,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Groovy-logo.png",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A dynamic language for the Java platform."
  },
  {
    id: uuidv4(),
    name: "ActionScript",
    paradigm: "Object-oriented",
    year: 1996,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/d/d1/ActionScript_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A language used primarily for Adobe Flash applications."
  },
  {
    id: uuidv4(),
    name: "VBScript",
    paradigm: "Procedural, Scripting",
    year: 1996,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/VBScript_Logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A scripting language developed by Microsoft."
  },
  {
    id: uuidv4(),
    name: "Tcl",
    paradigm: "Scripting",
    year: 1988,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Tcl_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A dynamic programming language suitable for various applications."
  },
  {
    id: uuidv4(),
    name: "Smalltalk",
    paradigm: "Object-oriented",
    year: 1972,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Smalltalk_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "An early object-oriented programming language known for its simplicity."
  },
  {
    id: uuidv4(),
    name: "Pascal",
    paradigm: "Procedural, Structured",
    year: 1970,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Pascal_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A language designed for teaching programming and structured programming."
  },
  {
    id: uuidv4(),
    name: "Nim",
    paradigm: "Multi-paradigm",
    year: 2008,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Nim_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A statically typed, compiled systems programming language."
  },
  {
    id: uuidv4(),
    name: "Julia",
    paradigm: "Multi-paradigm",
    year: 2012,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Julia_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A high-level, high-performance programming language for technical computing."
  },
  {
    id: uuidv4(),
    name: "SAS",
    paradigm: "Procedural, Data-oriented",
    year: 1966,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/0/07/SAS_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A software suite developed for advanced analytics, business intelligence, and data management."
  },
  {
    id: uuidv4(),
    name: "Prolog",
    paradigm: "Logic programming",
    year: 1972,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Prolog_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A logic programming language associated with artificial intelligence and computational linguistics."
  },
  {
    id: uuidv4(),
    name: "Elm",
    paradigm: "Functional",
    year: 2012,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Elm_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A functional language for front-end web development."
  },
  {
    id: uuidv4(),
    name: "Crystal",
    paradigm: "Object-oriented, Functional",
    year: 2014,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/5/52/Crystal_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A language with a syntax similar to Ruby, compiled to native code."
  },
  {
    id: uuidv4(),
    name: "Solidity",
    paradigm: "Object-oriented, Contract-oriented",
    year: 2014,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Solidity_logo.png",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A language for writing smart contracts on blockchain platforms."
  },
  {
    id: uuidv4(),
    name: "RPG",
    paradigm: "Procedural, Object-oriented",
    year: 1960,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/8/8b/RPG_Logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A language primarily used for business applications on IBM's midrange computers."
  },
  {
    id: uuidv4(),
    name: "APL",
    paradigm: "Array-oriented",
    year: 1960,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/7/7b/APL_logo.png",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A programming language for concise expression of algorithms."
  },
  {
    id: uuidv4(),
    name: "OCaml",
    paradigm: "Functional, Imperative",
    year: 1996,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/3/30/OCaml_logo.svg",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A general-purpose programming language with an emphasis on expressiveness and safety."
  },
  {
    id: uuidv4(),
    name: "Hack",
    paradigm: "Static, Hybrid",
    year: 2014,
    courseImage: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Hack_logo.png",
    marketPrice:1200,
    startDate:'12-02-2025',
    description: "A programming language for the HipHop Virtual Machine (HHVM)."
  }
];

export default course;
