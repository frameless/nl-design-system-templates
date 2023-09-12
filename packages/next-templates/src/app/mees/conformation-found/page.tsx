'use client';
import {
  ButtonGroup,
  ButtonLink,
  Heading1,
  Heading2,
  Heading5,
  Page,
  PageContent,
  PageFooter,
  Paragraph,
  Separator,
} from '@utrecht/component-library-react';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import Logo from '../../styling/assets/voorbeeld-footer.svg';
export default function Home() {
  return (
    <Page>
      <PageContent>
        <Heading1>Controleer je gegevens</Heading1>
        <Heading2>je gevonden sok</Heading2>
        <Separator></Separator>
        <Heading2>U gegevens</Heading2>
        <Separator></Separator>
        <Paragraph>
          Dank u wel voor het melden van de gevonden sok(ken). Uw medewerking bij het herenigen van deze sok met zijn
          rechtmatige eigenaar wordt zeer gewaardeerd.De gedetailleerde beschrijving die u heeft verstrekt, zal dienen
          als waardevolle informatie bij onze zoektocht om de eigenaar van de sokbij elkaar te brengen.
        </Paragraph>
        <Heading2>Wat nu?</Heading2>
        <Paragraph>
          U ontvangt een bevestigingse-mail, het enige wat u nog hoeft te doen, geduldig afwachten. Ons toegewijde team
          zal uw melding grondig onderzoeken en proberen de sok met zijn rechtmatige eigenaar te herenigen.
        </Paragraph>
        <Paragraph>
          Als er nieuws of ontwikkelingen zijn met betrekking tot uw melding, ontvangt u een e-mail op het door u
          opgegeven e-mailadres om u op de hoogte te stellen.
        </Paragraph>
        <ButtonGroup>
          <ButtonLink href="mees" appearance="primary-action-button">
            Versturen
          </ButtonLink>
          <ButtonLink href="form-found" appearance="secondary-action-button">
            Terug
          </ButtonLink>
        </ButtonGroup>
      </PageContent>
      <PageFooter>
        <div className="example-link-list-container">
          <Logo className="example--footer-logo" />
          <ul className="example--footer-list utrecht-link-list utrecht-link-list--html-ul">
            <Heading5>Heading</Heading5>
            <li className="utrecht-link-list-focus__item">
              <Paragraph className="utrecht-footer-paragraph">
                Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *
              </Paragraph>
            </li>
          </ul>
        </div>
      </PageFooter>
    </Page>
  );
}
