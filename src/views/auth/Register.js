import React, {useState} from "react";
export default function Register() {
  const [USER_ID, SET_USER_ID] = useState("");
  const [USER_PASSWORD, SET_USER_PASSWORD] = useState("");
  const [CONFIRM_PASSWORD, SET_CONFIRM_PASSWORD] = useState("");
  const [COMPANY_NUM, SET_COMPANY_NUM] = useState("");
  const [CORPORATION, SET_CORPORATION] = useState("");
  const [USER_POSITION, SET_USER_POSITION] = useState("");
  const [USER_NM, SET_USER_NM] = useState("");

  const USER_ID_HANDLER = (event) => {
    SET_USER_ID(event.currentTarget.value)
  }

  const USER_PASSWORD_HANDLER = (event) => {
    SET_USER_PASSWORD(event.currentTarget.value)
  }

  const CONFIRM_PASSWORD_HANDLER = (event) => {
    SET_CONFIRM_PASSWORD(event.currentTarget.value)
  }

  const COMPANY_NUM_HANDLER = (event) => {
    SET_COMPANY_NUM(event.currentTarget.value)
  }

  const CORPORATION_HANDLER = (event) => {
    SET_CORPORATION(event.currentTarget.value)
  }

  const USER_POSITION_HANDLER = (event) => {
    SET_USER_POSITION(event.currentTarget.value)
  }

  const USER_NM_HANDLER = (event) => {
    SET_USER_NM(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(USER_PASSWORD)
    if(USER_PASSWORD !== CONFIRM_PASSWORD) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
    }
  }


  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
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
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      비밀번호 확인
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="비밀번호 확인"
                      name = "CONFIRM_PASSWORD"
                      value = {CONFIRM_PASSWORD}
                      onChange={CONFIRM_PASSWORD_HANDLER}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      사업자 번호
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="사업자 번호"
                      name = "COMPANY_NUM"
                      value = {COMPANY_NUM}
                      onChange={COMPANY_NUM_HANDLER}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      기업 명
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="기업 명"
                      name = "CORPORATION"
                      value = {CORPORATION}
                      onChange={CORPORATION_HANDLER}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      이름
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="홍길동"
                      name = "USER_NM"
                      value = {USER_NM}
                      onChange={USER_NM_HANDLER}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      소속 및 직위
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="영업팀/대리"
                      name = "USER_POSITION"
                      value = {USER_POSITION}
                      onChange={USER_POSITION_HANDLER}
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          개인정보 이용 약관
                        </a>
                        {" "}에 동의합니다.
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      id = "register-btn"
                      onClick={onSubmit}
                    >
                      회원가입하기
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
