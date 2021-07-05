import DataTable from "react-data-table-component";

const Table = (props) => {
    return (
        <DataTable
            title={props.title}
            columns={props.columns}
            data={props.data}
            dense
        />
    )
};

export default Table;