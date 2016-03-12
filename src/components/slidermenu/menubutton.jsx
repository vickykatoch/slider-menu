import React from 'react';

export default class MenuButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            showLeft:false
        }
        this._clickTrackClassName = 'QTerqt22ey';
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    onMenuButtonClick(evt) {        
        evt.preventDefault();  
        let isOpen = this.state.isOpen;
        this.toggleWindowEvent(!isOpen);        
        this.setState({isOpen: !isOpen});
    }
    
    onDocumentClick(evt){
        if(evt.target.className.indexOf(this._clickTrackClassName)<0){
            this.toggleWindowEvent(false);
            this.setState({isOpen: false});            
        }
    }
    toggleWindowEvent(add){
        if(add){
            global.window.addEventListener('mousedown',this.onDocumentClick,false);            
        } else {
            global.window.removeEventListener('mousedown',this.onDocumentClick,false);            
        }
    }
    componentWillUnmount(){
        this.toggleWindowEvent(false);
    }
    
    render() {
        // let display = this.state.isOpen ? 'block' : 'none';
        // this.state.showLeft 
        // let style ={
        //   "display" : this.state.showLeft ?   
        // };
        return (
            <div>
                <button className={`btn btn-default btn-sm ${this._clickTrackClassName}`} onClick={this.onMenuButtonClick.bind(this) }>
                    <i className={`glyphicon ${this.state.isOpen ? 'glyphicon-remove' : 'glyphicon-menu-hamburger'} ${this._clickTrackClassName}`} />
                </button>
                <div className={`coverLayer ${this.state.isOpen ? 'show' : 'hide'}`} />
                <div className={`menu-host ${this.state.isOpen ? 'show' : 'hide'}`}/>
            </div>
        );
    }
}