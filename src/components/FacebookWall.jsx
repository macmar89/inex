import React from 'react'
import { FacebookProvider, Page } from 'react-facebook';


const FacebookWall = () => {
    return (
        <FacebookProvider appId="382720396030">
            <Page href="https://www.facebook.com/FallenAvenue/" tabs="timeline" />
        </FacebookProvider>
    )
}

export default FacebookWall
