'use client';
import {
  ButtonGroup,
  ButtonLink,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Page,
  PageContent,
  Textarea,
  Textbox,
} from '@utrecht/component-library-react';
import '@/app/styling/css/verloren-sokken.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ExampleFooterFocus } from '@/components/ExampleFooter/ExampleFooterFocus/ExampleFooterFocus';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';

interface Inputs {
  Voornaam: string;
  Achternaam: string;
  Telefoon: string;
  Email: string;
  Beschrijving: string;
  GevondenLocatie: string;
  Plaatsnaam: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => data;

  return (
    <Page className="voorbeeld-page--flex">
      <ExampleHeaderFunnel />
      <PageContent className="voorbeeld-page-content-flex">
        <Heading1>Maak een melding van een gevonden sok</Heading1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField className="voorbeeld-formField" type="text">
            <FormLabel className="voorbeeld-formLabel" htmlFor="Voornaam">
              Voornaam
            </FormLabel>
            <Textbox {...register('Voornaam')} id="Voornaam" name="Voornaam" type="text" />
          </FormField>
          <FormField className="voorbeeld-formField" type="text">
            <FormLabel className="voorbeeld-formLabel" htmlFor="Achternaam">
              Achternaam
            </FormLabel>
            <Textbox {...register('Achternaam')} id="Achternaam" name="Achternaam" type="text" />
          </FormField>
          <FormField className="voorbeeld-formField" type="text">
            <FormLabel className="voorbeeld-formLabel" htmlFor="Telefoon">
              Telefoon
            </FormLabel>
            <Textbox {...register('Telefoon')} id="Telefoon" name="Telefoon" type="text" />
          </FormField>
          <FormField className="voorbeeld-formField" type="text">
            <FormLabel className="voorbeeld-formLabel" htmlFor="Email">
              E-mail
            </FormLabel>
            <Textbox {...register('Email')} id="Email" name="Email" type="text" />
          </FormField>
          <FormField className="voorbeeld-formField" type="text">
            <FormLabel className="voorbeeld-formLabel" htmlFor="Beschrijving">
              Beschrijving sok en/of sokken
            </FormLabel>
            <FormFieldDescription>
              Geef zo goed mogelijk de kenmerken van de sok aan, zodat we hem zo snel mogelijk met zijn vriendje kunnen
              herenigen.
            </FormFieldDescription>
            <Textarea {...register('Beschrijving')} id="Beschrijving" name="beschrijving" />
          </FormField>
          <FormField className="voorbeeld-formField" type="text">
            <FormLabel className="voorbeeld-formLabel" htmlFor="Waar-gevonden">
              Waar heb je de sok gevonden?
            </FormLabel>
            <Textarea {...register('GevondenLocatie')} id="Waar-gevonden" name="GevondenLocatie" />
            <FormField className="voorbeeld-formField" type="text">
              <FormLabel className="voorbeeld-formLabel" htmlFor="Plaatsnaam">
                Plaatsnaam
              </FormLabel>
              <Textbox {...register('Plaatsnaam')} id="Plaatsnaam" name="Plaatsnaam" type="text" />
            </FormField>
          </FormField>
          <ButtonGroup>
            <ButtonLink href="conformation-lost" appearance="primary-action-button">
              Versturen
            </ButtonLink>
          </ButtonGroup>
        </form>
      </PageContent>
      <ExampleFooterFocus />
    </Page>
  );
}
