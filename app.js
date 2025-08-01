// Curriculum data
const curriculum = {
  "semesters": [
    {
      "id": 1,
      "name": "Semester 1",
      "courses": [
        {"code":"24ENG101","title":"English I","credits":2,
         "syllabus":"Mechanics of writing; Parts of speech; Tenses; Modal auxiliaries; Reported speech; Pre-writing techniques; Paragraph & essay writing; Listening comprehension (Ken Robinson, Steve Jobs, Abdul Kalam); Selected literary texts by Shashi Tharoor, A. G. Gardiner, Ruskin Bond, Mrinal Pande, W.H. Auden, W.H. Davies.",
         "textbooks":["Murphy's English Grammar — Raymond Murphy","Speak English in Four Easy Steps — V. Syamala","A Practical English Grammar — Thomson & Martinet"],
         "references":["The Week column by Shashi Tharoor (2018)","Leaves in the Wind — A.G. Gardiner","The Best of Ruskin Bond — Ruskin Bond"]},
        {"code":"24MAT105","title":"Calculus","credits":4,
         "syllabus":"Differentiation rules; Chain rule; Implicit differentiation; Application of derivatives (extrema, MVT, concavity, L'Hospital); Definite integral & Fundamental Theorem; Techniques of integration (parts, partial fractions, trig); Applications of integrals (volumes, arc length, centre of mass).",
         "textbooks":["Calculus — Finney & Thomas (11th ed.)"],
         "references":["Calculus — Howard Anton et al.","Calculus — Strauss, Bradley & Smith","Calculus: Early Transcendentals — James Stewart"]},
        {"code":"24MAT106","title":"Discrete Mathematics","credits":4,
         "syllabus":"Logic & proof; Functions; Induction; Counting, Pigeonhole, permutations & combinations; Relations, partial orders and equivalence; Recurrence relations & generating functions; Inclusion–exclusion; Graph theory basics, connectivity, Euler/Hamilton paths, shortest paths, planarity, colourings.",
         "textbooks":["Discrete Mathematics and Its Applications — Kenneth H. Rosen (6th ed.)"],
         "references":["Discrete and Combinatorial Mathematics — R.P. Grimaldi","Elements of Discrete Mathematics — Liu"]},
        {"code":"24PHY103","title":"Physics","credits":3,
         "syllabus":"Mechanics: force & energy, collisions; Gravitation & Kepler; Rigid-body rotation & inertia tensor; Special relativity: Lorentz transforms, time dilation; Lagrangian formulation & principle of least action.",
         "textbooks":["Principles of Physics — Halliday, Resnick & Walker"],
         "references":["Berkeley Physics Vol 1","Feynman Lectures Vol 1"]},
        {"code":"24CSC101","title":"Problem Solving & Python Programming","credits":3,
         "syllabus":"Python basics, data types, control structures, strings, files, lists, tuples, dictionaries, functions, recursion, exceptions, OOP, testing.",
         "textbooks":["Introduction to Computation and Programming Using Python — John Guttag (2nd ed.)"],
         "references":[]},
        {"code":"24CSC181","title":"Python Programming Lab","credits":1,
         "syllabus":"Lab covering installation, arithmetic, conditionals, loops, data structures, modularity, unit testing, OOP.",
         "textbooks":["Lab manual based on Guttag text"],
         "references":[]}
      ]
    },
    {
      "id": 2,
      "name": "Semester 2",
      "courses": [
        {"code":"24ENG111","title":"English II","credits":2,
         "syllabus":"Vocabulary building; Error analysis; Formal correspondence; Sounds of English; Current news awareness; Reports & presentations.",
         "textbooks":["Technical Communication — Paul Anderson"],
         "references":[]},
        {"code":"24MAT115","title":"Vector Calculus","credits":4,
         "syllabus":"Vector-valued functions; Differential calculus of scalar & vector fields; Line, surface & volume integrals; Green, Gauss & Stokes theorems.",
         "textbooks":["Calculus Vol 1 & 2 — Tom Apostol"],
         "references":["Vector Calculus — Jerrold Marsden & Anthony Tromba"]},
        {"code":"24MAT116","title":"Linear Algebra","credits":4,
         "syllabus":"Vector spaces, linear independence, basis, dimension; Linear transformations and matrices; Eigenvalues and eigenvectors; Inner product spaces; Orthogonality and orthonormal bases.",
         "textbooks":["Linear Algebra and Its Applications — Gilbert Strang (4th ed.)"],
         "references":["Linear Algebra — Kenneth Hoffman & Ray Kunze"]},
        {"code":"24CHE103","title":"Chemistry","credits":3,
         "syllabus":"Atomic structure and periodic properties; Chemical bonding theories; Thermodynamics and kinetics; Electrochemistry; Organic chemistry basics.",
         "textbooks":["General Chemistry — Petrucci, Harwood & Herring"],
         "references":["Physical Chemistry — Atkins & de Paula"]},
        {"code":"24CSC111","title":"Data Structures","credits":3,
         "syllabus":"Arrays, linked lists, stacks, queues, trees, graphs, hashing, sorting and searching algorithms, complexity analysis.",
         "textbooks":["Introduction to Algorithms — Cormen, Leiserson, Rivest & Stein (3rd ed.)"],
         "references":["Data Structures and Algorithms — Aho, Hopcroft & Ullman"]},
        {"code":"24CSC191","title":"Data Structures Lab","credits":1,
         "syllabus":"Implementation of data structures and algorithms in C/C++.",
         "textbooks":["Lab manual based on CLRS"],
         "references":[]}
      ]
    },
    {
      "id": 3,
      "name": "Semester 3",
      "courses": [
        {"code":"24MAT205","title":"Real Analysis","credits":4,
         "syllabus":"Real number system; Sequences and series; Continuity and uniform continuity; Differentiation; Riemann integration; Sequences and series of functions.",
         "textbooks":["Principles of Mathematical Analysis — Walter Rudin (3rd ed.)"],
         "references":["Real Analysis — H.L. Royden & P.M. Fitzpatrick"]},
        {"code":"24MAT206","title":"Abstract Algebra","credits":4,
         "syllabus":"Groups, subgroups, homomorphisms, quotient groups; Rings, ideals, quotient rings; Fields and field extensions; Galois theory introduction.",
         "textbooks":["Abstract Algebra — David S. Dummit & Richard M. Foote (3rd ed.)"],
         "references":["Algebra — Michael Artin"]},
        {"code":"24MAT207","title":"Ordinary Differential Equations","credits":3,
         "syllabus":"First-order ODEs; Higher-order linear ODEs; Systems of ODEs; Laplace transforms; Series solutions; Boundary value problems.",
         "textbooks":["Elementary Differential Equations — Boyce & DiPrima (10th ed.)"],
         "references":["Ordinary Differential Equations — Tenenbaum & Pollard"]},
        {"code":"24CSC201","title":"Design and Analysis of Algorithms","credits":3,
         "syllabus":"Algorithm design paradigms; Asymptotic analysis; Sorting and searching; Graph algorithms; Dynamic programming; Greedy algorithms; NP-completeness.",
         "textbooks":["Introduction to Algorithms — Cormen, Leiserson, Rivest & Stein (3rd ed.)"],
         "references":["Algorithm Design — Jon Kleinberg & Eva Tardos"]},
        {"code":"24CSC202","title":"Computer Organization","credits":3,
         "syllabus":"Digital logic and Boolean algebra; Computer arithmetic; Processor design; Memory hierarchy; I/O systems; Assembly language programming.",
         "textbooks":["Computer Organization and Design — Patterson & Hennessy (5th ed.)"],
         "references":["Computer System Architecture — M. Morris Mano"]},
        {"code":"24CSC281","title":"Algorithms Lab","credits":1,
         "syllabus":"Implementation of fundamental algorithms and data structures.",
         "textbooks":["Lab manual"],
         "references":[]}
      ]
    },
    {
      "id": 4,
      "name": "Semester 4",
      "courses": [
        {"code":"24MAT215","title":"Complex Analysis","credits":4,
         "syllabus":"Complex numbers and functions; Analytic functions; Complex integration; Cauchy's theorem; Taylor and Laurent series; Residue theorem.",
         "textbooks":["Complex Analysis — Lars Ahlfors (3rd ed.)"],
         "references":["Functions of One Complex Variable — John Conway"]},
        {"code":"24MAT216","title":"Probability and Statistics","credits":4,
         "syllabus":"Probability spaces; Random variables; Distributions; Central limit theorem; Statistical inference; Hypothesis testing; Regression analysis.",
         "textbooks":["Introduction to Mathematical Statistics — Hogg, McKean & Craig (7th ed.)"],
         "references":["Probability and Statistics — DeGroot & Schervish"]},
        {"code":"24MAT217","title":"Numerical Methods","credits":3,
         "syllabus":"Root finding; Linear systems; Interpolation; Numerical differentiation and integration; ODEs; Error analysis.",
         "textbooks":["Numerical Analysis — Richard Burden & Douglas Faires (9th ed.)"],
         "references":["Numerical Methods — Chapra & Canale"]},
        {"code":"24CSC211","title":"Database Systems","credits":3,
         "syllabus":"Database design; ER modeling; Relational model; SQL; Normalization; Transaction processing; Concurrency control.",
         "textbooks":["Database System Concepts — Silberschatz, Korth & Sudarshan (6th ed.)"],
         "references":["Fundamentals of Database Systems — Elmasri & Navathe"]},
        {"code":"24CSC212","title":"Operating Systems","credits":3,
         "syllabus":"Process management; Memory management; File systems; I/O systems; Synchronization; Deadlocks; Distributed systems.",
         "textbooks":["Operating System Concepts — Silberschatz, Galvin & Gagne (9th ed.)"],
         "references":["Modern Operating Systems — Andrew Tanenbaum"]},
        {"code":"24CSC291","title":"Database Lab","credits":1,
         "syllabus":"SQL programming and database design projects.",
         "textbooks":["Lab manual"],
         "references":[]}
      ]
    },
    {
      "id": 5,
      "name": "Semester 5",
      "courses": [
        {"code":"24MAT305","title":"Topology","credits":4,
         "syllabus":"Topological spaces; Continuous functions; Connectedness; Compactness; Metric spaces; Function spaces.",
         "textbooks":["Topology — James Munkres (2nd ed.)"],
         "references":["General Topology — Stephen Willard"]},
        {"code":"24MAT306","title":"Partial Differential Equations","credits":3,
         "syllabus":"Classification of PDEs; Method of characteristics; Separation of variables; Fourier series; Heat, wave, and Laplace equations.",
         "textbooks":["Partial Differential Equations — Lawrence Evans"],
         "references":["Elementary Applied Partial Differential Equations — Richard Haberman"]},
        {"code":"24CSC301","title":"Theory of Computation","credits":3,
         "syllabus":"Finite automata; Regular languages; Context-free grammars; Pushdown automata; Turing machines; Decidability; Complexity theory.",
         "textbooks":["Introduction to the Theory of Computation — Michael Sipser (3rd ed.)"],
         "references":["Automata Theory — Hopcroft, Motwani & Ullman"]},
        {"code":"24CSC302","title":"Computer Networks","credits":3,
         "syllabus":"Network protocols; OSI model; TCP/IP; Routing algorithms; Network security; Wireless networks.",
         "textbooks":["Computer Networking — Kurose & Ross (7th ed.)"],
         "references":["Computer Networks — Andrew Tanenbaum"]},
        {"code":"24CSC303","title":"Software Engineering","credits":3,
         "syllabus":"Software development lifecycle; Requirements engineering; Design patterns; Testing; Project management; Agile methodologies.",
         "textbooks":["Software Engineering — Ian Sommerville (10th ed.)"],
         "references":["The Mythical Man-Month — Frederick Brooks"]},
        {"code":"24CSC381","title":"Networks Lab","credits":1,
         "syllabus":"Network programming and protocol implementation.",
         "textbooks":["Lab manual"],
         "references":[]}
      ]
    },
    {
      "id": 6,
      "name": "Semester 6",
      "courses": [
        {"code":"24MAT315","title":"Functional Analysis","credits":4,
         "syllabus":"Banach spaces; Hilbert spaces; Linear operators; Spectral theory; Applications to differential equations.",
         "textbooks":["Functional Analysis — Walter Rudin"],
         "references":["Introductory Functional Analysis — Erwin Kreyszig"]},
        {"code":"24MAT316","title":"Graph Theory","credits":3,
         "syllabus":"Graph fundamentals; Trees; Connectivity; Eulerian and Hamiltonian graphs; Planar graphs; Graph coloring; Network flows.",
         "textbooks":["Introduction to Graph Theory — Douglas West (2nd ed.)"],
         "references":["Graph Theory — Reinhard Diestel"]},
        {"code":"24CSC311","title":"Machine Learning","credits":3,
         "syllabus":"Supervised learning; Unsupervised learning; Neural networks; Deep learning; Reinforcement learning; Model evaluation.",
         "textbooks":["The Elements of Statistical Learning — Hastie, Tibshirani & Friedman"],
         "references":["Pattern Recognition and Machine Learning — Christopher Bishop"]},
        {"code":"24CSC312","title":"Computer Graphics","credits":3,
         "syllabus":"2D and 3D transformations; Projection; Clipping; Rasterization; Shading; Ray tracing; Animation.",
         "textbooks":["Computer Graphics — Foley, van Dam, Feiner & Hughes"],
         "references":["Real-Time Rendering — Akenine-Möller, Haines & Hoffman"]},
        {"code":"24CSC3XX","title":"Elective I","credits":3,
         "syllabus":"Choose from available electives in Mathematics or Computer Science.",
         "textbooks":["Depends on chosen elective"],
         "references":[]},
        {"code":"24CSC391","title":"Machine Learning Lab","credits":1,
         "syllabus":"Implementation of ML algorithms and projects.",
         "textbooks":["Lab manual"],
         "references":[]}
      ]
    },
    {
      "id": 7,
      "name": "Semester 7",
      "courses": [
        {"code":"24MAT405","title":"Measure Theory","credits":4,
         "syllabus":"Sigma algebras; Measures; Measurable functions; Lebesgue integration; Convergence theorems; Product measures.",
         "textbooks":["Real Analysis — Halsey Royden & Patrick Fitzpatrick (4th ed.)"],
         "references":["Measure Theory — Paul Halmos"]},
        {"code":"24CSC401","title":"Compiler Design","credits":3,
         "syllabus":"Lexical analysis; Syntax analysis; Semantic analysis; Code generation; Optimization; Runtime systems.",
         "textbooks":["Compilers: Principles, Techniques, and Tools — Aho, Lam, Sethi & Ullman (2nd ed.)"],
         "references":["Modern Compiler Implementation — Andrew Appel"]},
        {"code":"24CSC402","title":"Information Security","credits":3,
         "syllabus":"Cryptography; Network security; System security; Web security; Digital forensics; Security protocols.",
         "textbooks":["Cryptography and Network Security — William Stallings (7th ed.)"],
         "references":["Introduction to Modern Cryptography — Katz & Lindell"]},
        {"code":"24CSC4XX","title":"Elective II","credits":3,
         "syllabus":"Choose from available electives in Mathematics or Computer Science.",
         "textbooks":["Depends on chosen elective"],
         "references":[]},
        {"code":"24CSC4YY","title":"Elective III","credits":3,
         "syllabus":"Choose from available electives in Mathematics or Computer Science.",
         "textbooks":["Depends on chosen elective"],
         "references":[]},
        {"code":"24CSC481","title":"Project I","credits":2,
         "syllabus":"Individual research project under faculty supervision.",
         "textbooks":["Project-specific references"],
         "references":[]}
      ]
    },
    {
      "id": 8,
      "name": "Semester 8",
      "courses": [
        {"code":"24MAT415","title":"Advanced Topics in Mathematics","credits":4,
         "syllabus":"Algebraic topology; Differential geometry; Number theory; Or other advanced topics based on faculty expertise.",
         "textbooks":["Topic-specific textbooks"],
         "references":[]},
        {"code":"24CSC411","title":"Distributed Systems","credits":3,
         "syllabus":"Distributed system models; Communication; Synchronization; Consistency; Fault tolerance; Distributed algorithms.",
         "textbooks":["Distributed Systems — Tanenbaum & van Steen (3rd ed.)"],
         "references":["Distributed Systems: Concepts and Design — Coulouris et al."]},
        {"code":"24CSC4ZZ","title":"Elective IV","credits":3,
         "syllabus":"Choose from available electives in Mathematics or Computer Science.",
         "textbooks":["Depends on chosen elective"],
         "references":[]},
        {"code":"24CSC4WW","title":"Elective V","credits":3,
         "syllabus":"Choose from available electives in Mathematics or Computer Science.",
         "textbooks":["Depends on chosen elective"],
         "references":[]},
        {"code":"24CSC491","title":"Project II","credits":4,
         "syllabus":"Continuation of individual research project or new advanced project.",
         "textbooks":["Project-specific references"],
         "references":[]}
      ]
    },
    {
      "id": 9,
      "name": "Semester 9",
      "courses": [
        {"code":"24MAT505","title":"Research Methodology","credits":2,
         "syllabus":"Research methods in mathematics and computer science; Literature review; Technical writing; Presentation skills.",
         "textbooks":["Research Methodology — C.R. Kothari"],
         "references":[]},
        {"code":"24CSC501","title":"Advanced Algorithms","credits":3,
         "syllabus":"Advanced data structures; Parallel algorithms; Approximation algorithms; Randomized algorithms; Online algorithms.",
         "textbooks":["Randomized Algorithms — Motwani & Raghavan"],
         "references":["Approximation Algorithms — Vijay Vazirani"]},
        {"code":"24CSC5XX","title":"Specialization Course I","credits":4,
         "syllabus":"Advanced course in chosen specialization area.",
         "textbooks":["Specialization-specific"],
         "references":[]},
        {"code":"24CSC5YY","title":"Specialization Course II","credits":4,
         "syllabus":"Advanced course in chosen specialization area.",
         "textbooks":["Specialization-specific"],
         "references":[]},
        {"code":"24CSC581","title":"Dissertation I","credits":4,
         "syllabus":"Independent research leading to dissertation under faculty supervision.",
         "textbooks":["Research-specific references"],
         "references":[]}
      ]
    },
    {
      "id": 10,
      "name": "Semester 10",
      "courses": [
        {"code":"24CSC511","title":"Seminar","credits":1,
         "syllabus":"Presentation of research work and literature review in chosen area of specialization.",
         "textbooks":["Research papers and survey articles"],
         "references":[]},
        {"code":"24CSC5ZZ","title":"Specialization Course III","credits":4,
         "syllabus":"Advanced course in chosen specialization area.",
         "textbooks":["Specialization-specific"],
         "references":[]},
        {"code":"24CSC5WW","title":"Advanced Elective","credits":3,
         "syllabus":"Advanced elective course in mathematics or computer science.",
         "textbooks":["Course-specific"],
         "references":[]},
        {"code":"24CSC591","title":"Dissertation II","credits":8,
         "syllabus":"Completion of independent research and dissertation writing.",
         "textbooks":["Research-specific references"],
         "references":[]}
      ]
    }
  ]
};

