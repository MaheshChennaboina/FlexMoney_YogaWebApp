import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();


function UserContextProvider(props){

      const [login,setLogin] = useState(false)
      const [uemail,setUEmail] = useState("")
      const [subscribe,setSubscribe] = useState(false)
      const [already,setAlready] = useState()
      // eslint-disable-next-line no-template-curly-in-string
      const url = "mysql://${{root}}:${{jYmv8jQ3XhujJbyGoMU5}}@${{containers-us-west-167.railway.app}}:${{7156}}/${{railway}}"
      const userLoginStatus = (message)=>
      {
            setLogin(message);
      }
      const userEmail= (data)=>
      {
            setUEmail(data);
      }
      const subscribeHandler = (data)=>{
            setSubscribe(data)
      }
      const alreadyUser = (data)=>{
            setAlready(data)
      }
      return(
            <UserContext.Provider value={{login,uemail,userLoginStatus,userEmail,subscribe,subscribeHandler,already,alreadyUser,url}}>
                  {props.children}
            </UserContext.Provider>
      )
}
export default UserContextProvider





