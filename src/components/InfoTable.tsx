import { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hook/Fetch';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90, hide:true},
  { field: 'name', headerName: 'Name', flex: 1},
  { field: 'type', headerName:'Type', flex: 1},
  { field: 'price', headerName: 'Price', flex: 1},
  { field: 'proof', headerName: 'Proof', flex: 1},
  { field: 'origin', headerName: 'Origin', flex: 1},
  { field: 'vintage', headerName: 'Vintage', flex: 1},
  { field: 'description', headerName: 'Desciption', flex: 1},
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { contactData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)  
  }
    

  const deleteData = () => {
    for(let i = 0; i < selectionModel.length; i++){
        server_calls.delete(selectionModel[i]);
    }
    getData();
    console.log(`Selection model: ${selectionModel}`) 
    setTimeout(() => {window.location.reload()}, 500)
  }
    

  return (
    <>
        <Modal
            id= { selectionModel }
            open={ open } 
            onClose={ handleClose }
         />
        <div className='flex flex-row px-3 py-2'>
            <div>
                <button
                className='p-3 m-3 bg-amber-300 rounded-lg shadow-xl hover:bg-amber-500 hover:text-white'
                onClick={() => handleOpen()}>
                    Add Drink
                
                </button>
            </div>
            <button onClick={ handleOpen } className='p-3 m-3 bg-amber-300 rounded-lg shadow-xl hover:bg-amber-500 hover:text-white'>Update</button>
            <button onClick={ deleteData } className='p-3 m-3 bg-amber-300 rounded-lg shadow-xl hover:bg-amber-500 hover:text-white'>Delete</button>
        </div>
        <div className={ open ? "hidden" : "container px-5 py-5 flex flex-col" }
             style={{ height: 560, width: '100%' }}
          >
            <h2 className='p-3 bg-gradient-to-r from-amber-500 to-amber-300 text-white font-bold my-3 rounded'>Drinks</h2>
            <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[7]}
            checkboxSelection={true} 
            onSelectionModelChange={(item:any) => {
              setSelectionModel(item)
            }}
            />

        </div>
    </>
  )
}

export default DataTable