import React, {useState , useEffect} from 'react';
import ThroneList from './ThroneList';
import MainNav from './MainNav'
import ThroneMap from './ThroneMap'

export default function Dashboard() {

    const [loading , setLoading] = useState(true)

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
                <MainNav />
                <ThroneList />
                <ThroneMap />
                <p>dashboard</p>
                
            </div>
        );  
    }
    
}