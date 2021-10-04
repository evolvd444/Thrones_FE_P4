import React, {useState , useEffect} from 'react';
import ThroneList from './ThroneList';
import ThroneMap from './ThroneMap'
import '../css/Dashboard.css'
import axios from 'axios'
export default function Dashboard({throneList}) {
    const [currentUser , setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')))
    const [loading , setLoading] = useState(true)
    const [gLat , setGLat] = useState(41.08)
    const [gLng , setGLng] = useState(-74.14)
    const[obj,setObj]  = useState()
    //loading
    useEffect(() => {
        setLoading(false)  
        setObj({
            owner: 'QuickCheck',
            address: '4123 wallabe way, sydney',
            featured_image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Modern_bath_rooms_and_appliances_-_a_few_suggestions_about_plumbing_valuable_to_home_builders_or_those_about_to_remodel_their_present_dwellings._%281903%29_%2814778178805%29.jpg',
            reviews: 'so nice!',
        })
    },[])
    
    if(loading){
        return null
    }
    else{
        return (
            <div id = 'dashboard'>
                {/* <button onClick = {()=>{
                    console.log(obj)
                    axios.post('https://thrones-be.herokuapp.com/thrones/create-throne/')
                    .then(res => {
                      console.log(res.data)
                    })
                    .catch(err => {
                      console.error('uh oh')
                    })
                }}>ADD THRONE</button> */}
                <form id= "bar" action="search"> </form>
              
                <ThroneList gLat = {gLat} gLng = {gLng} setGLat = {setGLat} setGLng = {setGLng} throneList = {throneList} currentUser = {currentUser}/>
                <ThroneMap gLat = {gLat} gLng = {gLng} />
            </div>
        );  
    }
    
}