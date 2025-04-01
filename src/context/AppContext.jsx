import { createContext, useEffect, useState } from "react";
import { coaches } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = "$"
    // accessing backend url from .env file
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    // statevariable for maintaining all coaches data from backen
    const [coaches,setCoaches] = useState([]);

    // statevariable for storing token and setting the token
    const [token,setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):false);
    // jb user logged in h to vo logged in rhna chaiye even after refresh thus set this token property from localstorgae

    // state variable for holding the useer profile details to call an api "update-profile" to update
    const [userData,setUserData] = useState(false);

    // function for calling/getting all coaches data from backend
    const getCoachesData = async() => {

        try {

            const {data} = await axios.get(backendUrl+"/api/coach/list");
            if(data.success){
                setCoaches(data.coaches);
            }else{
                toast.error(data.msg);

            }

            
        } catch (error) {
            toast.error(error.message);
        }

    }

    // function for loading the user profile data(hmesa chlna chaiye jb profile load ho thus useeffect me daalenge)
    const loadUserProfileData = async() =>{

        try {

            const {data} = await axios.get(backendUrl+"/api/user/get-profile",{headers:{token}}); //token hmare pass available h as a statevariable yha pr

            if(data.success){
                setUserData(data.userData); //piche se hmne userData bheja h as a response usko hmare state variable ke userdata me set krdia

            }else{
                toast.error(data.msg);
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }

    }

    const value={
        coaches,
        getCoachesData,
        currencySymbol,
        token,
        setToken,
        backendUrl,
        userData,
        setUserData,
        loadUserProfileData
    }

    useEffect(()=>{
        getCoachesData();
    },[]);

    useEffect(()=>{

        if(token){
            // agr token h to get profile kro
            loadUserProfileData();
        }else{
            //userdata ko clear krdo
            setUserData(false);
        }

    },[token]);

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;