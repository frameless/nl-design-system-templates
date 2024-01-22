'use client';

import {
  Article,
  Button,
  Document,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldDescription,
  FormFieldErrorMessage,
  FormLabel,
  Heading1,
  Heading2,
  Link,
  Page,
  PageContent,
  Paragraph,
  RadioButton,
  Select,
  SelectOption,
  Textarea,
  Textbox,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import '@/app/styling/css/form-page.css';
import BacklinkIcon from '@/app/styling/assets/backlink-icon.svg';
import { useForm } from 'react-hook-form';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import { ExampleFooterFocus } from '@/components/ExampleFooter/ExampleFooterFocus/ExampleFooterFocus';
import { FormFieldTextarea } from '@/components/FormFieldTextarea';
import { FormFieldTextbox } from '@/components/FormFieldTextbox';
import {
  messageValidation,
  homeTownValidation,
  streetValidation,
  nameValidation,
  emailValidation,
  phoneValidation,
} from '@/utils/validation';

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ [key: string]: string }>({ reValidateMode: 'onBlur' });

  const descriptionField = register('description', {
    required: 'Vul een omschrijving in',
  });
  const placeField = register('place', homeTownValidation);
  const streetField = register('street', streetValidation);
  const heightField = register('height', {
    required: 'Vul een hoogte in',
    minLength: { value: 4, message: 'Min length is 4' },
  });
  const nameField = register('name', nameValidation);
  const emailField = register('email', emailValidation);
  const phoneField = register('phone', phoneValidation);

  return (
    <Document>
      <Page>
        <ExampleHeaderFunnel />
        <PageContent className="voorbeeld-page-content-flex">
          <Article className="voorbeeld-article-space">
            <Link className="example--back-link" href="./">
              <BacklinkIcon />
              &nbsp;&nbsp;<span className="example--underlined">Terug</span>
            </Link>
            <Heading1 className="utrecht-heading-1">Melding openbare ruimte</Heading1>
            <Paragraph lead className="voorbeeld-paragraph-lead">
              Vul alle velden in. Als een veld optioneel is, staat dit erbij
            </Paragraph>
            <Heading2 utrecht-heading-2>Wat wilt u melden?</Heading2>
            <Paragraph className="voorbeeld-title-paragraph">Kies een categorie die bij uw melding past.</Paragraph>
            <form
              method="POST"
              noValidate
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <FormField invalid={!!errors.mainCategory}>
                <Paragraph>
                  <FormLabel className="voorbeeld-form-label" aria-label="Hoofdcategorie" htmlFor="mainCategory">
                    Hoofdcategorie
                  </FormLabel>
                </Paragraph>
                <Select
                  defaultValue=""
                  id="mainCategory"
                  {...register('mainCategory', {
                    required: 'Dit is verplicht',
                  })}
                  placeholder="Kies een hoofdcategorie"
                  invalid={!!errors.mainCategory}
                  className="voorbeeld-svg-arrow"
                >
                  <SelectOption disabled value="">
                    Kies een hoofdcategorie
                  </SelectOption>
                  <SelectOption value="1">Option #1</SelectOption>
                  <SelectOption value="2">Option #2</SelectOption>
                  <SelectOption value="3">Option #3</SelectOption>
                  <SelectOption value="4">Option #4</SelectOption>
                </Select>
                <FormFieldDescription invalid={!!errors.mainCategory}>
                  {errors.mainCategory?.message}
                </FormFieldDescription>
              </FormField>
              <FormField invalid={!!errors.subCategory}>
                <Paragraph>
                  <FormLabel className="voorbeeld-form-label" aria-label="Subcategorie" htmlFor="subCategory">
                    Subcategorie
                  </FormLabel>
                </Paragraph>
                <Select
                  defaultValue=""
                  id="subCategory"
                  {...register('subCategory', {
                    required: 'Dit is verplicht',
                  })}
                  placeholder="Kies een subcategorie"
                  invalid={!!errors.subCategory}
                  className="voorbeeld-svg-arrow"
                >
                  <SelectOption disabled value="">
                    Kies een subcategorie
                  </SelectOption>
                  <SelectOption value="1">Option #1</SelectOption>
                  <SelectOption value="2">Option #2</SelectOption>
                  <SelectOption value="3">Option #3</SelectOption>
                  <SelectOption value="4">Option #4</SelectOption>
                </Select>
                <FormFieldDescription invalid={!!errors.subCategory}>
                  {errors.subCategory?.message}
                </FormFieldDescription>
              </FormField>
              <FormFieldTextarea
                description="Beschrijf hier wat er aan de hand is en eventueel wat er aan gedaan kan worden."
                className="voorbeeld-textarea"
                id={`field-${descriptionField.name}`}
                aria-label="Omschrijving"
                label="Omschrijving"
                invalid={!!errors[descriptionField.name]}
                errorMessage={String(errors[descriptionField.name]?.message)}
                {...descriptionField}
              />
              <div className="voorbeeld-bijlage-flex-container">
                <Paragraph className="voorbeeld-paragraph-bijlage">Bijlage</Paragraph>
                <Paragraph>(optioneel)</Paragraph>
              </div>
              <UnorderedList className="voorbeeld-unordered-list-space">
                <UnorderedListItem>Bestanden moeten kleiner zijn dan 10 MB.</UnorderedListItem>
                <UnorderedListItem>Toegestane bestandstypen: gif, jpg, jpeg, png.</UnorderedListItem>
              </UnorderedList>
              <div className="voorbeeld-bijlage-flex-container">
                <Button appearance="secondary-action-button">Bestand kiezen</Button>
                <Paragraph className="paragraph-space-bijlagen">Geen bestand gekozen</Paragraph>
              </div>
              <Heading2 className="voorbeeld-begin-of-block">Op welke locatie heeft de melding betrekking?</Heading2>
              <FormFieldTextbox
                id={`place-${placeField.name}`}
                className="voorbeeld-textbox"
                invalid={!!errors[placeField.name]}
                errorMessage={String(errors[placeField.name]?.message)}
                aria-label="Plaats"
                label="Plaats"
                placeholder=""
                {...placeField}
              />
              <FormFieldTextbox
                id={`street-${streetField.name}`}
                invalid={!!errors[streetField.name]}
                errorMessage={String(errors[streetField.name]?.message)}
                aria-label="Straat"
                label="Straat"
                placeholder=""
                {...streetField}
              />
              <FormFieldTextbox
                id={`height-${heightField.name}`}
                className="voorbeeld-textbox"
                invalid={!!errors[heightField.name]}
                description="Bijvoorbeeld het huisnummer, parkeerplaats of speeltuintje."
                errorMessage={String(errors[heightField.name]?.message)}
                aria-label="Ter hoogte van"
                label="Ter hoogte van"
                placeholder=""
                {...heightField}
              />
              <Heading2 className="voorbeeld-begin-of-block">Hoe kunnen we u bereiken voor meer informatie?</Heading2>
              <Fieldset role="radiogroup">
                <FieldsetLegend>Anoniem Melden?</FieldsetLegend>
                <FormFieldDescription className="voorbeeld-spacing-FormFieldDescription">
                  Als u iets anoniem meld kunnen we u niet informeren over het verloop van de afhandeling voor deze
                  melding.
                </FormFieldDescription>
                <FormField type="radio">
                  <FormLabel className="voorbeeld-radio-button-form-label" htmlFor="anoniem-ja" type="radio">
                    Ja
                  </FormLabel>
                  <RadioButton className="utrecht-form-field__input" id="anoniem-ja" name="anoniem" value="1" />
                </FormField>
                <FormField type="radio">
                  <FormLabel className="voorbeeld-radio-button-form-label" htmlFor="anoniem-nee" type="radio">
                    Nee
                  </FormLabel>
                  <RadioButton className="utrecht-form-field__input" id="anoniem-nee" name="anoniem" value="2" />
                </FormField>
              </Fieldset>
              <FormFieldTextbox
                id={`name-${nameField.name}`}
                className="voorbeeld-textbox"
                invalid={!!errors[nameField.name]}
                required
                type="name"
                autoComplete="name"
                errorMessage={String(errors[nameField.name]?.message)}
                aria-label="Naam"
                label="Naam"
                placeholder=""
                {...nameField}
              />
              <FormFieldTextbox
                id={`email-${emailField.name}`}
                className="voorbeeld-textbox"
                invalid={!!errors[emailField.name]}
                autoComplete="email"
                type="email"
                required
                errorMessage={String(errors[emailField.name]?.message)}
                aria-label="E-mailadres"
                label="E-mailadres"
                placeholder=""
                {...emailField}
              />
              <FormFieldTextbox
                id={`phone-${phoneField.name}`}
                className="voorbeeld-textbox"
                invalid={!!errors[phoneField.name]}
                type="tel"
                autoComplete="tel"
                description="Niet verplicht."
                errorMessage={String(errors[phoneField.name]?.message)}
                aria-label="Telefoonnummer"
                label="Telefoonnummer"
                placeholder=""
                {...phoneField}
              />
              <Button className="voorbeeld-button-spacing" type="submit" appearance="primary-action-button">
                Versturen
              </Button>
            </form>
          </Article>
        </PageContent>
        <ExampleFooterFocus />
      </Page>
    </Document>
  );
}
