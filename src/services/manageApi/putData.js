import { Axios, baseUrl } from "./baseSetting";

/**
 * update data from the specified resource URL and id using a PUT request.
 * @async
 * @function
 * @param {string} resourceUrl - The URL of the resource to put data from.
 * @param {number} id - The id of the resource to delete put from.
 * @returns {Promise<Object|null>} - A promise that resolves with the response data, or null if the request fails.
 */
export const putData = async({resourceUrl,id})=>{
    try{
        const response = await Axios.put(`${baseUrl}${resourceUrl}/${id}`);
        return response
    }catch(error){
        console.log(error.message);
        return null;
    };
};