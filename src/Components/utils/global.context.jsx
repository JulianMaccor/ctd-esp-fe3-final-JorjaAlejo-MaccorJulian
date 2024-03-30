import { createContext, useContext, useState, useEffect } from "react";
import useUserReducer from "./user";
import { getAllDentists } from "../api/dentist";

const ContextUser = createContext(undefined);
const ContextApi = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [ dentistApi, setDentistsApi ] = useState()

  useEffect(() => {
    getAllDentists().then((res) => {
      setDentistsApi(res.data)
    })
  }, [])

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  return (
      <ContextUser.Provider value={useUserReducer()}>
        <ContextApi.Provider value={[dentistApi, setDentistsApi]}>
          {children}
        </ContextApi.Provider>
      </ContextUser.Provider>
  );
};

export const useUser = () => useContext(ContextUser);

export const useDentistApi = () => useContext(ContextApi);