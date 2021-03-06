import React, {useState} from "react";
import axios from 'axios';
import API_URLS from "constants/api";
import { pwdEncrypt } from "util/encrpyt";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  let history = useHistory();
  let token = window.localStorage.getItem("token");

  if(token){
    axios.get(
      API_URLS.USER_ONE,
      {
        "headers": {
          "Authorization": token
        }
      }
    ).then(function(response){
      if(response.data.result){
        history.push('/landing')
      }
    }).catch(function(error){
    })
  }




  const [USER_ID, SET_USER_ID] = useState("");
  const [USER_PASSWORD, SET_USER_PASSWORD] = useState("");

  const USER_ID_HANDLER = (event) => {
    SET_USER_ID(event.currentTarget.value)
  }

  const USER_PASSWORD_HANDLER = (event) => {
    SET_USER_PASSWORD(event.currentTarget.value)
  }

  const handleKeyPress = e => {
    if(e.key === "Enter"){
      onSubmit(e)
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if(
      USER_ID === "" |
      USER_PASSWORD === "" 
    ) return alert('모든 항목을 입력해주세요.')
    
    axios.post(
      API_URLS.USER_LOGIN,
      {
        "USER_ID": USER_ID,
        "USER_PW": pwdEncrypt(USER_PASSWORD).encrypted_string
      }
    ).then(function(response){
      // console.log(response);
      if(response.status === 200){
        // console.log(response.data.result.token)
        window.localStorage.setItem('token', response.data.result.token);
      
        history.push('/landing');
      }
    })
    .catch(function(error){
      // console.log(error.response.status)
      if(error.response.status === 404){
        return alert('회원정보를 찾을 수 없습니다.')
      }
      else{
        return alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.")
      }
    });
    
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      ID
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="ID"
                      name = "USER_ID"
                      value = {USER_ID}
                      onChange={USER_ID_HANDLER}
                      onKeyPress={handleKeyPress}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      비밀번호
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="비밀번호"
                      name = "USER_PASSWORD"
                      value = {USER_PASSWORD}
                      onChange={USER_PASSWORD_HANDLER}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                  {/* <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="check"
                        onChange={e => {
                          changeHandler(e.currentTarget.checked, 'check');
                        }}
                        checked={checkedInputs.includes('check') ? true : false}
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        자동 로그인
                      </span>
                    </label>
                  </div> */}

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={onSubmit}
                    >
                      로그인
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>비밀번호를 잊으셨나요?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>회원가입하기</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
