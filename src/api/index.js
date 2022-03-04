import axios from 'axios';


const api = axios.create({
    baseURL: 'https://localhost:5001/s3/',
    headers: {
      Accept: 'application/json'
    }
  });

const createBucketApi = (bucketName) =>{
    return api.post("Create?bucketName="+bucketName)
}

const uploadFile = (bucketName,formData,handleUploadProgress = ()=>{}) =>{
    return api.post("AddFile?bucketName="+bucketName, formData, {
            onUploadProgress: handleUploadProgress
          })
}

export{
    createBucketApi,
    uploadFile
}