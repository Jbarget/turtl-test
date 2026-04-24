import { ModuleProps } from "@hubspot/cms-components";
import { LinkField, ModuleFields, TextField } from "@hubspot/cms-components/fields";
import { Card } from "./Card.tsx";
import CardFieldsType from "./fields.type.ts";

export function Component({ fieldValues }: ModuleProps<CardFieldsType>) {
  return (
    <Card
      title={fieldValues.title}
      description={fieldValues.description}
      href={fieldValues.link?.url?.href}
    />
  );
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


