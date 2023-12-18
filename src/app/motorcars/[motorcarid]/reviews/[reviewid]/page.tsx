import React from "react";

const page = ({
  params,
}: {
  params: {
    motorcarid: string;
    reviewid: string;
  };
}) => {
  return (
    <div>
      <div>
        <h1>MotorCar {params.motorcarid} Review</h1>
        <div>
          <h2>Review {params.reviewid}</h2>
          <p>The Car is soo good man, must buy amigo</p>
        </div>
      </div>
    </div>
  );
};

export default page;
