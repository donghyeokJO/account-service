import React, {useEffect, useState} from "react";
import API_URLS from "constants/api";
import axios from 'axios';

// components

import CardStats from "components/Cards/CardStats.js";



export default function HeaderStats() {
  let token = window.localStorage.getItem('token');
  // RR
  const [RR_WRITE_DONE, setRR_WRITE_DONE] = useState(null)
  const [RR_WRITE_YET, setRR_WRITE_YET] = useState(null)
  const [RR_ASSIGNED_DONE, setRR_ASSIGNED_DONE] = useState(null)
  const [RR_ASSIGNED_YET, setRR_ASSIGEND_YET] = useState(null)

  useEffect(() => {
      axios.get(
        API_URLS.RR_USER,
        {
          "headers": {
            "Authorization": token
          }
        }
      ).then(function(response){
        if(response.data.result){
          setRR_WRITE_DONE(response.data.result.WROTE_DONE);
          setRR_WRITE_YET(response.data.result.WROTE_YET);
          setRR_ASSIGNED_DONE(response.data.result.ASSIGNED_DONE);
          setRR_ASSIGEND_YET(response.data.result.ASSIGNED_YET)
        }
      }).catch(function(error){
        alert("로그인 세션이 만료되었습니다. 다시 로그인 해 주세요.");
        window.location.href = "/"
      })
  }, []);

  const RR_WRITE = RR_WRITE_DONE + RR_WRITE_YET
  const RR_ASSIGNED = RR_ASSIGNED_DONE + RR_ASSIGNED_YET

  // DR
  const [DR_WRITE_DONE, setDR_WRITE_DONE] = useState(null)
  const [DR_WRITE_YET, setDR_WRITE_YET] = useState(null)
  const [DR_ASSIGNED_DONE, setDR_ASSIGNED_DONE] = useState(null)
  const [DR_ASSIGNED_YET, setDR_ASSIGEND_YET] = useState(null)

  useEffect(() => {
    axios.get(
      API_URLS.DR_USER,
      {
        "headers": {
          "Authorization": token
        }
      }
    ).then(function(response){
      if(response.data.result){
        setDR_WRITE_DONE(response.data.result.WROTE_DONE);
        setDR_WRITE_YET(response.data.result.WROTE_YET);
        setDR_ASSIGNED_DONE(response.data.result.ASSIGNED_DONE);
        setDR_ASSIGEND_YET(response.data.result.ASSIGNED_YET)
      }
    }).catch(function(error){
      alert("로그인 세션이 만료되었습니다. 다시 로그인 해 주세요.");
      window.location.href = "/"
    })
  }, []);

  const DR_WRITE = DR_WRITE_DONE + DR_WRITE_YET
  const DR_ASSIGNED = DR_ASSIGNED_DONE + DR_ASSIGNED_YET
  // ER
  const [ER_WRITE_DONE, setER_WRITE_DONE] = useState(null)
  const [ER_WRITE_YET, setER_WRITE_YET] = useState(null)
  const [ER_ASSIGNED_DONE, setER_ASSIGNED_DONE] = useState(null)
  const [ER_ASSIGNED_YET, setER_ASSIGEND_YET] = useState(null)

  useEffect(() => {
  axios.get(
    API_URLS.ER_USER,
    {
      "headers": {
        "Authorization": token
      }
    }
  ).then(function(response){
    if(response.data.result){
      console.log(response.data.result)
      setER_WRITE_DONE(response.data.result.WROTE_DONE);
      setER_WRITE_YET(response.data.result.WROTE_YET);
      setER_ASSIGNED_DONE(response.data.result.ASSIGNED_DONE);
      setER_ASSIGEND_YET(response.data.result.ASSIGNED_YET)
    }
  }).catch(function(error){
    alert("로그인 세션이 만료되었습니다. 다시 로그인 해 주세요.");
    window.location.href = "/"
    })
  }, []);
  

  const ER_WRITE = ER_WRITE_DONE + ER_WRITE_YET
  const ER_ASSIGNED = ER_ASSIGNED_DONE + ER_ASSIGNED_YET

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="내가 작성한 건별비용집행서(RR)"
                  totalNum={RR_WRITE}
                  doneNum={RR_WRITE_DONE}
                  doneNumColor="text-emerald-500"
                  yetNum={RR_WRITE_YET}
                  yetNumColor= "text-red-500"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="내가 작성한 개인비용청구서(DR)"
                  totalNum={DR_WRITE}
                  doneNum={DR_WRITE_DONE}
                  doneNumColor="text-emerald-500"
                  yetNum={DR_WRITE_YET}
                  yetNumColor= "text-red-500"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="내가 작성한 지급결의서(ER)"
                  totalNum={ER_WRITE}
                  doneNum={ER_WRITE_DONE}
                  doneNumColor="text-emerald-500"
                  yetNum={ER_WRITE_YET}
                  yetNumColor= "text-red-500"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="relative bg-Green-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="내가 확인해야 하는 건별비용집행서(RR)"
                  totalNum={RR_ASSIGNED}
                  doneNum={RR_ASSIGNED_DONE}
                  doneNumColor="text-emerald-500"
                  yetNum={RR_ASSIGNED_YET}
                  yetNumColor= "text-red-500"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="내가 확인해야 하는 개인비용청구서(DR)"
                  totalNum={DR_ASSIGNED}
                  doneNum={DR_ASSIGNED_DONE}
                  doneNumColor="text-emerald-500"
                  yetNum={DR_ASSIGNED_YET}
                  yetNumColor= "text-red-500"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="내가 확인해야 하는 지급결의서(ER)"
                  totalNum={ER_ASSIGNED}
                  doneNum={ER_ASSIGNED_DONE}
                  doneNumColor="text-emerald-500"
                  yetNum={ER_ASSIGNED_YET}
                  yetNumColor= "text-red-500"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
