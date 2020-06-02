import React, {useState, useEffect, useCallback} from "react";

export const useWindow = () => {

    const hasWindow = typeof window !== "undefined";

    const getDimensions = useCallback(() => {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;

        return {width, height}
    }, [hasWindow]);

    const [windowDimensions, setWindowDimensions] = useState(getDimensions());

    useEffect(() => {
       if(hasWindow){
           const handleResize = () => {
               setWindowDimensions(getDimensions());
           };

           window.addEventListener("resize", handleResize);

           return () => window.removeEventListener("resize", handleResize);
       } 
    }, [hasWindow, getDimensions]);

    return windowDimensions;
};