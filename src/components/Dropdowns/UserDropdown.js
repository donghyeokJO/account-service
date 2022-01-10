import React, { useEffect, useState } from "react";
import { createPopper } from "@popperjs/core";
import profile from 'assets/img/profile.png';
import API_URLS from "constants/api";
import axios from 'axios';


const UserDropdown = () => {
  //functions
  const [user_nm, setuser_nm] = useState(null)

  let token = window.localStorage.getItem('token');

  useEffect(() => {
    axios.get(
      API_URLS.USER_ONE,
      {
        "headers": {
          "Authorization": token
        }
      }
    ).then(function(response){
      if(response.data.result){
        // console.log(response.data.result[2].USER_NM)
        setuser_nm(response.data.result[2].USER_NM)
        // return user_name
      }
    }).catch(function(error){
      alert("로그인 세션이 만료되었습니다. 다시 로그인 해 주세요.");
      window.location.href = "/"
    })
  }, [])

  const LogOut = () => {
      // event.preventDefault()
      localStorage.removeItem('token');

      window.location.href = "/"
  }
  // console.log(props)

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              // src={require("assets/img/profile.png").default}
              src={profile}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <div
          href=""
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          {user_nm} 님
        </div>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          href="#"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          내 정보
        </a>
        <a
          href="#"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          문의하기
        </a>
        <a
          href="#"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={LogOut}
        >
          LOG OUT
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
