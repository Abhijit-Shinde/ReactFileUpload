import React,{useState} from 'react';
import './Create.css';
import axios from 'axios';
import{Card, Button,InputGroup, FormControl} from 'react-bootstrap'
import {createBucketApi} from '../../api/index'

function Create(){

    const [bucketName, setBucketName] = useState(null);
    const [apiResponse, setApiResponse] = useState(null);
    const [inputError, setInputError] = useState(null);

    const createHandler = (e) =>{

        createBucketApi(bucketName).then((response) => {
                setApiResponse(response.data.message)
            })
        
    }

    const checkValidation = () =>{
        if(bucketName==='' || bucketName==null){
            setInputError("Bucket Name is Required")
        }
        else{
            createHandler()
        }
    }

    return(
        <div>
            <Card className="create-main-div">
                <Card.Body>
                    <Card.Title className="create-title">
                        <h6><b>Create Bucket</b></h6>
                    </Card.Title>

                    <Card.Text>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Bucket Name"
                                aria-describedby="basic-addon2"
                                id="inputField" type="text"  name="bucketName" onChange={(event)=>{setBucketName(event.target.value)
                                setApiResponse('')
                            }}
                                required
                            />
                        </InputGroup>
                        
                        <div className='mb-3'>
                            <span style={{ color: "red"}}>{bucketName?apiResponse:inputError}</span>
                        </div>

                        <Button variant="outline-success" id="button-addon2" onClick={checkValidation}>
                            Create
                        </Button>

                    </Card.Text>
                            
                </Card.Body>
            </Card>
        </div>
    )
}

export default Create;