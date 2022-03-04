import axios from 'axios';


const api = axios.create({
    
    headers: {
      Accept: 'application/json'
    }
  });

const createBucketApi = (bucketName) =>{
    return api.post("https://localhost:5001/s3/Create?bucketName="+bucketName)
}

const uploadFile = (bucketName,formData,handleUploadProgress = ()=>{}) =>{
    return api.post("https://localhost:5001/s3/AddFile?bucketName="+bucketName, formData, {
            onUploadProgress: handleUploadProgress
          })
}

export{
    createBucketApi,
    uploadFile
}