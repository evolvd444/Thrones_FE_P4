import React, {useState , useEffect} from 'react';
import maleIcon from '../images/male-icon.png' 
import femaleIcon from '../images/female-icon.png'
import Dashboard from './Dashboard';
import '../css/ThroneList.css'

let aaa = 0
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
        // setGLat(10)
        // setGLng(10)
        //+LAT = N
        //-LAT = S
        //+lng = E
        //-lng = W
    }
    populateThroneItems()

    return (
        <div className = 'throne-container'>
            
            <ul className = 'throne-filters'>
                <li className = 'male'><img src={maleIcon} alt=":(" style = {{height: '5vh'}}  /></li>
                <li className = 'female'><img src={femaleIcon} alt="" style = {{height: '5vh'}}/></li>
                {/* <li></li> stretch goal(handicap accessible)*/}
            </ul>
            <div className = 'throne-list'>
                {throneItems}
            </div>
        </div>
    );
}