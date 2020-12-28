import React from 'react'
import Gallery from 'react-photo-gallery'

import picone from '../img/realizacie/IMG_20170723_164304-150x150.jpg'
import pictwo from '../img/realizacie/IMG_20170825_180055-150x150.jpg'
import picthree from '../img/realizacie/IMG_20170825_180131-150x150.jpg'

const GalleryINEX = () => {
    const photos = [
        {
            src: picone,
            width: 4,
            height: 3
        },
        {
            src: picthree,
            width: 1,
            height: 2,
        },
        {
            src: pictwo,
            width: 4,
            height: 3
        },
        {
            src: picone,
            width: 1,
            height: 1
        },
        {
            src: pictwo,
            width: 1,
            height: 1
        },
        {
            src: picthree,
            width: 1,
            height: 1,
        },
        {
            src: picone,
            width: 1,
            height: 1
        },
        {
            src: pictwo,
            width: 1,
            height: 1
        },
        {
            src: picthree,
            width: 1,
            height: 1,
        },
        {
            src: picone,
            width: 1,
            height: 1
        },
        {
            src: pictwo,
            width: 1,
            height: 1
        },
        {
            src: picthree,
            width: 1,
            height: 1,
        },
        {
            src: picone,
            width: 1,
            height: 1
        },
        {
            src: pictwo,
            width: 1,
            height: 1
        },
        {
            src: picthree,
            width: 1,
            height: 1,
        },
        {
            src: picone,
            width: 1,
            height: 1
        },
        {
            src: pictwo,
            width: 1,
            height: 1
        },
        {
            src: picthree,
            width: 1,
            height: 1,
        }
    ];
    return (
        <div>

            <Gallery className="gallery" photos={photos} />;
        </div>
    )
}
export default GalleryINEX

