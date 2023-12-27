import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Card,
  Image,
  Modal,
  Header,
  Label,
  Rating,
  Button,
} from "semantic-ui-react";

function TroupCard(props) {
  const { film, setIdCardRemove } = props;

  const [modalPath, setModalPath] = useState(false);

  // cookies.set(film.titre, 1, { path: "/" });
  // console.log(cookies.get('myCat')); // Pacman

  return (
    <Grid.Column>
      <Modal
        closeIcon
        open={modalPath}
        onClose={() => setModalPath(false)}
        onOpen={() => setModalPath(true)}
        trigger={
          <Card>
            <Card.Content>
              <Card.Header>{film && film.titre}</Card.Header>

              <Card.Meta></Card.Meta>
              <Card.Description>
                <strong>{film.description}</strong>
              </Card.Description>
            </Card.Content>

            <Card.Content>
              <Grid columns={2}>

                <Grid.Column>
                  <Grid.Row>
                    <Card.Description>
                      {film && film.vie > 0 && "Pv : " + film.vie + " "}
                    </Card.Description>
                  </Grid.Row>
                  <Grid.Row>
                    <Card.Description>
                      {film && film.armure > 0 && "Armure : " + film.armure + " "}
                    </Card.Description>
                  </Grid.Row>
                  <Grid.Row>
                    <Card.Description>
                      {film && film.esquive > 0 && "Esquive : " + film.esquive + " "}
                    </Card.Description>
                  </Grid.Row>
                  <Grid.Row>
                    <Card.Description>
                      {film && film.coutOr > 0 && "Pv : " + film.vie + " "}
                    </Card.Description>
                  </Grid.Row>
                </Grid.Column>

                <Grid.Column>
                  <Card.Description>
                    {film &&
                      film.coutOr > 0 &&
                      "Attaque : " + film.attaque + " "}
                  </Card.Description>
                </Grid.Column>

              </Grid>
            </Card.Content>

            <Card.Content extra>
              {film && film.coutOr > 0 && "Or :" + film.coutOr + " "}
              {film &&
                film.coutNourriture > 0 &&
                "Nourriture :" + film.coutOr + " "}
              {film && film.coutBois > 0 && "Bois :" + film.coutOr + " "}
              {film && film.coutFer > 0 && "Fer :" + film.coutOr + " "}
              {film && film.coutAcier > 0 && "Acier :" + film.coutOr + " "}
            </Card.Content>
          </Card>
        }
      >
        <Header icon="film" content={film && (film.titre2 || film.titre)} />
        <Modal.Content image>
          <Image size="medium" src={film && film.image} />
          <Modal.Description>
            <Header>
              <Header.Content>
                {film && film.titre} ({film && film.année})
                <Header.Subheader>{film && film.time}</Header.Subheader>
              </Header.Content>
            </Header>
            {/* <Header as="h5">{film.time}</Header> */}
            <p>{film && film.description}</p>
            <p>{film && film.description2}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {film &&
            film.tag &&
            film.tag.map((tag, i) => {
              //const {label, icon} = tag
              return (
                <Label as="a" image key={i}>
                  <Image src={tag && tag.icon} />
                  {tag && tag.label}
                </Label>
              );
            })}
        </Modal.Actions>
      </Modal>
      <Button
        primary
        onClick={(e, { value }) => {
          setIdCardRemove(film.id);
        }}
      >
        Retirer
      </Button>
      {film.key}
    </Grid.Column>
  );
}

export default TroupCard;
