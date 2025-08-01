// import { useState } from 'react';
import data from './data.json';
import Tile from './Tile.jsx';

export default function Accordian() {

    return(data['tiles'].map(tile => <Tile props={tile}/>))
}
