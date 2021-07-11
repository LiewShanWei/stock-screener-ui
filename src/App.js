import React, {Fragment} from 'react';
import FinvizTables from './components/Finviz/FinvizTables';
import Search from './components/Search';

function App() {
  return (
    <Fragment>
      <Search/>
      <FinvizTables />
    </Fragment>
  );
}

export default App;
