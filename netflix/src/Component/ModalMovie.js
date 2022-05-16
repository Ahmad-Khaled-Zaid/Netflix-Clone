import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function MovieModal(props) {
  return (
    <>
      <Modal show={props.modalState1} onHide={!props.modalState1}>
        <Modal.Header>
          <Modal.Title>{props.MoviesData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.MoviesData.overview}</Modal.Body>
        <img
          src={`http://image.tmdb.org/t/p/w500/${props.MoviesData.poster_path}`}
          alt={props.MoviesData.title}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={props.showModal}>
            Close
          </Button>
          <Button variant="primary" onClick={props.showModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MovieModal;
