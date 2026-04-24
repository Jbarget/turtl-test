import { Button } from "../../atoms/Button/index.tsx";
import { Heading, Typography } from "../../atoms/Typography/index.tsx";

export type CardProps = {
  title?: string;
  description?: string;
  href?: string;
};

export function Card({ title, description, href }: CardProps) {
  return (
    <div className="bg-neutral-200 rounded-lg p-8">
      <Heading as="h2" size="large">
        {title}
      </Heading>
      <Typography size="lg">{description}</Typography>
      <Typography color="secondary">{description}</Typography>
      <Button href={href || "#"} label="Learn More" />
    </div>
  );
}

