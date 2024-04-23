'use client';

import {
  Article,
  BreadcrumbNavLink,
  BreadcrumbNav,
  BreadcrumbNavSeparator,
  Document,
  Heading1,
  Heading2,
  Link,
  Paragraph,
  Page,
  PageContent,
} from '@utrecht/component-library-react';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '@gemeente-denhaag/sidenav';

import { ExampleHeader } from '@/components/ExampleHeader/ExampleHeader';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { InlogHeader } from '@/components/ExampleHeader/InlogHeader/InlogHeader';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import IconChevronRight from '../../app/styling/assets/chevronRight.svg';

import '@/app/styling/css/detail-page.css';
import '@utrecht/design-tokens/dist/index.css';
// import { Main } from 'next/document';

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ [key: string]: string }>();

  return (
    <Document>
      <Page>
        <ExampleHeader />
        <InlogHeader />
        <ExampleNavigation />

        <PageContent>
          <BreadcrumbNav label="Kruimelpad">
            <BreadcrumbNavLink href="" index={0} rel="home">
              Home
            </BreadcrumbNavLink>
            <BreadcrumbNavSeparator>
              <IconChevronRight className="voorbeeld-chevron-right-space" />
            </BreadcrumbNavSeparator>
            <BreadcrumbNavLink href="" index={1} rel="mijn-omgeving">
              Mijn Omgeving
            </BreadcrumbNavLink>
          </BreadcrumbNav>

          <Article id="main" className="voorbeeld-section-content voorbeeld-toptask-layout">
            <div>
              <Sidenav>
                <SidenavList>
                  <SidenavItem>
                    <SidenavLink current href="/#">
                      Overzicht
                    </SidenavLink>
                  </SidenavItem>
                  <SidenavItem>
                    <SidenavLink href="/#">Berichten</SidenavLink>
                  </SidenavItem>
                  <SidenavItem>
                    <SidenavLink href="/#">Mijn zaken</SidenavLink>
                  </SidenavItem>
                </SidenavList>
              </Sidenav>

              <Sidenav>
                <SidenavList>
                  <SidenavItem>
                    <SidenavLink href="/#">Belastingzaken</SidenavLink>
                  </SidenavItem>
                  <SidenavItem>
                    <SidenavLink href="/#">WOZ</SidenavLink>
                  </SidenavItem>
                  <SidenavItem>
                    <SidenavLink href="/#">Parkeren</SidenavLink>
                  </SidenavItem>
                  <SidenavItem>
                    <SidenavLink href="/#">Erfpacht</SidenavLink>
                  </SidenavItem>
                </SidenavList>
              </Sidenav>

              <Sidenav>
                <SidenavList>
                  <SidenavItem>
                    <SidenavLink href="/#">Account</SidenavLink>
                  </SidenavItem>
                </SidenavList>
              </Sidenav>
            </div>

            <div>
              <Heading1>Hallo Jeroen van Drouwen</Heading1>
              <Paragraph>
                In ‘Mijn omgeving’ kunt u zelf uw persoonlijke zaken regelen wanneer het u uitkomt. U kunt bijvoorbeeld
                uw rekeningen betalen en zien wanneer uw aanvraag klaar is.
              </Paragraph>

              <Heading2>Wat moet ik regelen?</Heading2>
              <Paragraph>U hoeft op dit moment niets te regelen.</Paragraph>
              <Heading2>Mijn zaken</Heading2>
              <Paragraph>
                <strong>Vraag aan de gemeente</strong>
              </Paragraph>
              <Link href="./mijn-omgeving/mijn-zaken">Bekijk zaken</Link>
              <Heading2></Heading2>
              <Link href="./mijn-omgeving/mijn-zaken">Bekijk alle zaken</Link>
              <Heading2></Heading2>
            </div>
          </Article>
        </PageContent>

        <ExampleFooter />
      </Page>
    </Document>
  );
}
