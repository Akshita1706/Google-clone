import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import {Avatar} from '@material-ui/core'
import Search from './Search'

function Home  ()  {
  return (
    <div className='home'>
    
   
    <div className='home_header'>
<div className='home_headerLeft'>
  <Link to='/about'>About</Link>
  <Link to='/store'>Store</Link>

</div>
<div className='home_headerRight'>
<Link to='/gmail'>Gmail</Link>
<Link to='/images'>Images</Link>
<AppsIcon/>
<Avatar/>
</div>
    </div>

    <div className='home_body'>
    <img src="//www.google.com/logos/2007/ru_knowledge_day07.gif" alt="Knowledge Day 2007"/>
    </div>
    <div className='home_inputContainer'>
    <Search />
    </div>

    </div>
  )
}

export default Home


