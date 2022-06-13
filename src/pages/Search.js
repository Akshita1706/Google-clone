import React, {useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import {useNavigate} from 'react-router-dom'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'



function Search({hideButtons=false}) {
    const[{},dispatch]=useStateValue()
    const[input,setInput]=useState('')
const navigate=useNavigate()


    const search=e=>{
        e.preventDefault();
        console.log("u hit the button")
        dispatch({
type:actionTypes.SET_SEARCH_TERM,
term:input
        })
        navigate('/search')
    }
  return (
      //converting div to form n button type to submit..it catches even when the enter key on keyboard tapped
    <form className='search'>
      <div className='search_input'>
          <SearchIcon className='search_inputIcon'/>
          <input value={input} onChange={e=> setInput(e.target.value)} />
          <MicIcon/>
      </div>


      {!hideButtons ?(<div className="search_buttons">
          <Button type= 'submit' onClick={search}variant="outlined">Google Search</Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>)
      :   (<div className="search_buttons">
      <Button className='search_buttonsHidden' type= 'submit' onClick={search}variant="outlined">Google Search</Button>
      <Button  className='search_buttonsHidden' variant="outlined">I'm Feeling Lucky</Button>
  </div>

      ) }   
    </form>
  )
}

export default Search
