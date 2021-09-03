import React from "react";
import Axios from "axios";
import { useState } from "react";


export default function DashBoardPage() {


    
    const [dashboardList, setDashboardList] = useState([]);
    const [dashboardList1, setDashboardList1] = useState([]);




    const getDashboard = () => {
        Axios.get("http://localhost:3005/dashboard").then((response) => {
            setDashboardList(response.data);
        });
    };

    const getDashboard1 = () => {
        Axios.get("http://localhost:3005/dashboard1").then((response) => {
            setDashboardList1(response.data);
        });
    };








    <div>
        <button class="button" onClick={getDashboard}>BANK1</button>
    </div>

    {
        dashboardList.map((val, key) => {
            return (
                <>
                    <div className="card">
                        <h3>{val.name}</h3>

                        <h4>Total Units:{val.quantity}</h4> <h4>Total Investment:{val.total}</h4>
                        <h4>Sold Amount:</h4> <h4>Current Amount:</h4>
                        <h4> Overall Profit:</h4>

                    </div>

                    
                </>

            );
        });
    };

    <div>
        <button class="button" onClick={getDashboard1}>BANK1</button>
    </div>

    {
        dashboardList1.map((val, key) => {
            return (
               <> 
                    <div className="card">
                        <h3>{val.name}</h3>

                        <h4>Total Units:{val.quantity}</h4> <h4>Total Investment:</h4>
                        <h4>Sold Amount:{val.total}</h4> <h4>Current Amount:</h4>
                        <h4> Overall Profit:</h4>

                    </div>

                    
                </>

            );
        });
    };

};



