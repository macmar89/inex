import React from 'react'
import { FacebookProvider, Comments } from 'react-facebook';


const Referencie = () => {
    return (
        <div>
            <FacebookProvider appId="382720396030">
                <Comments href="http://www.facebook.com/FallenAvenue" />
            </FacebookProvider>        </div>
    )
}

export default Referencie
