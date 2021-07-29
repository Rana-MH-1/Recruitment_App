import React,{useState} from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const AddPost = () => {
    const [newPost, setNewPost] = useState({})

    const handleChange = (e)=>{
        setNewPost({...newPost,[e.target.name]:e.target.value})
    }

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
        Add a post
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add a post
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddPost
