import React, { useEffect, useState } from 'react'

const useVisibility = (elements,fnClose) => {
    const [elementVisibility, setElementVisibility] = useState(false);
    useEffect(()=> {
        const checkClick= (e) => {
            if(!elements) return false;
            const clickOutsideElement = elements.every((element)=>{
                if(!element) return false;
                if(
                    e.target !== element &&
                    !element.contains(e.target)
                ){
                    return true;
                }
                return false;
            });
            if(clickOutsideElement){
                setElementVisibility(false);
                if(fnClose) fnClose();
            }
        };
        document.addEventListener('click',checkClick);
        return() =>{
            document.removeEventListener('click',checkClick)
        }
    },[elements,fnClose]);
    const closeElement = () =>{
        setElementVisibility(false);
    };
    const showElement = () =>{
        setElementVisibility(true);
    };
    return {elementVisibility,closeElement,showElement};
}

export default useVisibility