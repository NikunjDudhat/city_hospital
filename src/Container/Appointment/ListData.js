// import { TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import Tabs from '../Tab/Tabs';

function ListData(props) {
    const [data, setData] = useState([]);

    const loadData = () => {
        let localData = JSON.parse(localStorage.getItem("appointment"));

        if (localData !== null) {
            setData(localData);
        }
    }

  

    useEffect(
        () => {
            loadData();
        },[]
    )

    const columns = [
        { field: 'id', headerName: 'Id', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'department', headerName: 'Department', width: 130 },
        { field: 'date', headerName: 'Date', width: 130 },
        { field: 'message', headerName: 'Message', width: 130 },
    ]
    

    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <Tabs/>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                    
                </div>
            </section>
        </main>

    );
}

export default ListData;