// Application state
let currentView = 'home';
let currentSemester = null;
let currentCourse = null;

// DOM utilities
function createElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
}

// Find course by code across all semesters
function findCourse(courseCode) {
  for (const semester of curriculum.semesters) {
    const course = semester.courses.find(c => c.code === courseCode);
    if (course) return course;
  }
  return null;
}

// Render home view
function renderHome() {
  const container = createElement('div', 'app-container');
  const homeView = createElement('div', 'home-view');
  
  const title = createElement('h1', 'home-title', 'Integrated M.Sc. Mathematics and Computing');
  homeView.appendChild(title);
  
  const grid = createElement('div', 'semesters-grid');
  
  curriculum.semesters.forEach(semester => {
    const btn = createElement('button', 'semester-btn', semester.name);
    btn.addEventListener('click', () => {
      currentSemester = semester.id;
      currentView = 'semester';
      render();
    });
    grid.appendChild(btn);
  });
  
  homeView.appendChild(grid);
  container.appendChild(homeView);
  return container;
}

// Render semester view
function renderSemester(semesterId) {
  const semester = curriculum.semesters.find(s => s.id === semesterId);
  if (!semester) return renderHome();
  
  const container = createElement('div', 'app-container');
  const semesterView = createElement('div', 'semester-view');
  
  // Navigation header
  const navHeader = createElement('div', 'nav-header');
  const backBtn = createElement('div', 'back-btn');
  backBtn.innerHTML = '← Back to Home';
  backBtn.addEventListener('click', () => {
    currentView = 'home';
    currentSemester = null;
    render();
  });
  
  const title = createElement('h2', 'semester-title', semester.name);
  
  navHeader.appendChild(backBtn);
  navHeader.appendChild(title);
  semesterView.appendChild(navHeader);
  
  // Courses table
  const table = createElement('table', 'courses-table');
  
  const thead = createElement('thead');
  const headerRow = createElement('tr');
  headerRow.appendChild(createElement('th', '', 'Course Code'));
  headerRow.appendChild(createElement('th', '', 'Course Title'));
  headerRow.appendChild(createElement('th', '', 'Credits'));
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  const tbody = createElement('tbody');
  semester.courses.forEach(course => {
    const row = createElement('tr');
    row.addEventListener('click', () => {
      currentCourse = course.code;
      currentView = 'course';
      render();
    });
    
    const codeCell = createElement('td');
    const codeSpan = createElement('span', 'course-code', course.code);
    codeCell.appendChild(codeSpan);
    
    const titleCell = createElement('td');
    const titleSpan = createElement('span', 'course-title', course.title);
    titleCell.appendChild(titleSpan);
    
    const creditsCell = createElement('td', 'course-credits', course.credits.toString());
    
    row.appendChild(codeCell);
    row.appendChild(titleCell);
    row.appendChild(creditsCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  semesterView.appendChild(table);
  container.appendChild(semesterView);
  return container;
}

// Render course detail view
function renderCourse(courseCode) {
  const course = findCourse(courseCode);
  if (!course) return renderHome();
  
  const container = createElement('div', 'app-container');
  const courseDetail = createElement('div', 'course-detail');
  
  // Navigation header
  const navHeader = createElement('div', 'nav-header');
  const backBtn = createElement('div', 'back-btn');
  backBtn.innerHTML = '← Back to Semester';
  backBtn.addEventListener('click', () => {
    currentView = 'semester';
    currentCourse = null;
    render();
  });
  navHeader.appendChild(backBtn);
  courseDetail.appendChild(navHeader);
  
  // Course header
  const courseHeader = createElement('div', 'course-header');
  const courseCodeEl = createElement('div', 'course-detail-code', course.code);
  const courseTitleEl = createElement('h1', 'course-detail-title', course.title);
  const creditsBadge = createElement('span', 'course-credits-badge', `${course.credits} Credits`);
  
  courseHeader.appendChild(courseCodeEl);
  courseHeader.appendChild(courseTitleEl);
  courseHeader.appendChild(creditsBadge);
  courseDetail.appendChild(courseHeader);
  
  // Course content
  const courseContent = createElement('div', 'course-content');
  
  // Syllabus section
  const syllabusTitle = createElement('h3', 'section-title', 'Syllabus');
  courseContent.appendChild(syllabusTitle);
  const syllabusContent = createElement('div', 'syllabus-content', course.syllabus);
  courseContent.appendChild(syllabusContent);
  
  // Textbooks section
  const textbooksSection = createElement('div', 'books-section');
  const textbooksTitle = createElement('h3', 'section-title', 'Text Books');
  textbooksSection.appendChild(textbooksTitle);
  
  if (course.textbooks && course.textbooks.length > 0) {
    const textbooksList = createElement('ul', 'books-list');
    course.textbooks.forEach(book => {
      const listItem = createElement('li', '', book);
      textbooksList.appendChild(listItem);
    });
    textbooksSection.appendChild(textbooksList);
  } else {
    const emptyState = createElement('div', 'empty-state', 'No textbooks specified');
    textbooksSection.appendChild(emptyState);
  }
  
  courseContent.appendChild(textbooksSection);
  
  // References section
  const referencesSection = createElement('div', 'books-section');
  const referencesTitle = createElement('h3', 'section-title', 'Reference Books');
  referencesSection.appendChild(referencesTitle);
  
  if (course.references && course.references.length > 0) {
    const referencesList = createElement('ul', 'books-list');
    course.references.forEach(book => {
      const listItem = createElement('li', '', book);
      referencesList.appendChild(listItem);
    });
    referencesSection.appendChild(referencesList);
  } else {
    const emptyState = createElement('div', 'empty-state', 'No reference books specified');
    referencesSection.appendChild(emptyState);
  }
  
  courseContent.appendChild(referencesSection);
  courseDetail.appendChild(courseContent);
  container.appendChild(courseDetail);
  return container;
}

// Main render function
function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  
  let content;
  switch (currentView) {
    case 'semester':
      content = renderSemester(currentSemester);
      break;
    case 'course':
      content = renderCourse(currentCourse);
      break;
    default:
      content = renderHome();
      break;
  }
  
  app.appendChild(content);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  render();
});