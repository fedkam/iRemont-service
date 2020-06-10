import { memo, useEffect } from 'react'



export const ResetScroll = memo(({resetScroll}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return null;
})
