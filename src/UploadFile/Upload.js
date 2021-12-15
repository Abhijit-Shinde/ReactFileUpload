import React, { Component } from 'react';
import axios from 'axios';
import {ProgressBar, Button, InputGroup, FormControl} from 'react-bootstrap'
import "./Upload.css"
import '../bootstrap/css/bootstrap.min.css';


class FileUploadComponent extends Component {
    state = {
            selectedFile:null,
            emptyFileErr:null,
            fileUploadedSucessfully:null,
            status: '',
            progress:0,
            bucketName:'',
            emptyBucErr:null
        }
    
    selectFileHandler = (event)=>{
       this.setState({selectedFile: event.target.files[0],
          progress:0,
          fileUploadedSucessfully:null,
          emptyFileErr:""
        },
          function(){
            console.log("selectedFile:",this.state.selectedFile);}
         ); 
    };

    // method contain logic to upload file
    uploadHandler = () => {
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        
        this.setState({emptyFileErr:"",emptyBucErr:""})
        // if(this.state.selectedFile!=null){
          
           axios.post("https://localhost:5001/s3/AddFile?bucketName="+this.state.bucketName, formData, {
            onUploadProgress: progressEvent => {
              this.setState({
                progress: ((70* progressEvent.loaded) / progressEvent.total*100)
              })
            }
          })
            .then((response) => { 
              this.setState({status:`upload success ${response.data}`});
              this.setState({fileUploadedSucessfully:true});
              this.setState({progress:100});
            })
            .catch((error) => { 
              this.setState({status:`${error}`});
              this.setState({progress:0});
              this.setState({fileUploadedSucessfully:false});
            })
          // }
    }
    
    checkValidation=(e)=>{
      let formValid = true;
      if(this.state.bucketName==null || this.state.bucketName===''){
        this.setState({emptyBucErr:"Please Enter Bucket Name."})
        formValid=false;
      }
      if(this.state.selectedFile==null || this.state.selectedFile===''){
        this.setState({emptyFileErr:"Please Select a File."})
        formValid=false;
      }
      if(formValid){
        
        this.uploadHandler();
      }
    }

    fileData=()=>{
      if(this.state.selectedFile!=null && this.state.fileUploadedSucessfully!==true){
        return(
          <div className="file-details">
            <h6><b>File Details</b></h6>
            <p>File Name : {this.state.selectedFile.name}</p>
            <p>File Type :{this.state.selectedFile.type}</p>
            <p>File Last Modified : {this.state.selectedFile.lastModifiedDate.toDateString()}</p>
            <p>File Size : {(this.state.selectedFile.size / (1024*1024)).toFixed(2)} MB</p>
          </div>
          
        );
      }
      else if(this.state.fileUploadedSucessfully){
        return(
          <div>
            <h4>File Uploaded Sucessfully</h4>
          </div>
        );

      }
    }

    handleChange= (e)=> {  
      this.setState({[e.target.name]:e.target.value});  
      this.setState({emptyBucErr:""})
      }  
      
    render() {
        return (
            <div className="uploadContainer" >
              <div class="card text-center">
                  <div class="card-body" >
                    <h6 class="card-title"><b>Upload File</b></h6>
                    <InputGroup className="mb-5">
                      <InputGroup.Text id="basic-addon1">Bucket Name</InputGroup.Text>
                      <FormControl
                        placeholder="s3-Bucket-Name"
                        id="inputField" type="text"  name="bucketName" onChange={this.handleChange}
                        value={this.state.bucketName}
                      />
                    </InputGroup>
                    <div class="mb-3">
                        <span style={{ color: "red"}}>{this.state.emptyBucErr}</span>
                    </div>

                    <input class="form-control" type="file" id="formFile" onChange={this.selectFileHandler} />

                    <div class="mb-4 mt-3">
                      <span style={{ color: "red"}}>{this.state.emptyFileErr}</span>
                    </div>
                    
                    <Button variant="outline-success" id="button-addon2" onClick={this.checkValidation}>Upload</Button>
                    
                    <div className="Progbar">
                        <ProgressBar animated now={this.state.progress} label={`${this.state.progress}%`}/>
                    </div>
                    
                  </div>
                  <div>{this.state.fileUploadedSucessfully===false?<span style={{ color: "red"}} >{this.state.status}</span>:this.fileData()}</div>
                  <br/>
              </div> 
            </div>
        );
    }
}

export default FileUploadComponent;