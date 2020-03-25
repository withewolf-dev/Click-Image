import React,{Component} from 'react';
import './App.css';
import Content from './Content';
import NeXt from './NeXt';
import Frames from './Frame'

class App extends Component {


  constructor(props) {
    super(props)

    this.state = {
         pictures: ''
    }
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(res => res.json())
  .then(res=>{
    // this.setState({
    //   pictures: res
    // })
  console.log(res)
  })
}



  render(){
  return (
    <div className="App">
            <Frames/>
            <Content picture={this.state.pictures}/>
            <NeXt change={this.change} />  
    </div>
  );
  }
}

export default App;
