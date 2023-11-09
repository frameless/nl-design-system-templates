'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtButtonLink,
  UtrechtDataList,
  UtrechtDataListItem,
  UtrechtDataListKey,
  UtrechtDataListValue,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeading3,
  UtrechtLink,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderFunnelWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderFunnelWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import ArrowLeft from '@/app/styling/assets/ArrowLeft.svg';
import '@/app/styling/css/wmebv.css';

export default function home() {
  return (
    <UtrechtPage>
      <ExampleHeaderFunnelWmebv />
      <UtrechtPageContent>
        <UtrechtArticle>
          <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
          <UtrechtButtonGroup>
            <UtrechtButtonLink href="/stap2" appearance="subtle-button" className="voorbeeld-button-link">
              <ArrowLeft /> Terug
            </UtrechtButtonLink>
          </UtrechtButtonGroup>
          <UtrechtParagraph lead>Stap 3 van 4</UtrechtParagraph>
          <UtrechtHeading2>Controleer uw gegevens</UtrechtHeading2>
          <UtrechtHeading3>Uw vraag</UtrechtHeading3>
          <UtrechtDataList>
            <UtrechtLink href="./stap1">Uw vraag aanpassen </UtrechtLink>
            <UtrechtDataListItem>
              <UtrechtDataListKey>Uw vraag</UtrechtDataListKey>
              <UtrechtDataListValue>
                <UtrechtParagraph className="voorbeeld-title-paragraph">Beste meneer of mevrouw, </UtrechtParagraph>
                <UtrechtParagraph className="voorbeeld-title-paragraph">
                  Ik heb 8 weken geleden een aanvraag voor bijstandsuitkering gedaan maar ik heb nog steeds niets
                  gehoord. Volgens mij had u allang op mijn aanvraag moeten beslissen.
                </UtrechtParagraph>
                <UtrechtParagraph className="voorbeeld-title-paragraph">
                  Met vriendelijke groet, Jeroen van Drouwen
                </UtrechtParagraph>
              </UtrechtDataListValue>
            </UtrechtDataListItem>
          </UtrechtDataList>
          <UtrechtHeading3>Uw gegevens</UtrechtHeading3>
          <UtrechtLink> Uw gegevens Aanpassen</UtrechtLink>
          <UtrechtDataList className="voorbeeld-datalist-style">
            <UtrechtDataListKey>Naam</UtrechtDataListKey>
            <UtrechtDataListValue>Jeroen van Drouwen</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtDataList>
            <UtrechtDataListKey>Straat</UtrechtDataListKey>
            <UtrechtDataListValue>Laan der voorbeelden</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtDataList>
            <UtrechtDataListKey>Huisnummer</UtrechtDataListKey>
            <UtrechtDataListValue>99</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtDataList>
            <UtrechtDataListKey>Postcode</UtrechtDataListKey>
            <UtrechtDataListValue>1024VP</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtDataList>
            <UtrechtDataListKey>Woonplaats</UtrechtDataListKey>
            <UtrechtDataListValue>Voorbeekd</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtDataList>
            <UtrechtDataListKey>E-mailadres</UtrechtDataListKey>
            <UtrechtDataListValue>j.vandrouwen@gmail.com</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtDataList>
            <UtrechtDataListKey>Telefoonnummer</UtrechtDataListKey>
            <UtrechtDataListValue>0650618346</UtrechtDataListValue>
          </UtrechtDataList>
          <UtrechtButtonGroup>
            <div className="voorbeeld-button-group-spacing">
              <UtrechtButtonLink className="voorbeeld-button-spacing" href="./stap4" appearance="primary-action-button">
                Versturen
              </UtrechtButtonLink>
              <UtrechtParagraph className="voorbeeld-link-spacing">
                <UtrechtButtonLink appearance="subtle-button" className="voorbeeld-button-link" href="#">
                  Opslaan en later verder
                </UtrechtButtonLink>
              </UtrechtParagraph>
              <UtrechtParagraph className="voorbeeld-paragraph-end-space">
                <UtrechtButtonLink appearance="subtle-button" className="voorbeeld-button-link" href="#">
                  Sluit formulier
                </UtrechtButtonLink>
              </UtrechtParagraph>
            </div>
          </UtrechtButtonGroup>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
