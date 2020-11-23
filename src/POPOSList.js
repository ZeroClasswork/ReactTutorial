import React from "react";
import POPOSSpace from "./POPOSSpace";

import data from './sfpopos-data.json'

import './POPOSList.css'

function POPOSList() {
  const spaces = data.map((obj) => {
    return  <POPOSSpace 
              name={obj.title}
              address={obj.address}
              image={obj.images[0]}
            />
  })
  return (
    <div className="POPOSList">
      {spaces}
    </div>
  );
}

export default POPOSList;
