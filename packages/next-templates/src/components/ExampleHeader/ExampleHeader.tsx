import { Button, Link, PageHeader, Paragraph, Textbox } from '@utrecht/component-library-react';
import Logo from '../../app/styling/assets/voorbeeld-header.svg';
import Search from '../../app/styling/assets/searchbar-icon.svg';
import User from '../../app/styling/assets/user-icon.svg';
import React, { HTMLAttributes } from 'react';
import './header.css';

interface ExampleHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export const ExampleHeader = ({ ...props }: ExampleHeaderProps) => (
  <PageHeader className="example--header-home-page">
    <button
      aria-label="collapse menu navigation"
      className="example--header-burger-menu-button"
      popoverTarget="popovertest"
    >
      <div className="example--header-burger-bar-container">
        <span className="example--header-bar"></span>
        <span className="example--header-bar"></span>
        <span className="example--header-bar"></span>
      </div>
      Menu
    </button>
    <div className="example--logo">
      <Logo />
    </div>
    <div className="example--header-items">
      <div className="example--header-links-container">
        <Link className="example--header-links">
          <User className="example--header-user-icon" /> Mijn omgeving
        </Link>
        <Link className="example--header-links">Contact</Link>
      </div>
      <div className="example--search-box">
        <Textbox className="example--header-text-box" placeholder="Bijvoorbeeld zwembad of grofvuil" />
        <Button className="example--header-search-secondary-button" appearance="secondary-action-button">
          <Search /> Zoeken
        </Button>
        <Button className="example--header-search-subtle-button" appearance="subtle-button">
          <Search /> Zoeken
        </Button>
      </div>
    </div>
    <dialog id="popovertest" className="example--header-popover-menu" role="dialog" popover="auto">
      <button popoverTarget="popovertest" popoverTargetAction="hide">
        <span aria-hidden="true">❌</span>
        <Paragraph>Sluiten</Paragraph>
      </button>
      <div>
        <Link className="example--header-links">
          <User className="example--header-user-icon" /> Mijn omgeving
        </Link>
        <Link className="example--header-links">Contact</Link>
        <Link className="example--header-links">Home</Link>
        <Link className="example--header-links">About</Link>
        <Link className="example--header-links">Services</Link>
        <Link className="example--header-links">Portfolio</Link>
        <Link className="example--header-links">Contact</Link>
      </div>
    </dialog>
  </PageHeader>
);

ExampleHeader.displayName = 'ExampleHeader';
