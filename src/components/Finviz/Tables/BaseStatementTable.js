import { useState, useEffect } from "react";
import axios from "axios";
import Table from '../../../UI/Table';

const customStyles = {
    headCells: {
      style: {
        paddingLeft: '0px', // override the cell padding for head cells
        paddingRight: '0px',
      },
    },
    cells: {
      style: {
        paddingLeft: '0px', // override the cell padding for data cells
        paddingRight: '0px',
      },
    },
  };

const BaseStatementTable = (props) => {
    const [data, setData] = useState([])
   
    useEffect(() => {
        setData([])
        for(let i=0; i< props.selectedTickers.length; i++){
            axios.get("http://localhost:5000/finviz/" + props.selectedTickers[i].value)
                .then(res => {
                    setData(previousState => (
                        [...previousState, res.data]
                    ));
                })
        }
    }, [props.selectedTickers]);
    
    useEffect(() => {
      console.log(data);
      //Filter data based on annual / quarter
    }, [data]);

    return (
        <Table 
            title={props.title}
            columns={props.columns}
            data={data}
            customStyles={customStyles}
        />
    )
};

export default BaseStatementTable;