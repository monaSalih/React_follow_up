import { react, Component } from "react";
import axios from "axios";

export default class Read extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    // console.log("componentDidMount");
    const response = await axios.get(
      "http://localhost/React_follow_up/Crud/backend/read.php"
    );
    console.log(response,"response");
    const item = response.data;
    // console.log(item,"item");
    this.setState({
      data: item,
    });
  }

  render() {
    console.log(this.state.data,"item");
    return (
      <>
        <p>
          {this.state.data.map((elem) => {
            return (
                <ul>
                    <li>The user name is: {elem.user_name} and his number {elem.phone} and he live in {elem.address}</li>
                    </ul>
            )
          })}
        </p>
      </>
    );
  }
}
