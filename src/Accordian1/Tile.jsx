import './Tile.css';
import { useState } from "react";

export default function Tile({props}) {
    const [show,setShow] = useState(false)
    function toggleShow() {
        setShow(show => !show);
    }
    return (<><div className='tile'>
        <div onClick={toggleShow} className="tilehead">
            {props.title}
            {show && <div className="tilebody">{props.content}</div>}
        </div>
    </div></>)
}
