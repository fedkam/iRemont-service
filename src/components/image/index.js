import React from 'react'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



// class PlaceholderBackgroung extends React.Component {
//     render() {
//         return (
//             <span>
//                 <svg width="99" height="139" viewBox="0 0 99 139"
//                     xmlns="http://www.w3.org/2000/svg" fill="none">
//                     <defs>
//                         <clipPath id="a">
//                             <path d="M37 55.234h24v28h-24v-28z" fill="#fff" />
//                         </clipPath>
//                     </defs>
//                     <g clip-path="url(#a)" fill="#E8E8E8">
//                         <path d="M54.798 62.21c-2.174-.39-3.652 1.121-5.565 1.121h-.609c-1.826 0-3.391-1.511-5.565-1.121-4.18.75-5.457 3.152-6 7.331-.493 3.795 2.174 10.608 5.739 13.196 1.901 1.38 3.565-.604 5.826-.604h.609c2.261 0 3.925 1.984 5.826.604 3.565-2.587 6.232-9.401 5.739-13.196-.543-4.179-1.82-6.581-6-7.331z" />
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M48.401 62.542c2.948-.14 5.295-2.555 5.295-5.513 0-.351-.033-.695-.096-1.029-2.948.14-5.295 2.555-5.295 5.513 0 .352.033.695.096 1.029z" />
//                     </g>
//                 </svg>
//             </span>
//         )
//     }
// }



const Image = ({ className, model, image_1x, image_2x }) => {
    image_2x && (image_2x += '\t2x');
    return (
        <LazyLoadImage
            width='99px'
            height='139px'
            effect='blur'
            src={image_1x}
            srcSet={image_2x}
            alt={model}
        //placeholder={<PlaceholderBackgroung />} //не получается прикрепить placeholder. РАЗОБРАТЬСЯ!
        />
    )
}



Image.propTypes = {
    className: PropTypes.string,
    model: PropTypes.string,
    image_1x: PropTypes.string,
    image_2x: PropTypes.string
}



export default Image
