import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import StudentList from './components/StudentList';

class App extends Component{
  render(){
    return <div>
       <StudentList/>
    </div>
  }
}

export default App;
