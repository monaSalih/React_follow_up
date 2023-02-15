import {react,Component} from 'react';


export default class Read extends Component{

    
    render(){
        console.log(this.props.item,"item");
        return(
            <>
            <p>
                {this.props.item.user_name}
            </p>
            </>
        )
    }
}