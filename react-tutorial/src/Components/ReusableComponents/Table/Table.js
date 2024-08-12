import React, { useState, useEffect } from "react";
import './Table.css'

const Table = ( {apiUrl }) => {  
  const [table, setTable] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setTable(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiUrl]);

  return (
    <div className="table-container">
      <table>
        {table.map((row, index) => (
          <tr key={index} className="table-row tr-border">
            <td>
              <div className="row-container">
                <div className="row-container-left">
                  {row.title} <span className="hashtag">{row.number}</span>
                </div>
                <div className="row-container-right">
                  <button className="grey-tag tag">{row.button1}</button>
                </div>
                <div className="row-container-right">
                  <button className="grey-tag tag">{row.button2}</button>
                </div>
                <div className="row-container-right table-date">
                  {row.date}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
