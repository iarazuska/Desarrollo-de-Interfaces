import { useState, useEffect } from "react"; // ✅ Elimina `React`
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    fetch("/noticias.json")
      .then((response) => response.json())
      .then((data) => {
        const noticiaEncontrada = data[parseInt(id, 10)]; 
        if (noticiaEncontrada) {
          setNoticia(noticiaEncontrada);
        }
      })
      .catch((error) => console.error("Error al cargar noticia:", error));
  }, [id]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{noticia.titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {noticia.categoria} - {noticia.fecha} - {noticia.autor}
        </Card.Subtitle>
        <Card.Text>{noticia.contenido}</Card.Text>
        <Button variant="primary" onClick={() => navigate("/")}>
          Volver al listado
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsDetail;