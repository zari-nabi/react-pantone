import { useEffect, useState } from "react";

/**
 * A custom hook that fetches data from a specified data source and returns the data as a state variable.
 * @param {function} getResource - The function that returns a promise which resolves to the data.
 * @returns {any} The data returned by the data source.
 */

export const useDataSource=(getResource)=>{
    const [resource,setResource]=useState(null);

    useEffect(()=>{
        (async ()=>{
            const result = await getResource();
            setResource(result);
        })();
    },[getResource]);

    return resource;
};

