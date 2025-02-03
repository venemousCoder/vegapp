import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/ReactToastify.css'


import Loading from '../Utils/Loading'
import AdminItem from './AdminItem'
function AdminPanel() {
    const [AdminItems, setAdminItems] = useState(null)
    const [Error, setError] = useState(false)
    const [isLoading, setisLoading] = useState(false)


    useEffect(() => {
        setisLoading(true)
        fetch("http://localhost:4000/").then(res => res.json()).then(data => {
            if (data.success) {
                setisLoading(false)
                setAdminItems(data.data)
            }


        }).catch((err) => {
            let ToastIt = () => toast.error("an error occured ! check your internet")
            ToastIt()
            console.log("nbbb errior");
            setError(true)


        })
    }, [])
    return (
        <div>{Error ? <> <ToastContainer position='top-center' /><Loading /></> : isLoading ? <Loading /> : <div>{
            AdminItems ? AdminItems.map(item => <AdminItem name={item.name} image_url={item.image_url} price={item.price} />) : toast.info("no Items found")
        }</div>} </div>
    )
}

export default AdminPanel