import {react, Component} from 'react';
import axios from 'axios';
import Read from './Component.js/Read';
export default class App extends Component{

  constructor(){
    super()
    this.state={
      data:[],
    }
    // console.log("constructor");
  }
async componentDidMount(){
// console.log("componentDidMount");
const response=await axios.get('http://localhost/React_follow_up/Crud/backend/read.php');
// console.log(response,"response");
const item=response.data;
// console.log(item,"item");
this.setState({
  data:item
})

}



  render(){
    // {console.log(this.state.data,"data setSate")}
    return(
      <>
      {this.state.data.map(elem=>{
        return(
          <Read item={elem}/>

        )
      })

      }
      </>
    )
  }
}