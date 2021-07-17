import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../UI/Table"

const BaseStatementTable = (props) => {
    const [data, setData] = useState([])
   
    useEffect(() => {
        setData([])
        for(let i=0; i< props.selectedTickers.length; i++){
            axios.get("http://localhost:5000/finviz/" + props.selectedTickers[i].value + "/" + props.period + "/" + props.statementType)
                .then(res => {
                    setData(previousState => (
                        [...previousState, res.data]
                    ));
                })
        }
    }, [props.selectedTickers, props.period, props.statementType])

    useEffect(() => {
        console.log("Printing [data]")
        console.log(data)
    }, [data])
    
    return (
        <Table 
            title={props.title}
            columns={props.columns}
            data={data}
        />
    )
};

export default BaseStatementTable;