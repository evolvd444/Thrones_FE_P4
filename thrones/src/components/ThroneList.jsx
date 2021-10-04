import React, {useState , useEffect} from 'react';
import maleIcon from '../images/male-icon.png' 
import femaleIcon from '../images/female-icon.png'
import {DataContext} from './Datacontext'
import PlacesAutocomplete, {
    geocodeByAddress, 
    getLatLng
} from 'react-places-autocomplete'
import '../css/ThroneList.css'

export default function ThroneList(props) {
    const throneItems = []
    const [test , setTest] = useState([])
    const [address , setAddress] = useState('')
    const [loading , setLoading] = useState(true)
    //const handleSelect = async value => {};

    const populateThroneItems = (zip) => {
        // setTest(props.throneList.filter(e => {
        //     if(e.address != null && e.address.length >= 5 )   
        //         return e.address.substring(e.address.length - 5, e.address.length) == zip  
        // }))
        // console.log('test length: ' + test.length)
        // test.map(e => {
        //     throneItems.push(
        //         <p onClick = {mapCord}>
        //             {e.owner}: {e.address}
        //         </p>
        //     )
        // })
        
        
         
    }
    const mapCord = () =>{
        //set props.gLat/gLng to throne location
        props.setGLat(props.gLat)
        props.setGLng(props.gLng)     
        
        //+LAT = N      -LAT = S        +lng = E        -lng = W
    }
    
    useEffect(()=> {
        populateThroneItems(33328)
        setLoading(false)
        // console.log('adasd' + throneItems)
    },[])
    if(loading){
        return null
    }
    else{
        // console.log(throneItems)  
        return (
            <div className = 'throne-container'>  
                <div className = 'throne-filters'>
                    {/* <img className = 'male' src={maleIcon} alt="" style = {{height: '50px' , width: '80px'}}  />
                    <img className = 'female'src={femaleIcon} alt="" style = {{height: '50px', width: '80px'}}/> */}
                    {/* <PlacesAutocomplete 
                        value = {address} 
                        onChange = {setAddress} 
                        onSelect = {handleSelect}
                    >{}</PlacesAutocomplete> */}
                </div>

                <div className = 'throne-list'>
                    {throneItems}            
                </div>
            </div>
        );
    }
}