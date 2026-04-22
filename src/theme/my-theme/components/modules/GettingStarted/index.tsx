import { RichText, type ModuleProps } from '@hubspot/cms-components';
import {
  ImageField,
  LinkField,
  ModuleFields,
  RichTextField,
  TextField,
  UrlField,
} from '@hubspot/cms-components/fields';
import logo from '../../../assets/sprocket.svg';
import { Button } from '../../atoms/Button/index.js';

type LinkValue = {
  url?: { type: string; content_id: number; href: string };
  open_in_new_tab?: boolean;
  no_follow?: boolean;
  sponsored?: boolean;
  user_generated_content?: boolean;
};

type GettingStartedFieldValues = {
  logo: { src: string; alt?: string; width?: number; height?: number };
  headline: string;
  gettingStarted: string;
  examplesUrl?: { href?: string };
  docsUrl?: { href?: string };
  examplesLink?: LinkValue;
  docsLink?: LinkValue;
};

export function Component({ fieldValues }: ModuleProps<GettingStartedFieldValues>) {
  const { src, alt, width, height } = fieldValues.logo;

  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center gap-6 bg-accent px-6 text-center font-sans text-white">
      <img src={src} alt={alt} width={width} height={height} />
      <h1 className="text-4xl font-semibold tracking-tight">
        {fieldValues.headline}
      </h1>
      <div className="inline-block text-primary font-bold text-sm">
        <RichText className='' fieldPath="gettingStarted" />
      </div>
      <div className="mt-2 flex items-center justify-center gap-5">
        <Button
          variant="primary"
          label="Examples"
          href={fieldValues.examplesLink?.url?.href || fieldValues.examplesUrl?.href || '#'}
        />
        <Button
          variant="secondary"
          label="Read the Docs"
          href={fieldValues.docsLink?.url?.href || fieldValues.docsUrl?.href || '#'}
        />
      </div>
    </div>
  );
}

const richTextFieldDefaultValue = `
  <div>
    <div>
      <span>
        Deploy to your theme by running <pre>npm run deploy</pre> from the root directory
      </span>
      </div>
  </div>
`;

export const fields = (
  <ModuleFields>
    <ImageField
      name="logo"
      label="Logo"
      default={{ src: logo, height: 100, alt: 'HubSpot logo' }}
      resizable={true}
    />
    <TextField
      name="headline"
      label="Headline"
      default="Getting Started with CMS React"
    />
    <RichTextField
      name="gettingStarted"
      label="Getting Started"
      default={richTextFieldDefaultValue}
    />
    <UrlField
      name="examplesUrl"
      label="Examples URL"
      default={{ href: 'https://github.com/HubSpot/cms-react/tree/main/examples' }}
      supportedTypes={["EXTERNAL"]}
    />
    <UrlField
      name="docsUrl"
      label="Docs URL"
      default={{ href: 'https://github.hubspot.com/cms-react/' }}
      supportedTypes={["EXTERNAL"]}
      />
      <LinkField 
      name="examplesLink"
      label="Examples Link"
      default={{ url: { type: 'EXTERNAL', content_id: 0, href: 'https://github.com/HubSpot/cms-react/tree/main/examples' } }}

      />
      <LinkField
      name="docsLink"
      label="Docs Link"
      default={{ url: { type: 'EXTERNAL', content_id: 0, href: 'https://github.hubspot.com/cms-react/' } }}
      />
  </ModuleFields>
);

export const meta = {
  label: 'Getting Started Section',
};
