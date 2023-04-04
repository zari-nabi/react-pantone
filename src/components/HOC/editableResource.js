import {  useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BaseContext } from "../../context";
import { getData, postData } from "../../services/manageApi";
import { removeFromLocalStorage, setToLocalStorage } from "../../services/manageLocalStorage";
import { Spinner } from "../Spinner/Spinner";

//=====================================
/**
 * Takes a string and returns the same string with the first character in uppercase.
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
const toUperChar = str => str.charAt(0).toUpperCase() + str.slice(1);

//=====================================
/**
 * Higher order component that adds edit functionality to a resource.
 *
 * @param {string} resourceUrl - The URL of the resource.
 * @param {string} resourceName - The name of the resource.
 * @param {React.Component} Component - The component to be wrapped.
 * @returns {React.Component} The wrapped component.
 */
//-------------------------------------
export const editableResource = (resourceUrl, resourceName, Component) => {
    return props => {
        const [originalData, setOriginalData] = useState(null);
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(false);

        const navigate = useNavigate();
        const{setToken} = useContext(BaseContext)

        useEffect(() => {
            (async () => {
                /**
                 * get Previuse Data
                 * with these mock api the get return default users. not work with login or post user api
                 */

                // let response = await getData(resourceUrl);
                // setOriginalData(response.data);
                // setData(response.data);
            })();
        }, []);

        const onChange = (changes) => {
            setData({ ...data, ...changes });
        };

        const onSave = async () => {
            // const response = await postData(resourceUrl, [resourceName]: data );
            setLoading(true);
            const response = await postData(resourceUrl, data);
            setLoading(false);
            setOriginalData(response);
            setData(response);
        };

        const onReset = () => {
            setData(originalData);
        };

        const onLogin = async () => {
            setLoading(true);
            const response = await postData(resourceUrl, data);
            setLoading(false);
            if (response) {
                setOriginalData(data);
                setData(data);
                setToLocalStorage("token", response?.token);
                setToken(response?.token)
            } else {
                removeFromLocalStorage("token");
                setToken(null)
            }
            navigate("/home");
        };

        const resourceProps = {
            [resourceName]: data,
            [`onChange${toUperChar(resourceName)}`]: onChange,
            [`onSave${toUperChar(resourceName)}`]: onSave,
            [`onReset${toUperChar(resourceName)}`]: onReset,
            onLogin: onLogin,
        };

        return (
            <>
            <Spinner loading={loading} />
            <Component {...props} {...resourceProps} />
            </>
        )
    }
};