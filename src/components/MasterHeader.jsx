import React from 'react'
import Picture from '../img/cropped-body.jpg'


const MasterHeader = () => {
    return (
        <div>
            <header className="main-header">
                <img className="main-picture" src={Picture} alt="sediaciujo" />
                <span className="header-title d-none d-md-block">interiér - exteriér - dekorácie</span>
            </header>
        </div>
    )
}

export default MasterHeader