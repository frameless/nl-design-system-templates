'use client';

import {
  Article,
  Button,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Heading2,
  Link,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
  Textbox,
  Textarea,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { IconChevronRight, IconX } from '@tabler/icons-react';

import '@/app/styling/css/wmebv.css';
import '@/app/styling/css/klachtenformulier-niet-ingelogd.css';
import '@utrecht/design-tokens/dist/index.css';

import { useEffect } from 'react';

export default function home() {
  const stepProgressLabel = 'Stap 1 van 3';
  const stepLabel = 'Klacht over de gemeente doorgeven';
  const websiteLabel = 'gemeente voorbeeld';

  useEffect(() => {
    if (typeof document?.title === 'string') {
      document.title = `${stepProgressLabel}: ${stepLabel} - ${websiteLabel}`;
    }
  }, []);

  return (
    <Page>
      <ExampleHeader />
      <ExampleNavigation />
      <PageContent className="voorbeeld-page-content-flex">
        <Article id="main" className="voorbeeld-article-space ">
          <Heading1>Klacht over de gemeente doorgeven</Heading1>
          <Paragraph lead>Stap 1 van 3</Paragraph>
          <Paragraph>Vul de vakjes met een * altijd in. Anders kunt u niet verder.</Paragraph>

          <form>
            <FormLabel>
              <Heading2>Uw klacht </Heading2>
            </FormLabel>
            <Fieldset>
              <FormField className="voorbeeld-formfield-radio-button">
                <FieldsetLegend>Weet u voor welke afdeling de medewerker werkt? *</FieldsetLegend>
                {/* TODO: should only the radiobutton be clickable? Or paragraph as well? */}

                <div className="voorbeeld-radio-button">
                  <RadioButton></RadioButton>
                  <Paragraph>Publiekzaken: bijvoorbeeld paspoort of trouwen of de wachttijd als u ons belt.</Paragraph>
                </div>

                <div className="voorbeeld-radio-button">
                  <RadioButton></RadioButton>
                  <Paragraph>Stadsbedrijven: bijvoorbeeld ophalen afval, parken en bomen of sportplekken.</Paragraph>
                </div>

                <div className="voorbeeld-radio-button">
                  <RadioButton></RadioButton>
                  <Paragraph>Ruimte: bijvoorbeeld verkeer, bouwen, energie en klimaat of speelruimte.</Paragraph>
                </div>

                <div className="voorbeeld-radio-button">
                  <RadioButton></RadioButton>
                  <Paragraph>Werk en Inkomen: bijvoorbeeld bijstand, schulddienstverlening of Wmo.</Paragraph>
                </div>

                <div className="voorbeeld-radio-button">
                  <RadioButton></RadioButton>
                  <Paragraph>
                    Vergunningen, Toezicht en Handhaving: bijvoorbeeld handhavers (boa’s) parkeerboetes, of
                    vergunningen.
                  </Paragraph>
                </div>

                <div className="voorbeeld-radio-button">
                  <RadioButton></RadioButton>
                  <Paragraph>Anders of ik weet het niet</Paragraph>
                </div>
              </FormField>

              <FormField>
                <FieldsetLegend>Over wie gaat uw klacht?</FieldsetLegend>
                <FormFieldDescription>Bijvoorbeeld de naam van een medewerker of een afdeling.</FormFieldDescription>
                <Textbox></Textbox>
              </FormField>

              <FormField>
                <FieldsetLegend>Wat is uw klacht? *</FieldsetLegend>
                {/* <FormFieldDescription></FormFieldDescription> */}
                {/* Deze staat er in het ontwerp niet bij, is die niet nodig? 
                Wellicht een hint voor de gebruiker: omschrijf uw klacht in maximaal 140 karakters */}
                <Textarea></Textarea>
              </FormField>

              <FormField>
                <FieldsetLegend>Wanneer gebeurde dit? *</FieldsetLegend>
                <FormFieldDescription>Geef de datum(s) door waarover uw klacht gaat.</FormFieldDescription>
                <Textarea></Textarea>
              </FormField>

              <FormField>
                <FieldsetLegend>Hoe laat?</FieldsetLegend>
                <FormFieldDescription>Geef het tijdstip(en) door waarover uw klacht gaat.</FormFieldDescription>
                <Textarea></Textarea>
              </FormField>

              <FormField>
                <FieldsetLegend>Wat wilt u dat wij doen om uw klacht op te lossen? *</FieldsetLegend>
                {/* <FormFieldDescription></FormFieldDescription> */}
                {/* Deze staat er in het ontwerp niet bij, is die niet nodig? 
                Wellicht een hint voor de gebruiker: omschrijf de gewenste oplossing in maximaal 140 karakters */}
                <Textarea></Textarea>
              </FormField>
            </Fieldset>
          </form>

          <Button appearance="primary-action-button">
            Volgende stap
            <IconChevronRight />
          </Button>

          <Link className="voorbeeld-link-stoppen">
            <IconX />
            Stoppen met het formulier
          </Link>

          {/* TODO: <PreFooterNav/> */}

          {/* TODO: sidenav */}
          <div className="voorbeeld-side-content">
            <Heading2>Voortgang</Heading2>
            <UnorderedList>
              <UnorderedListItem>Uw klacht</UnorderedListItem>
              <UnorderedListItem>Uw gegevens</UnorderedListItem>
              <UnorderedListItem>Bijlage toevoegen</UnorderedListItem>
              <UnorderedListItem>Overzicht</UnorderedListItem>
            </UnorderedList>
          </div>
        </Article>
      </PageContent>
      <ExampleFooter />
    </Page>
  );
}
