import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MkdSDK from "../utils/MkdSDK";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router-dom";

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  const { isAuthenticated, dispatch } = React.useContext(AuthContext);

  const [leaderBoardData, setLeaderboardData] = useState([]);

  const getAllData = async () => {
    let sdk = new MkdSDK();
    sdk._table = "video";
    const data = await sdk.callRestAPI({}, "PAGINATE");

    setLeaderboardData(data);
  };

  useEffect(() => {
    // if (!isAuthenticated) {
    //   navigate("/admin/login");
    // }
    getAllData();
  }, []);
  return (
    <>
      <div className="w-full flex justify-between items-center  bg-black text-white ">
        <h1 className="text-3xl font-bold">APP</h1>
        <button
          onClick={() => {
            console.log("logging yout");
            dispatch({ type: "LOGOUT" });
          }}
          className="text-black bg-[#9BFF00] rounded-[40px] p-[14px]"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default AdminDashboardPage;
