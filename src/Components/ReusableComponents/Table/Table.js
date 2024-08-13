import React, { useState, useEffect } from "react";
import './Table.css';

const Table = ({ apiUrl, dataKey }) => {  
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data[dataKey]) {
          setTable(data[dataKey]);
        } else {
          console.error(`${dataKey} not found in the data`);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [apiUrl, dataKey]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className="table-container">
      <table>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

export default Table;
