import React, {useState , useEffect} from 'react';
import maleIcon from '../images/male-icon.png' 
import femaleIcon from '../images/female-icon.png'
export default function ThroneList() {
    const throneItems = []
    
    const populateThroneItems = () => {
        for(let i = 0; i < 5 ; i++){
            throneItems.push(
            <div>
                Throne {i}: mahwah
            </div>)
        }
        
    }

    populateThroneItems()

    return (
        <div className = 'throne-container'>
            
            <ul className = 'throne-filters'>
                <li className = 'male'><img src={maleIcon} alt=":(" style = {{height: 100}}  /></li>
                <li className = 'female'><img src={femaleIcon} alt="" style = {{height: 100}}/></li>
                {/* <li></li> stretch goal(handicap accessible)*/}
            </ul>
            <div className = 'throne-list'>
                {throneItems}
            </div>
        </div>
    );
}