
import { useState } from "react";
import Axios from "axios";
function Dropdown({ name,  setName }) {
    const [isActive, setIsActive] = useState(false);
    
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
    
    return ( 
        <>
        <div className="dropdown">
            
            
            <div className="dropdown-btn"  onClick={(e) => setIsActive(!isActive)}>
            

              {name}  

            </div>
            {isActive && (
                
                <div className="dropdown-content">
                    {stockList.map((stock) => {
                        return(
                        <div onClick={(e) => {
                            setName(stock.name);
                            setIsActive(false);
                        }}
                            className="dropdown-item">
                            {stock.name}
                        </div>
                        );
                    })}
                    



                </div>
                
            )}
        </div>

     </> 
    );
}

export default Dropdown ;



