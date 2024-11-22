import type { Game } from "../../models/Game";
import { Card, CardBody, CardFooter, CardImage } from "./style";

export default function GameComponent(props: Game) {
  return (
    <Card>
      <CardImage>
        <img src={props.image} alt={props.name} />
      </CardImage>
      <CardBody>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </CardBody>
<CardFooter>

</CardFooter>
    </Card>
  );
}
