import React from 'react'
import { Link } from 'react-router-dom';

import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';


import ImageGallery from 'react-image-gallery';



import picone from '../img/realizacie/IMG_20170723_164304-150x150.jpg'
import pictwo from '../img/realizacie/IMG_20170825_180055-150x150.jpg'
import picthree from '../img/realizacie/IMG_20170825_180131-150x150.jpg'

const Dvere = () => {

    const images = [
        {
            original: picone,
            thumbnail: picone,
        },
        {
            original: pictwo,
            thumbnail: pictwo,
        },
        {
            original: picthree,
            thumbnail: picthree
        }
    ]




    return (
        <div>
            <ImageGallery items={images} autoPlay={true} />

            <p><Link to='/galeriadvere'>Pozrite si aj galériu našich realizácií</Link>.</p>
        </div>
    )
}

export default Dvere

//  https://reactjsexample.com/react-carousel-image-gallery-component-with-thumbnail-and-mobile-support/
