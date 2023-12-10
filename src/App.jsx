import './App.css';
import React ,{Component} from "react";
import Header  from './Components/header.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx'
class App extends Component{
  render(){
      return (
        <div className="APP">
          <Header></Header>
          {/* <Home></Home> */}
          <About></About>
        </div>
      )

  }

}
export default App