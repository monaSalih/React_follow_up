import {react,Component} from 'react';
import axios from 'axios';
import AllData from "./AllData";
import UpdateData from "./UpdateData";


export default class Read extends Component{

    constructor(){
        super()
        this.state={
          data:[],
          selectedInfo:{},
          showUpdateForm:false

        }}

    async componentDidMount(){
        // console.log("componentDidMount");
        const response=await axios.get('http://localhost/React_follow_up/Crud/backend/read.php');
        // console.log(response,"response");
        const item=response.data;
        // console.log(item,"item");
        this.setState({
            data:item
        })}
            
        // update Date
        updateInfo=async(idUser)=>{
            // console.log(idUser,"updateInfo");
        await    this.setState({
                showUpdateForm:true
            })
            let choosenData=this.state.data.find(indx=>{
                return indx.id== idUser
            })
            // console.log(choosenData,"choosenData id");
            this.setState({
                selectedInfo:choosenData,}) }
                /////////////////////////////// form update
              saveInfo=async(e)=>{
                e.preventDefault();
                console.log("hello");
                    let user_name=e.target.user_name.value
                    let phone=e.target.phone.value
                    let address=e.target.address.value
                    let id= this.state.selectedInfo.id
                    // console.log(user_name,"user name"," phone:",phone,"address:",address," id:",id);

             let update=  await  axios.post(`http://localhost/React_follow_up/Crud/backend/update.php?user_name=${user_name}&phone=${phone}&address=${address}&id=${id}`)
             console.log(update,"update dataa");
             const response=await axios.get('http://localhost/React_follow_up/Crud/backend/read.php');
             this.setState({
          showUpdateForm:false,
                data:response.data
             })
              }  
            //   Delete item 
            deleteItem=async(idUser)=>{
                    console.log(idUser,"idUser delete");
                    
            let delete_inf=    await axios.post(`http://localhost/React_follow_up/Crud/backend/delete.php?id=${idUser}`)
            console.log(delete_inf);
            const response=await axios.get('http://localhost/React_follow_up/Crud/backend/read.php');
            this.setState({
                
               data:response.data
            })

            }

    render(){
        // console.log(this.state.data,"item");
        return(
            <>
             <AllData allData={this.state.data} updateInfo={this.updateInfo} deleteItem={this.deleteItem}/>

             {this.state.showUpdateForm&& <UpdateData selectedInfo={this.state.selectedInfo} saveInfo={this.saveInfo}/>}
            </>
        )
    }
}