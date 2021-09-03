
import "./App.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Axios from "axios";

import DashBoardPage from './Dashboard';


export default function App() {
  
  const [name, setName] = useState("Choose Stock Name");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(0);

  const [portfolioList, setPortfolioList] = useState([]);
  const [stockList, setStockList] = useState([]);
    
    
  const getStock = () => {
        Axios.get("http://localhost:3005/stock").then((response) => {
          setStockList([
            ...stockList,
            {
              name:name, 
              
            },
          ]);
        });
  };
  
  

  


  const addPortfolio = () => {
    Axios.post("http://localhost:3005/create",
     {
      
      type:type, 
      quantity:quantity, 
      price:price,
      date:date,
    })
    .then(() => {
      setPortfolioList([
        ...portfolioList,
        {
          name:name,
          type:type, 
          quantity:quantity, 
          price:price,
          date:date,
        },
      ]);
      
   

     });
  };

  




  const getPortfolio = () => {
    Axios.get("http://localhost:3005/portfolio").then((response) => {
      setPortfolioList(response.data);
    });
  };

  

  

  // const displayInfo = () => {
  //   console.log( type + quantity + price + date);
  // };

 
      
        
        
  
    
  

  

  
  return (
    <Router>
    <div className="App">
      
      <h1 align="center">Portfolio Management System</h1>

      {/* ---------------------------------------------------------------------------------- */}
      <div className="portfolio">
        <button class="button" onClick={getPortfolio}>User Portfolio</button>

        {portfolioList.map((val, key) => {
          return (
            <div className="portfolio">
              <div>
                <table>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>

                    <th>Transaction Type</th>
                    
                    <th>Quantity(units)</th> 
                    
                    <th>Buying or selling Price(per unit)</th> 
                    
                    <th>Transaction Date</th> 
                  </tr> 
                  <tr>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.type}</td>
                    <td>{val.quantity}</td>
                    <td>{val.price}</td>
                    <td>{val.date}</td>
                  </tr>   
                </table>
                
              </div>
              
            </div>
          );
        })}
      </div>
    
  









      {/* /--------------------------------------------------------------------------------- */}
      <Dropdown name={name} setName={setName} />
      <div className="information">
        
        <div>
          <label>Transaction Type</label>
          <input type="text" onChange={(event) => {
            setType(event.target.value);
          }}
          />
        </div>
        <div>
          <label>Quantity(units)</label>
          <input type="number" onChange={(event) => {
            setQuantity(event.target.value);
          }}
          />
        </div>
        <div>
          <label>Buying or selling Price(per unit)</label>
          <input type="number" onChange={(event) => {
            setPrice(event.target.value);
          }}
          />
        </div>
        <div>
          <label>Transaction Date</label>
          <input type="date" onChange={(event) => {
            setDate(event.target.value);
          }}
          />
        </div>
        <div class = "submit">
          <label>ADD INFO</label>
        <button class="button" onClick={addPortfolio}>Add</button>
        </div>


      </div>







    </div>
    
    <Route path="/dashboard" component={DashBoardPage} />

   </Router>
  );
  
  
  
};





