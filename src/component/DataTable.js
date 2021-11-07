import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'

const columns = [
  {field: 'web_pages', headerName: 'Webpage'},
  {field: 'name', headerName: 'Name', width: 300},
  {field: 'country', headerName: 'Country', width: 600}
]

const DataTable = () => {

  const [tableData, setTableData] = useState([])

 useEffect(() => {
   fetch("http://universities.hipolabs.com/search?country=Australia")
    .then((data) => data.json())
    .then((data) => setTableData(data))
 })

  return (
    <div style={{height: 700, width: '100%'}}>
      <DataGrid 
        rows={tableData}
        columns={columns}
        pageSize={12}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable