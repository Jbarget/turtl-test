import { RichText } from '@hubspot/cms-components';
import {
  ImageField,
  ModuleFields,
  RichTextField,
  TextField,
} from '@hubspot/cms-components/fields';
import logo from '../../../assets/sprocket.svg';

export function Component({ fieldValues }) {
  const { src, alt, width, height } = fieldValues.logo;

  return (
    <div className="flex min-h-[500px] h-[50vh] flex-col items-center justify-center gap-6 bg-[var(--color-accent)] px-6 text-center font-sans text-[var(--palette-white)]">
      <img src={src} alt={alt} width={width} height={height} />
      <h1 className="text-4xl font-semibold tracking-tight">
        {fieldValues.headline}
      </h1>
      <div className="[&_pre]:inline-block [&_pre]:text-[var(--color-primary)] [&_pre]:font-bold [&_pre]:text-sm">
        <RichText fieldPath="gettingStarted" />
      </div>
      <div className="mt-2 flex items-center justify-center gap-5">
        <a
          className="rounded-md bg-green-500 px-5 py-2.5 no-underline transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--palette-white)]"
          href="https://github.com/HubSpot/cms-react/tree/main/examples"
        >
          Examples
        </a>
        <a
          className="rounded-md bg-green-500 px-5 py-2.5 no-underline transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--palette-white)]"
          href="https://github.hubspot.com/cms-react/"
        >
          Read the Docs
        </a>
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
  </ModuleFields>
);

export const meta = {
  label: 'Getting Started with CMS',
};
