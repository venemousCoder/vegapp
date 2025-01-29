import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import Loading from '../Utils/Loading'

function Body() {
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch("http://localhost:4000/").then(res => res.json()).then((data) => {

            if (data.status === 'success') {
                setIsLoading(false)
                setItems(data.data)
            }
        })
    }, [])
    const [items, setItems] = useState(null)
    return (
        <>{isLoading ? <Loading /> : <div className='mt-4 grid-cols-1 place-items-center md:grid md:grid-cols-3 gap-5 ml-4'>
            {
                items?.map(item => {
                    return <ImageCard image_url={require('../../statics/tomato.jpeg')} name={'tomato'} price={900} />
                })
            }




        </div>}</>
    )
}

export default Body