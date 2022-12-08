import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MkdSDK from "../utils/MkdSDK";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router-dom";
import LeaderBoardCard from "../components/LeaderBoardCard";
import TestTable from "../components/TestTable";

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  const { state, dispatch, role } = React.useContext(AuthContext);

  const [leaderBoardData, setLeaderboardData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(10);

  const getAllData = async () => {
    let sdk = new MkdSDK();
    sdk._table = "video";
    const check = await sdk.check(
      role || JSON.parse(localStorage.getItem("role"))
    );
    const data = await sdk.callRestAPI(
      { payload: {}, page: 1, limit: 10 },
      "PAGINATE"
    );
    console.log(data, "data");

    // setLeaderboardData(data);
  };
  if (!localStorage.getItem("token")) {
    navigate("/admin/login");
  }

  useEffect(() => {
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
      <div className="text-white w-full mt-20">
        <TestTable />
        {/* <table className="table-auto">
          <thead>
            <tr>
              <th className="w-[30%]">Title</th>
              <th className="w-[50%] text-left pl-10">Author</th>
              <th className="w-[20%] text-left">Most liked</th>
            </tr>
          </thead>
          <tbody>
            <tr className="px-4 py-2 border border-[#e6e6e6] rounded-md ">
              <LeaderBoardCard />
            </tr>
            <tr className="px-4 py-2 border border-[#e6e6e6] rounded-md">
              <LeaderBoardCard />
            </tr>
            <tr className="px-4 py-2 border border-[#e6e6e6] rounded-md">
              <LeaderBoardCard />
            </tr>
            <tr className="px-4 py-2 border border-[#e6e6e6] rounded-md">
              <LeaderBoardCard />
            </tr>
            <tr className="px-4 py-2 border border-[#e6e6e6] rounded-md">
              <LeaderBoardCard />
            </tr>
            <tr className="px-4 py-2 border border-[#e6e6e6] rounded-md">
              <LeaderBoardCard />
            </tr>
            <tr className="px-4 py-2 border border-[#e6e6e6] rounded-md">
              <LeaderBoardCard />
            </tr>
            <tr className="px-4 py-2 border border-[#e6e6e6] rounded-md">
              <LeaderBoardCard />
            </tr>
            <tr className="px-4 py-2 border border-[#e6e6e6] rounded-md">
              <LeaderBoardCard />
            </tr>
            <tr className="px-4 py-2 border border-[#e6e6e6] rounded-md">
              <LeaderBoardCard />
            </tr>
          </tbody>
        </table> */}
        <div
          className={`w-full flex items-center ${
            pageNumber !== 1 ? " justify-between" : " justify-end"
          } mt-20`}
        >
          {pageNumber !== 1 && <button>back</button>}
          {totalPage > pageNumber && <button>next</button>}
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
