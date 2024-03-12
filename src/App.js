// import './App.css';
// import React, { useState } from 'react';

// const CountApp = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>You CLicked{count}times</p>
//       <button onClick={()=> setCount(count + 1)}>Click Me</button>
//     </div>
//   )
// }
// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// const Comp = () => {
//   const [count, setCount] = useState(0);

//   useEffect = (() => {
//     document.title = `Clicked by ${count} times`;
//   })(count);

//   const increamnet = () => {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Comments:{count}</h1>
//       <button onClick={increamnet}>Click</button>
//     </div>
//   );
// }
// export default Comp;
// const element = <Comp></Comp>
// ReactDOM.render(element, document.getElementById("root"));

// export default CountApp

// NewEmployee.js

// import React, { useState } from 'react';

// function NewEmployee() {
//   const [employee, setEmployeeData] = useState({ Id: "", Name: " ", Location: "", Salary: "" });

//   function changeEmployeeInfo(e) {
//     const { name, value } = e.target;
//     setEmployeeData({ ...employee, [name]: value });
//   }

//   return (
//     <div>
//       <h1>Welcome to Employee Component</h1>
//       <p>
//         <label>Employee ID:
//           <input type='text' name='Id' value={employee.Id} onChange={changeEmployeeInfo}></input>
//         </label>
//       </p>
//       <p>
//         <label>Employee Name:
//           <input type='text' name='Name' value={employee.Name} onChange={changeEmployeeInfo}></input>
//         </label>
//       </p>
//       <p>
//         <label>Employee Location:
//           <input type='text' name='Location' value={employee.Location} onChange={changeEmployeeInfo}></input>
//         </label>
//       </p>
//       <p>
//         <label>Employee Salary:
//           <input type='text' name='Salary' value={employee.Salary} onChange={changeEmployeeInfo}></input>
//         </label>
//       </p>
//       <SalaryComp onSalaryChange={changeEmployeeInfo} Salary={employee.Salary}></SalaryComp>
//       <p>
//         Employee ID is: <b>{employee.Id}</b>, Name is: <b>{employee.Name}</b>,
//         Location is: <b>{employee.Location}</b>, and Salary is: <b>{employee.Salary}</b>,
//       </p>
//     </div>
//   );
// }

// const SalaryComp = ({ onSalaryChange, Salary }) => {
//   function changeSalary(e) {
//     onSalaryChange(e);
//   }
//   return (
//     <div style={{ border: "3px dotted red" }}>
//       <h1>Wellcome to  Salary Component</h1>
//       <p>
//         <label>Employee Salary :
//           <input type='text' name='Salary' value={Salary} onChange={changeSalary}></input>
//         </label>
//       </p>
//     </div>
//   )
// }

// export default NewEmployee;

// import './App.css';
// import Home from './Home';
// import About from './About';
// import Portfolio from './Portfolio';
// import Blogs from './Blogs';
// import Contact from './Contact';
// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from './Layout';

// const App = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<Layout />}>
//                     <Route index element={<Home />} />
//                     <Route path='about' element={<About />} />
//                     <Route path='portfolio' element={<Portfolio />} />
//                     <Route path='blogs' element={<Blogs />} />
//                     <Route path='contact' element={<Contact />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default App;
// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from './Layout';
// import Home from './Home';
// import About from './About';
// import Portfolio from './Portfolio';
// import Blogs from './Blogs';
// import Contact from './Contact';
// import './App.css';

// const App = ()=> {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Home />} />
//                     <Route path="about" element={<About />} />
//                     <Route path="portfolio" element={<Portfolio />} />
//                     <Route path="blogs" element={<Blogs />} />
//                     <Route path="contact" element={<Contact />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<App />);

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Blogs from './Blogs';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Layout from './Layout';
// import ReactDOM from 'react-dom';




// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="about" element={<About />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);



