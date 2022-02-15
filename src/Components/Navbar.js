import React from 'react'
import logo from '../news.png'

export default function Navbar(props) {
    return (
        <div className="container d-flex justify-content-center my-4 shadow-sm1 p-3 mb-5 bg-white rounded head-font">
            <header>
                <div className="d-flex justify-content-center"><img src={logo} alt="newslogo" style={{width:'55px'}}/><h4 className='my-2 mx-2 head-font-size'>{props.title}</h4></div>
            </header>
        </div>
  );
}
