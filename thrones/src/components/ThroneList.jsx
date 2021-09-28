import React, {useState , useEffect} from 'react';
import maleIcon from '../images/male-icon.png' 
import femaleIcon from '../images/female-icon.png'
import Dashboard from './Dashboard';
import '../css/ThroneList.css'

let aaa = 10
export default function ThroneList(props) {
    const throneItems = []
    
    const populateThroneItems = () => {
        for(let i = 0; i < 5 ; i++){
            throneItems.push(
                <p onClick = {mapCord}>
                    Throne {i}: mahwah
                </p>
            )
        }
        
    }
    const mapCord = () =>{
        props.setGLat(aaa)
        props.setGLng(aaa)
        aaa++;
        console.log(`lat: ${props.gLat} \n long: ${props.gLng}`)
        
        //+LAT = N
        //-LAT = S
        //+lng = E
        //-lng = W
    }
    populateThroneItems()

    return (
        <div className = 'throne-container'>
            
        <div class = 'row' className = 'throne-filters'>
            <img className = 'male' src={maleIcon} alt="" style = {{height: '50px' , width: 'auto'}}  />
            <img className = 'female'src={femaleIcon} alt="" style = {{height: '50px', width: 'auto'}}/>
                
                {/* <li></li> stretch goal(handicap accessible)*/}
            </div>
            <div className = 'throne-list'>
                {throneItems}
            </div>
        </div>
    );
}