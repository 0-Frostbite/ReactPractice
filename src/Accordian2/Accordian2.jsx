import { useState } from 'react';
import data from './data.json';
import Tile from './Tile.jsx';

export default function Accordian() {
    const [active,setActive] = useState(null);

    const toggle = (index) => {
        setActive(active => (active === index ? null : index));
    };

    return(data['tiles'].map(tile => <Tile props={tile} isActive={tile.id===active} toggle={toggle}/>))
}
