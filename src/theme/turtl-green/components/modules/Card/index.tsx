import { ModuleProps } from "@hubspot/cms-components";
import { LinkField, ModuleFields, TextField } from "@hubspot/cms-components/fields";
import { Button } from "../../atoms/Button/index.tsx";
import { Heading, Typography } from "../../atoms/Typography/index.tsx";

type LinkValue = {
  url?: { type: "EXTERNAL" | "CONTENT" | "FILE" | "EMAIL_ADDRESS" | "BLOG" | "CALL_TO_ACTION" | "WHATSAPP_NUMBER" | "PHONE_NUMBER" | "PAYMENT"; content_id: number; href: string };
  open_in_new_tab?: boolean;
  no_follow?: boolean;
  sponsored?: boolean;
  user_generated_content?: boolean;
};

export function Component({ fieldValues }: ModuleProps<{title: string, description: string, link: LinkValue}>) {
  return <div className="bg-neutral-200 rounded-lg p-8">
    <Heading as="h2" size="large">{fieldValues.title}</Heading>
    <Typography size="lg">{fieldValues.description}</Typography>
    <Typography color="secondary">{fieldValues.description}</Typography>
    <Button href={fieldValues.link?.url?.href || "#"} label="Learn More" />
  </div>
}

export const meta = {
  label: 'Card',
}

export const fields = (
  <ModuleFields>
    <TextField name="title" label="Title" />
    <TextField name="description" label="Description" />
    <LinkField
      name="link"
      label="Link"
      default={{
        url: { type: "EXTERNAL", content_id: 0, href: "https://example.com" },
        open_in_new_tab: false,
      }}
    />
  </ModuleFields>
)


