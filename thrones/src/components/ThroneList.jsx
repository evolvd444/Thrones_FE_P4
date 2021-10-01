import React, {useState , useEffect} from 'react';
import maleIcon from '../images/male-icon.png' 
import femaleIcon from '../images/female-icon.png'
import PlacesAutocomplete, {
    geocodeByAddress, 
    getLatLng
} from 'react-places-autocomplete'
import '../css/ThroneList.css'

let aaa = 0.01
export default function ThroneList(props) {
    const throneItems = []
    const [address , setAddress] = useState('')
    const handleSelect = async value => {};

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
        props.setGLat(props.gLat + aaa)
        props.setGLng(props.gLng + aaa)     
        aaa += 0.001;
        
        //+LAT = N
        //-LAT = S
        //+lng = E
        //-lng = W
    }
    populateThroneItems()

    return (
        <div className = 'throne-container'>
            
        <div className = 'throne-filters'>
            <img className = 'male' src={maleIcon} alt="" style = {{height: '50px' , width: 'auto'}}  />
            <img className = 'female'src={femaleIcon} alt="" style = {{height: '50px', width: 'auto'}}/>
            {/* <PlacesAutocomplete 
                value = {address} 
                onChange = {setAddress} 
                onSelect = {handleSelect}
            >{}</PlacesAutocomplete> */}
            
                {/* <li></li> stretch goal(handicap accessible)*/}
            </div>
            <div className = 'throne-list'>
                {throneItems}
            </div>
        </div>
    );
}