import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Alert(props) {

    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        if(alert.text !== ""){  
            enqueueSnackbar(alert, {
                anchorOrigin: {
                  vertical: 'error',
                  horizontal: 'left'
                }
              })
        }
    },[])

    return (
        <div>
            
        </div>
    );
}

export default Alert;