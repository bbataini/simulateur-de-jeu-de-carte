import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Card,
  Image,
  Modal,
  Header,
  Label,
  Button,
  Icon,
} from "semantic-ui-react";

import orImg from "../Images/ImagesFilm/piece-de-monnaie.png";

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
          <Card color="red">
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
                  <Card.Description>
                    {film &&
                      film.attaque > 0 &&
                      "Attaque : " + film.attaque + " "}
                  </Card.Description>
                  <Card.Description>
                    {film &&
                      film.magique > 0 &&
                      "Magie : " + film.magique + " "}
                  </Card.Description>
                  <Card.Description>
                    {film && film.tire > 0 && "Tir : " + film.tire + " "}
                  </Card.Description>
                  <Card.Description>
                    {film &&
                      film.perceArmure > 0 &&
                      "Perçant : " + film.perceArmure + " "}
                  </Card.Description>
                  <Card.Description>
                    {film &&
                      film.briseArmure > 0 &&
                      "Brisant : " + film.briseArmure + " "}
                  </Card.Description>
                  <Card.Description>
                    {film && film.charge > 0 && "Charge : " + film.charge + " "}
                  </Card.Description>
                  <Card.Description>
                    {film &&
                      film.charge2 > 0 &&
                      "Charge final : " + film.charge2 + " "}
                  </Card.Description>
                </Grid.Column>

                <Grid.Column>
                  <Grid.Row>
                    <Card.Description>
                      {film && film.vie > 0 && "Pv : " + film.vie + " "}
                    </Card.Description>
                  </Grid.Row>
                  <Grid.Row>
                    <Card.Description>
                      {film &&
                        film.armure > 0 &&
                        "Armure : " + film.armure + " "}
                    </Card.Description>
                  </Grid.Row>
                  <Grid.Row>
                    <Card.Description>
                      {film &&
                        film.esquive > 0 &&
                        "Esquive : " + film.esquive + " "}
                    </Card.Description>
                  </Grid.Row>
                  <Grid.Row>
                    <Card.Description>
                      {film &&
                        film.bouclier > 0 &&
                        "Bouclier : " + film.bouclier + " "}
                    </Card.Description>
                    <Card.Description>
                      {film &&
                        film.inébranlable > 0 &&
                        "Inébranlable : " + film.inébranlable + " "}
                    </Card.Description>
                    <Card.Description>
                      {film &&
                        film.déplacement > 0 &&
                        "Déplacement : " + film.déplacement + " "}
                    </Card.Description>
                    <Card.Description>
                      {film &&
                        film.redéploiment > 0 &&
                        "Redéploiement : " + film.redéploiment + " "}
                    </Card.Description>
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Card.Content>

            <Card.Content>
              {film &&
                film.tag &&
                film.tag.map((tag, i) => {
                  //const {label, icon} = tag
                  return (
                    <Label image key={i}>
                      <Image src={tag && tag.icon} />
                      {tag && tag.label}
                    </Label>
                  );
                })}
            </Card.Content>

            <Card.Content extra>
              {film && film.coutOr > 0 && (
                <Label  basic>
                  {film.coutOr} 
                  <Image spaced='left' src={orImg} />
                </Label>
              )}

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
