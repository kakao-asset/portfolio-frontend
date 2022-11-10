import { useEffect, useState } from "react";

const dropDownHook = (elem, initialState) => {
    const [dropIsOpen, setDropDown] = useState(initialState);

    useEffect(()=>{
        const onClick = (e) => {
            if (elem.current !== null && !elem.current.contains(e.target)) {
                setDropDown(!dropIsOpen);
            }
        };

        if (dropIsOpen) {
            
        }
    })
}