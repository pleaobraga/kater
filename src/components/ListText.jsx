import React from "react"

const ListText = ({listItens}) => {

    if(listItens && listItens.length > 0) {
        return (    
            <ul className="description-list" >
                {listItens.map((text, index )=> <li key={index} className="description-list--item" ><span>&nbsp;</span>{text}</li>)}
            </ul>
        )
    }

    return null
}

export default ListText;