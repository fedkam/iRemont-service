import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../../components/title'
import { MotivationLink } from '../../../components/motivation-links'
import iremontBrokenJSON from '../../../assets/json-animation/iremontBroken.json'
import LottieAnimation from '../../lottie-animation'
import TransitionAnimationPages from '../../../components/transition-animation-pages'
import { Helmet } from "react-helmet";


const iconBrokenIremont = (
    <svg width="194" height="39" viewBox="0 0 194 39" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
            <path d="M193.43 10.7969L193.43 16.1641H184.852L184.852 37H177.703L177.703 16.1641H169.102L169.102 10.7969H193.43Z" fill="#3F3F3F" />
            <path d="M150.898 10.7969V20.875H160.883V10.7969H168.031V37H160.883V26.1953H150.898V37H143.75V10.7969H150.898Z" fill="#3F3F3F" />
            <path d="M124.445 23.8516C124.445 26.4453 124.867 28.4062 125.711 29.7344C126.57 31.0625 127.961 31.7266 129.883 31.7266C131.789 31.7266 133.156 31.0703 133.984 29.7578C134.828 28.4297 135.25 26.4609 135.25 23.8516C135.25 21.2578 134.828 19.3125 133.984 18.0156C133.141 16.7188 131.758 16.0703 129.836 16.0703C127.93 16.0703 126.555 16.7188 125.711 18.0156C124.867 19.2969 124.445 21.2422 124.445 23.8516ZM142.562 23.8516C142.562 28.1172 141.438 31.4531 139.188 33.8594C136.938 36.2656 133.805 37.4688 129.789 37.4688C127.273 37.4688 125.055 36.9219 123.133 35.8281C121.211 34.7188 119.734 33.1328 118.703 31.0703C117.672 29.0078 117.156 26.6016 117.156 23.8516C117.156 19.5703 118.273 16.2422 120.508 13.8672C122.742 11.4922 125.883 10.3047 129.93 10.3047C132.445 10.3047 134.664 10.8516 136.586 11.9453C138.508 13.0391 139.984 14.6094 141.016 16.6562C142.047 18.7031 142.562 21.1016 142.562 23.8516Z" fill="#3F3F3F" />
            <path d="M115.773 37H109.094V16.3516L108.719 17.8047C107.875 21.1016 107.117 23.5938 106.445 25.2812L101.805 37H96.7188L92.0078 25.1875C91.3359 23.4688 90.6172 21.0547 89.8516 17.9453L89.4062 16.3516V37H82.75V10.7969H92.5938L97.0938 21.9766C97.5625 23.1797 97.9922 24.5625 98.3828 26.125C98.7891 27.6875 99.0625 29.0234 99.2031 30.1328C99.7188 27.7891 100.117 26.1094 100.398 25.0938C100.695 24.0625 101.016 23.1172 101.359 22.2578C101.703 21.3984 103.258 17.5781 106.023 10.7969H115.773V37Z" fill="#3F3F3F" />
            <path d="M65.8394 16.0626C64.384 16.4856 63.3789 17.2822 62.824 18.4523C62.2648 19.6074 62.1716 21.0501 62.5443 22.7805L72.177 19.9808C71.6542 18.294 70.8322 17.1173 69.7109 16.4506C68.5853 15.7689 67.2948 15.6396 65.8394 16.0626ZM72.9692 36.9821C68.918 38.1596 65.4273 37.9619 62.4969 36.3892C59.5665 34.8164 57.506 31.982 56.3155 27.8859C55.0901 23.6697 55.194 20.1086 56.6274 17.2024C58.0714 14.2769 60.6539 12.2734 64.3749 11.1919C67.9309 10.1583 70.9935 10.3665 73.5628 11.8164C76.132 13.2663 77.9356 15.7768 78.9735 19.3478L79.9416 22.6787L63.7147 27.395C64.3566 29.3237 65.3769 30.6788 66.7756 31.4601C68.1742 32.2414 69.8488 32.3486 71.7993 31.7817C73.3148 31.3412 74.7019 30.7672 75.9606 30.0596C77.2194 29.3521 78.4837 28.4395 79.7535 27.3219L81.2973 32.6334C80.2714 33.5824 79.1172 34.3979 77.8347 35.0798C76.5565 35.7767 74.9347 36.4108 72.9692 36.9821Z" fill="#3F3F3F" />
            <path d="M41.8355 18.6957L44.0591 17.8179C46.1374 16.9974 47.5318 15.9765 48.2424 14.7553C48.9472 13.5195 48.9898 12.1168 48.3701 10.5472C47.7447 8.96304 46.8469 7.96523 45.6765 7.55375C44.5207 7.13653 43.0199 7.29227 41.1741 8.02095L38.1003 9.23446L41.8355 18.6957ZM55.0989 7.61355C56.453 11.0434 56.4132 14.0913 54.9794 16.7572C53.5602 19.4173 50.8741 21.5276 46.921 23.0883L44.0216 24.2329L48.4969 35.569L41.7389 38.237L29.1562 6.36524L39.3369 2.34601C43.2028 0.8198 46.4684 0.496466 49.1339 1.37601C51.8081 2.23529 53.7965 4.31447 55.0989 7.61355Z" fill="#3F3F3F" />
            <path d="M4.02344 37.5547C1.69531 37.5547 0.53125 36.2578 0.53125 33.6641C0.53125 31.0703 1.69531 29.7734 4.02344 29.7734C5.13281 29.7734 6 30.1016 6.625 30.7578C7.23438 31.3984 7.53906 32.3672 7.53906 33.6641C7.53906 36.2578 6.36719 37.5547 4.02344 37.5547ZM37 30.1016V37.25H10.7969V30.1016L37 30.1016Z" fill="#3F3F3F" />
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="194" height="39" fill="white" />
            </clipPath>
        </defs>
    </svg>
);



const iremontBrokenAnimation = (
    <LottieAnimation
        className='err-404-page__iremont-broken'
        bodymovinAnimation={iremontBrokenJSON}
        reserveStaticIcon={iconBrokenIremont}
    />
);



const ErrorPage = ({ title, subtitle, motivationLink }) => {
    return (
        <TransitionAnimationPages>
            <Helmet>
                <meta name="prerender-status-code" content="404" />
            </Helmet>
            <div className='err-404-page__title'>
                <Title
                    title={title}
                    subtitle={subtitle}
                />
                {
                    motivationLink &&
                    <MotivationLink
                        addCssClassName={'\terr-404-page__motivation-list'}
                        name={motivationLink.name}
                        path={motivationLink.path}
                    />
                }
            </div>
        </TransitionAnimationPages>
    )
}



ErrorPage.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    subtitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    motivationLink: PropTypes.exact({
        name: PropTypes.string,
        path: PropTypes.string,
    })
}

ErrorPage.defaultProps = {
    title: iremontBrokenAnimation,
    subtitle: 'У нас на сайте что-то сломалось.',
    motivationLink: {
        name: 'На главную',
        path: '/'
    }
}



export default ErrorPage;