import React, { useEffect } from 'react'

const useDescriptionTitle = (descripcion,title) => {
    useEffect(()=>{
        const metaDescription = document.querySelector('meta[name="description"]');
        metaDescription.setAttribute('content',descripcion)

        const titleElement = document.querySelector('title');
        titleElement.innerText = "Todo List | " + title;

    },[descripcion,title])
}

export default useDescriptionTitle