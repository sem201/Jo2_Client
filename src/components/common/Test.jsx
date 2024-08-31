import React,{useState,useEffect} from "react";
import apiCall from "../../api/Apiserver";
import { useReissueToken } from "../../api/ApiReissue";

const Test =()=>{

    const [token, setToken] = useState(localStorage.getItem("accessToken"));
    const { getReissueToken } = useReissueToken();
    const fetchData = async()=>{
        try{
            const response = await apiCall('/api/v1/contents/main-sentence','GET',null,token);
            console.log(response);
        }
        catch(error){
            console.log("우울증 점수 api 에러 ",error)
            if(error.response.status === 401){
                console.log("리이슈 시도");
                getReissueToken( setToken);
            }
        }
    }
    useEffect(() => {
        if (token) {
            fetchData();
        }
    }, [token]);
    return(
        <>
            <button onClick={fetchData}>api 호출</button>
        </>
    )
}

export default Test;