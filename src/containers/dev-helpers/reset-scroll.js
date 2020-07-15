import { memo, useEffect } from 'react'



export const ResetScroll = memo(function ResetScroll({resetScroll}){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return null;
})
