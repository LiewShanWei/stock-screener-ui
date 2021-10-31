import React from 'react';

const FinvizMain = () => {
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
      <Reddit />
    </Fragment>
  );
};

export default FinvizMain