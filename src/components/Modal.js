import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // déclaration state
  const [title,setTitle]=useState('')
  const [image,setImage]=useState('')
  const [description,setDescription]=useState('')
  const [rating,setRating]=useState(0)
  const [createdat,setCreatedat]=useState('')
  const [trailer,setTrailer]=useState('')
  console.log(title, image, description, createdat, trailer)
  const handleSubmit = () => {
    var object = {
        title: title,
        image: image,
        description: description,
        rating: rating,
        createdat: createdat,
        trailer: trailer,
    };
    localStorage.setItem('movie', JSON.stringify(object) )

  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie title</Form.Label>
              <Form.Control
                type="text"
                placeholder="movie-title"
                autoFocus
                onChange={(e)=>setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Poster</Form.Label>
              <Form.Control
                type="text"
                placeholder="movie-poster"
                autoFocus
                onChange={(e)=>setImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="movie-description"
                autoFocus
                onChange={(e)=>setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Suggest a rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="movie-rating"
                autoFocus
                onChange={(e)=>setRating(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Created at </Form.Label>
              <Form.Control
                type="date"
                placeholder="movie-history"
                autoFocus
                onChange={(e)=>setCreatedat(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Video URL </Form.Label>
              <Form.Control
                type="text"
                placeholder="movie-history"
                autoFocus
                onChange={(e)=>setTrailer(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;