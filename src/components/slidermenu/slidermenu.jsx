import React from 'react';
import MenuButton from './menubutton.jsx';

export default class SliderMenu extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return (
            <div>
            <h1>Slider Menu</h1>
            <MenuButton />
            </div>
        );
    }
}