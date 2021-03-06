import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import {AdminNavbar} from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import RRInput from "views/input/RR";


export default function Input() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar/>
        {/* Header */}
        Header
        {/* <HeaderStats /> */}
        {/* <div className="px-4 md:px-10 mx-auto w-full -m-24"> */}
          <Switch>
            <Route path="/input" component={RRInput}/>
            <Route path="/input/rr" component={RRInput}/>
            {/* <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />*/}
          </Switch>
          <FooterAdmin />
        {/* </div> */}
      </div>
    </>
  );
}
