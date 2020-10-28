import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Skeleton } from "@material-ui/lab";

const FeedSkeleton = () => {
  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-between mt-2 pt-3"
        style={style.border}
      >
        <div className="d-flex align-items-center">
          <Skeleton variant="circle">
            <Avatar />
          </Skeleton>
          <div className="ml-3 d-flex flex-column">
            <Skeleton width="100%">
              <Typography>Expedita quibusdam at impedit dolorum.</Typography>
            </Skeleton>
            <Skeleton width="100%">
              <Typography>Lorem ipsum dolor sit amet,</Typography>
            </Skeleton>
          </div>
        </div>
        <div className="d-flex align-items-center ml-4 p-2">
          <Skeleton width="100%" height="50px">
            <Typography>Lorem ipsum</Typography>
          </Skeleton>
        </div>
      </div>
      <div className="row  mt-5 mb-5">
        <div className="col-md-8">
          <Skeleton variant="rect" width="100%">
            <div style={{ paddingTop: "30%" }} />
          </Skeleton>
        </div>
        <div className="col-md-4 d-flex align-items-end justify-content-end">
          <div className="d-flex align-items-end justify-content-end">
            <div className="ml-3">
              <Skeleton width="100%" height="50px">
                <Typography>Lorem ipsum</Typography>
              </Skeleton>
            </div>
            <div className="ml-3">
              <Skeleton width="100%" height="50px">
                <Typography>Lorem ipsum</Typography>
              </Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedSkeleton;

const style = {
  border: {
    borderTop: "1px solid #D1D1D1",
  },
};
