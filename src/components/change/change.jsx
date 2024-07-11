import React, {useState} from 'react'
import './change.css'
function Change () {
    const [change,setChange] = useState('all');
    const handleChange = (tab) => {
      setChange(tab)
    }
    return <>
    <div className={change === 'all' ? 'work' : ''} onClick={()=>{handleChange('all')}} style={{cursor:'pointer'}}>All</div>
    <div className={change === 'active' ? 'work' : ''} onClick={()=>{handleChange('active')}}  style={{cursor:'pointer'}}>Active</div>
    <div className={change === 'completed' ? 'work' : ''} onClick={()=>{handleChange('completed')}}  style={{cursor:'pointer'}}>Completed</div>
    </>
}
export default Change