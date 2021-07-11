import React, {useState, Fragment} from 'react';
import FinvizTables from './components/Finviz/FinvizTables';
import Search from './components/Search';

function App() {
  const [selectedTickers, setSelectedTickers] = useState([]);
  
  const onSelectHandler = (options) => {
    setSelectedTickers(options);
  };

  return (
    <Fragment>
      <Search
        onSelect={onSelectHandler}/>
      <FinvizTables 
        selectedTickers={selectedTickers}/>
    </Fragment>
  );
}

export default App;
