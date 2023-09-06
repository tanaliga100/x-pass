import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();

  console.log("params", params);

  React.useEffect(() => {});
  return <div>UserDetails</div>;
};
export default UserDetails;
