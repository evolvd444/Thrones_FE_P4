import React, {useState , useEffect} from 'react';
import ThroneList from './ThroneList';
import ThroneMap from './ThroneMap'
import '../css/Dashboard.css'

export default function Dashboard({userList}) {

    const [loading , setLoading] = useState(true)
    const [gLat , setGLat] = useState(41.08)
    const [gLng , setGLng] = useState(-74.14)

    //loading
    useEffect(() => {
        setLoading(false)  
        // console.log(userList)  
    },[])
    
    if(loading){
        return null
    }
    else{
        return (
            <div id = 'dashboard'>
                <ThroneList gLat = {gLat} gLng = {gLng} setGLat = {setGLat} setGLng = {setGLng}/>
                <ThroneMap gLat = {gLat} gLng = {gLng} userList = {userList}/>
            </div>
        );  
    }
    
}