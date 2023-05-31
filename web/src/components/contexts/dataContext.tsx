import { ReactNode, createContext, useState } from "react";
import PropTypes from 'prop-types';


export const DataContext = createContext<{
  dataChanged: boolean;
  changeData: () => void;
}>({
  dataChanged: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeData: () => {} 
});

type DataProviderProps = {
  children: ReactNode;
}


export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [dataChanged, setDataChanged] = useState(false);

  const changeData = () => {
    setDataChanged(!dataChanged);
  };

  return (
    <DataContext.Provider value={{ dataChanged, changeData}}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};