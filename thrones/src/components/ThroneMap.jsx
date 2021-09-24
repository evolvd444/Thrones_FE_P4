import React, {useState , useEffect} from 'react';
import {GoogleMap , useLoadScript} from '@react-google-maps/api'
import '../css/ThroneMap.css'

const libraries = ["places"]

export default function ThroneList() {
    const [gMap , setGMap] = useState(null)
    const [loading , setLoading] = useState(true)

    const mapContainerStyle = {
        width: "100%",
        height: "100%",
    };
    const center = {
        lat: 43,
        lng: -79,
    };
    const {isLoaded , loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyAcwVL3CnXa5asAIEweJ1DGP6pMUrTqK_0',
        libraries
    })

    // if(loadError) console.log("Error loading maps")
    // if(!isLoaded) console.log("Loading Maps")

    useEffect(() => {
        setLoading(false) 
        
        setGMap(
            <GoogleMap 
                mapContainerStyle ={mapContainerStyle} 
                zoom = {8}
                center = {center}
            ></GoogleMap>)
        
        // setTimeout( () => {
        //     setGMap(
        //         <GoogleMap 
        //             mapContainerStyle ={mapContainerStyle} 
        //             zoom = {8}
        //             center = {center}
        //         ></GoogleMap>)
        //     }
        // , 5)
        
        
    },[loading])
    
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