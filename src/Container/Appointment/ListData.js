// import { TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import Tabs from '../Tab/Tabs';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material';
import { Button } from 'reactstrap';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';
import InputBox from '../../Components/InputBox/InputBox';


function ListData(props) {
    const [data, setData] = useState([]);
    const [Dopen, setDOpen] = useState(false);
    const [Did, setDid] = useState('');
    const history = useHistory()
    const [filterData, setFilterData] = useState([]);

    const loadData = () => {
        let localData = JSON.parse(localStorage.getItem("appointment"));

        if (localData !== null) {
            setData(localData);
        }
    }

    const handleClose = () => {
        setDOpen(false);
      };

    const handleClickDOpen = (id) => {
        console.log(id);

        setDOpen(true);
        setDid(id);
        
    }

    const handleDelete = () => {
        console.log(Did);
       let localData = JSON.parse(localStorage.getItem("appointment"));

       let DFilter = localData.filter((d,i) => d.id != Did);

       localStorage.setItem("appointment", JSON.stringify(DFilter))
       loadData();
       setDOpen(false);
    }

    const handleClickEOpen = (id) => {
        history.push("/Appointment", {"id" : id});
        console.log(id);
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
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton onClick={() => handleClickDOpen(params.id)} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>

                        <IconButton onClick={() => handleClickEOpen(params.id)} aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </>
                )
            }
        },
    ]

    const handleSearch = (val) => {
        let localData = JSON.parse(localStorage.getItem('appointment'));

        let sData = localData.filter((s) => (
            s.id.toString().includes(val) ||
            s.name.toString().toLowerCase().includes(val.toLowerCase()) ||
            s.phone.toString().includes(val) ||
            s.email.toString().includes(val) ||
            s.department.toString().toLowerCase().includes(val.toLowerCase()) ||
            s.date.toString().includes(val) ||
            s.message.toString().includes(val)
        ))
        setFilterData(sData)
    }

    const fData = filterData.length > 0 ? filterData : data
    

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

                        <div className='search_box'>
                            <TextField 
                                id="search" 
                                label="Search"
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </div>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={fData}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </div>
                </div>
            </section>
            <Dialog
                open={Dopen}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleDelete}>Agree</Button>
                </DialogActions>
            </Dialog>
        </main>        

    );
}

export default ListData;