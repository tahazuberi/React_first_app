import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './component/Table';

ReactDOM.render(
  <React.StrictMode>
    <Table/>
    {/* <Datadisplay/> */}
  </React.StrictMode>,
  document.getElementById('root')
);


// var react = require("react");
// var ReactDOM require("react-dom");
// import react from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(<p>My Name is Salman Siddiqui</p>,document.getElementById("root"));

// var react = require("react");
// var ReactDOM= require("react-dom");
// ReactDOM.render(<p>My name is Salman Siddiqui here</p>,document.getElementById("root"));


// Element JSX without
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const elements = <h1 className='test'>Hello Salman Siddiqui</h1>
// const newelements = <h1 className='test'>How Are You?</h1>
// ReactDOM.render(elements,document.getElementById("root"));
// ReactDOM.render(newelements,document.getElementById("app"));


// Signle id both element call.

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const elements =(
//     <div>
//         <h1>Salman CEO</h1>
//     </div>
// );
// ReactDOM.render(elements,document.getElementById("root"));


// Using JSX

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const element = React.createElement("h1",null,"React is my Best Topic");
// ReactDOM.render(element,document.getElementById("root"));



// using JSX multiple value in single id
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const element = React.createElement("div",{className:"test"},
// React.createElement("h1",null,"Wellcome to React JS Multiple Class"),
// React.createElement("h1",null,"Thank your of for this react helping code"),

// );
// ReactDOM.render(element,document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// function EmployeeInfo(employee) {
//     return <div>
//         <p>Employee ID: <b>{employee.Id}</b></p>
//         <p>Employee Name: <b>{employee.Name}</b></p>
//         <p>Employee Gender: <b>{employee.Gender}</b></p>
//         <p>Employee Age: <b>{employee.Age}</b></p>

//         <DepartmentInfo deptname={employee.deptname}
//             headname={employee.headname}>
//         </DepartmentInfo>
//     </div>

// }
// const DepartmentInfo = (dept) => {
//     return <div>
//         <p>Employee Name:{dept.deptname}</p>
//         <p>Employee Head:{dept.headname}</p>
//     </div>
// }
// const element = <EmployeeInfo Id="101" Name="Salman" Gender="Male" Age="23" deptname="PC" headname="Manager"></EmployeeInfo>
// ReactDOM.render(element, document.getElementById("root"));


// import React from 'react';
// import ReactDOM from 'react-dom';

// class Employee extends React.Component {
//     constructor(props){
//         super(props)
//         console.log(this.props)
//     }
//     render() {
//         return <div>
//             <p><label>Employee ID..! <b>{this.props.Id}</b></label></p>
//             <p><label>Employee Name..! <b>{this.props.Name}</b></label></p>
//             <p><label>Employee Email..! <b>{this.props.Email}</b></label></p>
//             <p><label>Employee Password..! <b>{this.props.Password}</b></label></p>
//             <p><label>Employee Confirm..! <b>{this.props.Confirm}</b></label></p>

//             <Department DepId={this.props.Id} DepName={this.props.DepName} DepEmail={this.props.DepEmail} DepPassword={this.props.DepPassword} DepConfirm={this.props.DepConfirm}></Department>

//         </div>
//     }
// }
// class Department extends React.Component {
//     constructor(props){
//         super(props)
//         console.log(this.props)
//     }
//     render() {
//         return <div>
//             <p><label>Department DepID..! <b>{this.props.DepId}</b></label></p>
//             <p><label>Department DepName..! <b>{this.props.DepName}</b></label></p>
//             <p><label>Department DepEmail..! <b>{this.props.DepEmail}</b></label></p>
//             <p><label>Department DepPassword..! <b>{this.props.DepPassword}</b></label></p>
//             <p><label>Department DepConfirm..! <b>{this.props.DepConfirm}</b></label></p>

//         </div>
//     }
// }
// const element = <Employee Id="1" Name="Salman" Email="salman@gmail.com" Password="Admin123" Confirm="123" DepId="2" DepName="Basit" DepEmail="basit@gmail.com" DepPassword="Admin12333" DepConfirm="1231" ></Employee>
// ReactDOM.render(element, document.getElementById("root"));

// Not Use State

// import React from 'react';
// import ReactDOM from 'react-dom';

// class Employee extends React.Component{
//     count=0;
//     addEvent=()=>{
//      this.count = this.count+1;
//     //  alert("Hello world" + this.count);
//     }
//     render(){
//         return <div>
//             <h1>Employee</h1>
//             <button onClick={this.addEvent}>Click Now</button>
//             <label>Click on Button<b>{this.count}</b></label>

//         </div>
//     }
// }
// const element=<Employee></Employee>
// ReactDOM.render(element,document.getElementById("root"));

// Use State

// import React from 'react';
// import ReactDOM from 'react-dom';

// class Employee extends React.Component{

//     state={count:0};
//     addEvent=()=>{
//      this.setState({count:this.state.count+1})
//     }
//     render(){
//         return <div>
//          <h1>Employee Count Data</h1>
//          <button onClick={this.addEvent}>Click Now</button>
//          <label>Clcik On Button Count<b>{this.state.count}</b></label>
//         </div>
//     }
// }

// const element = <Employee></Employee>
// ReactDOM.render(element,document.getElementById("root"));


// import React from 'react';
// import ReactDOM from 'react-dom';

// class CountChar extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             message: ""
//         }
//     }
//     render() {
//         return <div>
//             <h1>Wellcome to count charactor Component</h1>
//             <p>
//                 <label>Enter Message: <input type='text' onChange={e => this.onMessageChange(e.target.value)}></input>
//                 </label>

//             </p>
//             <p><label>{this.state.message}</label></p>
//         </div>
//     }

//     onMessageChange(text) {
//         this.setState({ message: 'Message has' + text.length + 'number of char' })
//     }
// }
// const element = <CountChar></CountChar>
// ReactDOM.render(element, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";
// import App from './App';
// import Card from "./components/Card";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Card />
//   </React.StrictMode>

// );

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';

// const ElementComp = () => {
//   const [count, setCount] = useState(0);

//   useEffect = (() => {
//     document.title = `Clicked  ${count} times`;

//   }, [count]);

//   const incre = () => {
//     setCount(count + 1)
//   };
//   return (
//     <div>
//       <h1>Comment:{count}</h1>
//       <button onClick={incre}>Increatment</button>
//     </div>
//   );
// }

// const element = <ElementComp></ElementComp>
// ReactDOM.render(element, document.getElementById("root"));





