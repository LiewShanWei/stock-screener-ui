import React, {useState, Fragment} from 'react';
import FinvizTableList from './components/Finviz/FinvizTableList';
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
      <FinvizTableList 
        selectedTickers={selectedTickers}/>
    </Fragment>
  );
}

export default App;
