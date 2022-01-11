import React, {useEffect, useState} from "react";
import API_URLS from "constants/api";
import axios from 'axios'

export default function RRInput(){
    let token = window.localStorage.getItem('token');

    const [loading, setLoading] = useState(true);
    const [UserInfo, setUserInfo] = useState(null);

    useEffect(() => {
        axios.get(
            API_URLS.USER_ONE,
        {
            "headers": {
              "Authorization": token
            }
        }).then(function(response){
            setUserInfo(response.data.result[2]);
            setLoading(false);
        })
    },[])

    
    if(loading){
        return <div>loading...</div>
    }
    return (
        <>
        <div className="relative md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                    건별비용집행요청서(RR)
                </span>
                <hr className="my-4 md:min-w-full" />
                <div class="mb-3 pt-0">
                    <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
                        법인명
                    </h6>
                </div>
                <div class="relative flex w-full flex-wrap items-stretch mb-3">
                    <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <i class="fas fa-lock"></i>
                    </span>
                    <input type="text" placeholder="Regular Input" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" readOnly value={UserInfo.USER_CORPORATION.CORPORATION}/>
                </div>
            </div>
        </div>
        </>
    )
}
