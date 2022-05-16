import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MovieModal from "./ModalMovie";
import { useState } from "react";
function MoviesList(props) {
  let [modalState, setModalState] = useState(false);
  function showModal() {
    setModalState(!modalState);
  }
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={`http://image.tmdb.org/t/p/w500/${props.MoviesData.poster_path}`}
          alt={props.MoviesData.poster_path}
        />
        <Card.Body>
          <Card.Title>{props.MoviesData.title}</Card.Title>
          <Card.Text>{props.MoviesData.overview}</Card.Text>
          <Button variant="primary" onClick={showModal}>
            Add to favorite
          </Button>
        </Card.Body>
      </Card>

      {
        <MovieModal
          showModal={showModal}
          MoviesData={props.MoviesData}
          modalState1={modalState}
        />
      }
    </>
  );
}
export default MoviesList;
