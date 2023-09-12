'use client';

import {
  ButtonLink,
  Document,
  Heading1,
  Heading5,
  Page,
  PageFooter,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import { NavigationList } from '../../../components/NavigationList';
import { NavigationListItem } from '../../../components/NavigationList/NavigationListItem';
import '../../styling/component-styles/footer.css';
import Logo from '../../styling/assets/voorbeeld-footer.svg';

export default function Home() {
  return (
    <Document>
      <Page>
        <Heading1>Melding ontbreken van een Roze Eenhoornparkeerzone</Heading1>
        <Paragraph>
          We begrijpen dat sommige van onze fantasierijke bewoners zich zorgen maken over het ontbreken van een
          essentiële faciliteit in onze gemeente: een parkeerzone speciaal voor roze eenhoorns. We erkennen de unieke
          behoeften van deze betoverende wezens en hun metgezellen, de vliegende huisdieren. Terwijl dit meldpunt vooral
          dient voor lichtvoetige absurditeit, willen we u graag een plek bieden om uw creativiteit te uiten.
        </Paragraph>
        <Paragraph>
          Ons doel is om een glimlach op uw gezicht te toveren en uw gevoel voor avontuur aan te wakkeren. Dus voel u
          vrij om uw gedachten, visuele kunstwerken en eenhoornverhalen met ons te delen. Vergeet niet dat terwijl we
          misschien niet in staat zijn om een echte roze eenhoornparkeerzone te creëren, we altijd genieten van uw
          deelname aan dit humoristische initiatief.
        </Paragraph>
        <Paragraph>
          <b>Ga naar het Meldingsformulier:</b>
        </Paragraph>
        <ButtonLink appearance="primary-action-button" href="./form">
          Maak melding
        </ButtonLink>
        <Paragraph>
          <i>
            Dank u voor uw bijdrage aan ons Absurde Meldpunt. We hopen dat u hebt genoten van deze unieke reis in de
            wereld van verbeelding.
          </i>
        </Paragraph>
        <PageFooter className="example-footer">
          <Logo className="example--footer-logo" />
          <NavigationList className="example--footer-list utrecht-link-list utrecht-link-list--html-ul">
            <Heading5>Heading</Heading5>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
          </NavigationList>
          <NavigationList className="example--footer-list utrecht-link-list utrecht-link-list--html-ul">
            <Heading5>Heading</Heading5>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
            <NavigationListItem
              href="#"
              label="Navigatie item"
              className="utrecht-link-list-focus__item"
            ></NavigationListItem>
          </NavigationList>
          <UnorderedList className="utrecht-link-list utrecht-link-list--html-ul">
            <UnorderedListItem className="utrecht-link-list__item">
              <Heading5>
                <br />
                Heading
              </Heading5>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>
            </UnorderedListItem>
          </UnorderedList>
        </PageFooter>
      </Page>
    </Document>
  );
}
