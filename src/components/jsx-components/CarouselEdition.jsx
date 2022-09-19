import React from 'react';
import '../../assets/components/subcomponents/carousel.scss'
import {Carousel} from '3d-react-carousal';
import {importAll} from '../functions/ImportImages';

const CarouselEdition = () => {
    
    /* Import de mes images */
    const image = importAll(require.context(`../../assets/img/posts`, false, /\.(png|jpe?g|svg|gif)$/));
    const images = Object.values(image);

    let slides = [
        <img  src={images[0]} alt="1" />,
        <img  src={images[1]} alt="2" />  ,
        <img  src={images[2]} alt="3" />  ,
        <img  src={images[3]} alt="4" />  ,
        <img  src={images[4]} alt="5" />  ,
    ];

    const callback = function(index){
        //console.log("callback",index);
    }

    return (
        <section className="container-carousel">
            <Carousel slides={slides} autoplay={true} interval={5000} onSlideChange={callback} arrows={false}/>
        </section>
    );
};

export default CarouselEdition;