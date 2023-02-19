import { react, Component } from "react";


export default class AllData extends Component {

  
  render() {
    // console.log(this.props.allData,"all data ");
    return (
      <>
       {this.props.allData.map((elem) => {
            // {console.log(elem.id,"elem id ")}
          return (
            <ul>
              <li>
                The user name is: {elem.user_name} and his number {elem.phone}
                and he live in {elem.address}
              </li>
              <button onClick={()=>this.props.updateInfo(elem.id)}>
                Update
              </button>
              <button onClick={()=>this.props.deleteItem(elem.id)}>
                Delete
              </button>
            </ul>
          );
        })}

      </>
    );
  }
}
