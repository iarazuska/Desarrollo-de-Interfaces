import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pelis from './Pelis';

const MovieModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.item;

  if (!movie) return null;

  return (
    <Modal show={true} onHide={() => navigate(-1)}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{movie.sinopsis}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => navigate(-1)}>Cerrar</Button>
      </Modal.Footer>
    </Modal>


  );
};

export default MovieModal;