import React from "react";
import { Link } from "react-router-dom";
import style from "./ShowCard.module.css";
import Countdown from "react-countdown";
import { Card } from "react-bootstrap";
const ShowCard = ({
  id,
  name,
  genre,
  length,
  image,
  province,
  summery,
  ticketsQty,
  rated,
  date,
  time,
  score,
  idV,
}) => {
  let timer = ` dias ${date} ${time}`;

  return (
    <div className={style.container}>
      {idV ? (
        <Link
          to={`/showDetail/${btoa(id)}/${btoa(idV)}`}
          style={{ textDecoration: "none" }}
        >
          <Card
            style={{ width: "22rem" }}
            bg="light"
            border="light"
            text="dark"
          >
            <Card.Img variant="top" style={{ height: "22rem" }} src={image} />
            <Card.Body>
              <Card.Title className={style.title}>{name}</Card.Title>
              <Card.Text>
                <p className={style.subtitle}>{province}</p>
                <p className={style.subtitle}>El espectaculo comienza en: </p>
                <Countdown date={timer}>
                  <div>
                    <p>La obra ya ha comenzado!</p>
                  </div>
                </Countdown>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ) : (
        <div className={style.cardContainer}>
          <Link to={`/showDetailHome/${id}`} style={{ textDecoration: "none" }}>
            <Card
              style={{ width: "22rem" }}
              bg="light"
              border="light"
              text="dark"
            >
              <Card.Img variant="top" style={{ height: "22rem" }} src={image} />
              <Card.Body>
                <Card.Title className={style.title}>{name}</Card.Title>
                <Card.Text>
                  <p className={style.subtitle}>{province}</p>
                  <p className={style.subtitle}>El espectaculo comienza en: </p>
                  <Countdown date={timer}>
                    <div>
                      <p>La obra ya ha comenzado!</p>
                    </div>
                  </Countdown>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShowCard;