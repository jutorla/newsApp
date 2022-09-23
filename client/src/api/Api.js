import axios from 'axios';


function getAxiosRequest(){
    return axios.create({
        baseURL:ROOT_URL,
        timeout:REQUEST_TIMEOUT,
        headers:{
            'Content-Type':'application/json',
        },
    });
}
const ROOT_URL="http://localhost:5000/"
const REQUEST_TIMEOUT="250000"
const Api={
    async news(){
        try{
            const url=ROOT_URL+"news"
           return await getAxiosRequest().get(url);
        }
        catch (error){
            return (error);
        }
    },
    async archived(){
        try{
            const url=ROOT_URL+"archivednews"
           return await getAxiosRequest().get(url);
        }
        catch (error){
            return (error);
        }
    },
    async archiveNew(id){
        try{
            const url=ROOT_URL+"archiveNew/"+id
           return await getAxiosRequest().post(url);
        }
        catch (error){
            return (error);
        }
    },
    async unArchiveNew(id){
        try{
            const url=ROOT_URL+"unArchiveNew/"+id
           return await getAxiosRequest().post(url);
        }
        catch (error){
            return (error);
        }
    }
}
export default Api;