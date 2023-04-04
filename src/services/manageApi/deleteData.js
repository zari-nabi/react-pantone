import { Axios, baseUrl } from "./baseSetting";

/**
 * delete data from the specified resource URL and id using a DELETE request.
 * @async
 * @function
 * @param {string} resourceUrl - The URL of the resource to delete data from.
 * @param {number} id - The id of the resource to delete data from.
 * @returns {Promise<Object|null>} - A promise that resolves with the response data, or null if the request fails.
 */
export const deleteData = async({resourceUrl,id})=>{
    try{
        const response = await Axios.delete(`${baseUrl}${resourceUrl}/${id}`);
        return response
    }catch(error){
        console.log(error.message);
        return null;
    };
};