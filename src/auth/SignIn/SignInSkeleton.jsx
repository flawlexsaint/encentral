import React from "react";
import { Skeleton } from "@material-ui/lab";

const SignInSkeleton = () => {
  return (
    <div>
      <Skeleton variant="rect" width="100%" />
      <Skeleton variant="rect" width="100%">
        <div style={{ paddingTop: "30%" }} />
      </Skeleton>
      <Skeleton variant="rect" width="100%" />
    </div>
  );
};

export default SignInSkeleton;
