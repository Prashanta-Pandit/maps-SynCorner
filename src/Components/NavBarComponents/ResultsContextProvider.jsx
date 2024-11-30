import React, { createContext } from "react";

const ResultsContextProvider  = createContext();

const Results = ( { children }) => {

  const storeData = [
    {
      storeId: 1,
      storeName: "BP Charnwood",
      fuelType: "E10",
      fuelPrice: "$1.67",
      storeAddress: "9 Dangar Place, Charnwood ACT 2615",
      storePhoneNumber: "1300 000 001",
    },
    {
      storeId: 1,
      storeName: "BP Charnwood",
      fuelType: "E10",
      fuelPrice: "$1.67",
      storeAddress: "9 Dangar Place, Charnwood ACT 2615",
      storePhoneNumber: "1300 000 001",
    },
    {
      storeId: 1,
      storeName: "BP Charnwood",
      fuelType: "E10",
      fuelPrice: "$1.67",
      storeAddress: "9 Dangar Place, Charnwood ACT 2615",
      storePhoneNumber: "1300 000 001",
    },
    {
      storeId: 1,
      storeName: "BP Charnwood",
      fuelType: "E10",
      fuelPrice: "$1.67",
      storeAddress: "9 Dangar Place, Charnwood ACT 2615",
      storePhoneNumber: "1300 000 001",
    },
    {
      storeId: 1,
      storeName: "BP Charnwood",
      fuelType: "E10",
      fuelPrice: "$1.67",
      storeAddress: "9 Dangar Place, Charnwood ACT 2615",
      storePhoneNumber: "1300 000 001",
    },
    {
      storeId: 1,
      storeName: "BP Charnwood",
      fuelType: "E10",
      fuelPrice: "$1.67",
      storeAddress: "9 Dangar Place, Charnwood ACT 2615",
      storePhoneNumber: "1300 000 001",
    },
    {
      storeId: 2,
      storeName: "BP Franklin",
      fuelType: "E10",
      fuelPrice: "$1.99",
      storeAddress: "235 Flemington Road, Franklin ACT 2319",
      storePhoneNumber: "1300 000 002",
    },
    {
      storeId: 3,
      storeName: "BP Bradford",
      fuelType: "E10",
      fuelPrice: "$1.68",
      storeAddress: "235 Flemington Road, Franklin ACT 2319",
      storePhoneNumber: "1300 000 003",
    },
    {
      storeId: 4,
      storeName: "BP Dubbo",
      fuelType: "E10",
      fuelPrice: "$1.39",
      storeAddress: "235 Flemington Road, Franklin ACT 2319",
      storePhoneNumber: "1300 000 004",
    }
  ];

  return (

      <ResultsContextProvider.Provider value={ { storeData } } >
        {children}
      </ResultsContextProvider.Provider>

  );
};

export default Results;
export { ResultsContextProvider };

