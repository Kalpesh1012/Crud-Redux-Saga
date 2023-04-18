import styled from '@emotion/styled'
import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const Tabs=styled(`p`)`
          color:white;
          margin-right:200px;
          text-decoration: none;
    `
    
  return (
    
    <div>
      <AppBar sx={{background:"black"}}>
        <Toolbar >
            <Link to="/" ><Tabs sx={{color:"inherit"}}>Add User</Tabs></Link>
            <Link to="/table"><Tabs>Saga User</Tabs></Link>
            <Link to="/formik"><Tabs>Redux_Add User</Tabs></Link>
            <Link to="/body"><Tabs>Redux User</Tabs></Link>
            
            
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
