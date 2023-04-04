import React, { useEffect, useState } from "react";

/**
 * React Source Loader component.
 *
 * @param {Object} props - The component props.
 * @param {function} props.getDataSource - The function that retrieves the data source.
 * @param {string} props.resourceName - The name of the resource being loaded.
 * @param {ReactNode} props.children - The content to be displayed inside the component.
 * @returns {ReactNode} The rendered React component.
 */

export const SourceLoader = ({ getDataSource = () => { }, resourceName, children }) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        (async () => {
            const { data } = await getDataSource();
            setState(data)
        })()
    }, [getDataSource]);

    return (
        <>
            {React.Children.map(children, child => {

                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: state })
                }
                return child
            })}
        </>
    )
};