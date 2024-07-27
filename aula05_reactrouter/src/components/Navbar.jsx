import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Inicial</Link><br/>
        <Link to="/noticias">Noticias</Link><br/>
        <Link to="/dpo-lgpd">DPO Lgpd</Link><br/>
    </div>
  )
}

export default Navbar