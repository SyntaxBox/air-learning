import { Container, H2, P, Avatar } from "@/ui";
import { Rating } from "./Rating";
import { Money } from "./Money";
import avatarImage from "@/assets/avatar.png";

export function Reviews() {
  return (
    <Container>
      <div className="flex flex-col gap-8 items-center">
        <H2>What our costumers say</H2>
        <P>
          Revolutionary services that exceed expectations, offering cutting-edge
          solutions to meet diverse needs and drive success. services that
          exceed expectations.
        </P>
        <div className="flex flex-col md:flex-row max-w-[430px] md:max-w-[1200px] items-center justify-between gap-8">
          <Avatar src={avatarImage} alt="Avatar">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            aperiam iste.
          </Avatar>
          <Rating />
          <Money />
        </div>
      </div>
    </Container>
  );
}
