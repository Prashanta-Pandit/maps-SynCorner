import React from "react";
import { Fuel } from 'lucide-react';

const Results = () => {
  const storeData = [
    {
      storeId: 1,
      storeName: "BP Charnwood",
      fuelPrice: "$1.67",
      storeAddress: " 9 Dangar Place, Charnwood ACT 2615",
    },
    {
      storeId: 2,
      storeName: "BP Franklin",
      fuelPrice: "$1.99",
      storeAddress: "235 Flemington Road, Franklin ACT 2319",
    },
    {
      storeId: 3,
      storeName: "BP Bradford",
      fuelPrice: "$1.68",
      storeAddress: "235 Flemington Road, Franklin ACT 2319",
    },
    {
      storeId: 4,
      storeName: "BP Dubbo",
      fuelPrice: "$1.39",
      storeAddress: "235 Flemington Road, Franklin ACT 2319",
    },
  ];

  return (
    <div className="max-w-md space-y-4 mt-10">
      {storeData.map((rslt) => (
        <div key={rslt.storeId} >
          <div className=" mx-auto space-y-4">
            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg hover:cursor-pointer hover:bg-gray-100">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-md flex items-center justify-center">
                <Fuel className="w-4 h-4" />
              </div>
              {/* Text */}
              <div className="flex-1">
                <h3 className="text-md font-semibold text-gray-900">{rslt.fuelPrice}</h3>
                <p className="text-sm text-gray-500">{rslt.storeName} · {rslt.storeAddress}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
