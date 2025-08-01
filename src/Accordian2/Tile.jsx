import './Tile.css';
import { useState } from "react";

export default function Tile({props,isActive,toggle}) {
    return (<><div className='tile' onClick={()=>toggle(props.id)}>
        <div className="tilehead" >
            {props.title}
            {isActive && <div className="tilebody">{props.content}</div>}
        </div>
    </div></>)
}
