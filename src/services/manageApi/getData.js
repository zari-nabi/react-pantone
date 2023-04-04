import { Axios, baseUrl } from "./baseSetting";

/**
 * Fetches data from the specified resource URL using a GET request.
 * @async
 * @function
 * @param {string} resourceUrl - The URL of the resource to fetch data from.
 * @returns {Promise<Object|null>} - A promise that resolves with the response data, or null if the request fails.
 */

export const getData = async(resourceUrl)=>{
    try{
        const response = await Axios.get(`${baseUrl}${resourceUrl}`);
        return response?.data
    }catch(error){
        console.log(error.message);
        return null;
    }
};

export const getDataById = async(resourceUrl,id)=>{
    try{
        const response = await Axios.get(`${baseUrl}${resourceUrl}/${id}`);
        return response?.data
    }catch(error){
        console.log(error.message);
        return null;
    }
};