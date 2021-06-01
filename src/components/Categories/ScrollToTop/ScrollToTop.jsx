import React, { useEffect, useState } from 'react';
import NavigationIcon from '@material-ui/icons/Navigation';
import { useScrollTo } from 'react-use-window-scroll';
import IconButton from '@material-ui/core/IconButton';


export const ScrollToTop = () => {
    const [scroll, setScroll] = useState(0);
    const scrollTo = useScrollTo();

    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            { scroll >= 200
                ?
                <IconButton aria-label="scroll" onClick={() => scrollTo(0, 0)}>
                    <NavigationIcon />
                </IconButton>
                :
                ''
            }
        </>
    )
}