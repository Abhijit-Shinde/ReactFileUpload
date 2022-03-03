import React,{useState} from "react";
import './Home.css';
import{Card, Button, CardGroup, Modal} from 'react-bootstrap'
import '../../Services/bootstrap/css/bootstrap.min.css';
// import '../../node_modules/react-bootstrap-icons/dist/icons/x-circle.js'
import '../../../node_modules/react-bootstrap-icons/dist/icons/x-circle'
import Create from '../CreateBucket/Create';
import Upload from '../UploadFile/Upload';
import Bucket from "../../images/createBucket.png"
import Cloud from "../../images/images.png"

const Home = () =>{

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [show2, setShow2] = useState(false);
    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);

    return(
        <div>
            <CardGroup className='card-group'>

                    <Card style={{ width: '18rem' }} className="creatCard">
                        <div class="card-header">
                            <b>Create Bucket</b>
                        </div>   
                        <div class="card-img">
                        <Card.Img variant="top" src={Bucket} className="img-bucket"/>
                        </div>

                        <Card.Body className="cardBody">
                            <Card.Text className="text-create">
                            Create your AWS S3 Bucket to upload your file on it
                            </Card.Text>
                            <Button variant="primary" onClick={handleShow2} className="button-create" >Create Bucket</Button>
                        </Card.Body>

                        <div class="card-footer text-muted">
                            .
                        </div>        
                    </Card>

                    <Card style={{ width: '18rem' }} className="uploadCard">
                        <div class="card-header">
                            <b>Upload File</b>
                        </div>  
                        <div class="card-img">
                        <Card.Img variant="top" src={Cloud} className="img-bucket"/>
                        </div>

                        <Card.Body className="cardBody">
                            <Card.Text className="text-create">
                            Simple multi-part system to upload CSV Files on AWS S3 bucket
                            </Card.Text>
                            <Button variant="primary" onClick={handleShow} className="button-create" >Upload File</Button>
                        </Card.Body>
                        
                        <div class="card-footer text-muted">
                            .
                        </div> 
                    </Card>

            </CardGroup>

                <Modal show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body className="create-modal-body">
                        <button id='close' type="button"class="btn-close btn-close-white" onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-x-lg">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                            </svg>
                        </button>
                        <Upload />
                    </Modal.Body>
                </Modal>

                <Modal show={show2} onHide={handleClose2}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    backdrop="static"
                    className="CreateBucket-modal"
                >
                    <Modal.Body className="create-modal-body">
                        <button id='close' type="button"class="btn-close btn-close-white" onClick={handleClose2}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                            </svg>
                        </button>
                        <Create/>
                    </Modal.Body>
                </Modal>
        </div>

        
    )
}

export default Home;