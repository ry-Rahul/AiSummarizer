import React, { useState } from 'react'

function useAlert() {
  
    const [alert, setAlert] = useState({
        show: false,
        message: '',
        type: ''
    });

    const showAlert = (message, type) => {
        setAlert({
            show: true,
            message,
            type
        })
    }

    const hideAlert = () => {
        setAlert({
            show: false,
            message: '',
            type: 'danger'
         })
    }

    return {
        alert,
        showAlert,
        hideAlert
    }
}

export default useAlert