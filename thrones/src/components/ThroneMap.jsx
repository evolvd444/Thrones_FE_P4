import React, {useState , useEffect} from 'react';
import {GoogleMap , useLoadScript} from '@react-google-maps/api'
import '../css/ThroneMap.css'
// import Dashboard from './Dashboard';

const libraries = ["places"]

export default function ThroneMap(props) {
    const [gMap , setGMap] = useState(null)
    const [loading , setLoading] = useState(true)

    const mapContainerStyle = {
        width: "100%",
        height: "100%",
    };
    const center = {
        lat: props.gLat,
        lng: props.gLng,
        //+LAT = N
        //-LAT = S
        //+lng = E
        //-lng = W
    };

    useEffect(() => {
        center.lat = props.gLat
        center.lng = props.gLng
    },[props.gLat , props.gLng])
    
    const {isLoaded , loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    })

    if(loadError) console.log("Error loading maps")
    if(!isLoaded) console.log("Loading Maps")
    
    useEffect(() => {
        setLoading(false) 
        if(isLoaded){
            setGMap(<GoogleMap 
                mapContainerStyle ={mapContainerStyle} 
                zoom = {13}
                center = {center}
            ></GoogleMap>)
        }
    },[isLoaded , center.lat , center.lng])


    if(loading)
        return null;
    else{
        
        return (
            <div id = 'map'>
                {gMap}
                
            </div>
        );
    }

}













// <script async
//     src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
// </script>
//AIzaSyAcwVL3CnXa5asAIEweJ1DGP6pMUrTqK_0