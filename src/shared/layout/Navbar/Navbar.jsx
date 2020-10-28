import React, { useContext, useEffect, useState } from "react";
import { Authentication } from "../../../auth/Authentication";
import AuthenticatedNav from "./AuthNav/AuthNav";
import NotAuthenticatedNav from "./NoAuthNav/NoAuthNav";

const Navbar = () => {
  const { navAuth } = useContext(Authentication);

  return navAuth ? <AuthenticatedNav /> : <NotAuthenticatedNav />;
};

export default Navbar;
