import type { Game } from "../../models/Game";
import { Card, CardBody, CardFooter, CardImage } from "./style";

export default function GameComponent(props: Game) {
  return (
    <Card>
      <CardImage>
        <img src={props.steam_image} alt={props.gameName} />
      </CardImage>
      <CardBody>
        <h2>{props.gameName}</h2>
        <p>{props.steam_description}</p>
      </CardBody>
<CardFooter>

</CardFooter>
    </Card>
  );
}
