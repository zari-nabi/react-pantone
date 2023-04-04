import { Axios, baseUrl } from "./baseSetting";

/**
 * post data to the specified resource URL and data using a POST request.
 * @async
 * @function
 * @param {string} resourceUrl - The URL of the resource to delete data from.
 * @param {Object} data - The data to send in the POST request.
 * @returns {Promise<Object|null>} - A promise that resolves with the response data, or null if the request fails.
 */

export const postData = async(resourceUrl,data)=>{
    try{
        const response = await Axios.post(`${baseUrl}${resourceUrl}`,data);
        return response?.data
    }catch(error){
        console.log(error.responce);
        return null;
    }
};