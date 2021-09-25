import React, {useState , useEffect} from 'react';
import ThroneList from './ThroneList';
import ThroneMap from './ThroneMap'

export default function Dashboard() {

    const [loading , setLoading] = useState(true)
    const [gLat , setGLat] = useState(41.08)
    const [gLng , setGLng] = useState(74.14)

    //loading
    useEffect(() => {
        setLoading(false)    
    },[])
    
    if(loading){
        return null
    }
    else{
        return (
            <div>
                <ThroneList setGLat = {setGLat} setGLng = {setGLng}      gLat = {gLat} gLng = {gLng}/>
                <ThroneMap gLat = {gLat} gLng = {gLng}/>
            </div>
        );  
    }
    
}