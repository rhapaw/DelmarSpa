export class CssColorVarNames {
  // Vars used to hold names of CSS vars
  primaryColorVar: string;
  primaryBgVar: string;
  secondaryColorVar: string;
  secondaryBgVar: string;
  infoColorVar: string;
  infoBgVar: string;
  brandColorVar: string;
  brandBgVar: string;
  navbarColorVar: string;
  navbarBgVar: string;
  navbarColorActiveVar: string;

  constructor() {
    // Set the names used by the CSS color vars
    this.primaryColorVar = '--my-primary-color';
    this.primaryBgVar = '--my-primary-bg';
    this.secondaryColorVar = '--my-secondary-color';
    this.secondaryBgVar = '--my-secondary-bg';
    this.infoColorVar = '--my-info-color';
    this.infoBgVar = '--my-info-bg';
    this.brandColorVar = '--my-brand-color';
    this.brandBgVar = '--my-brand-bg';
    this.navbarColorVar = '--my-navbar-color';
    this.navbarBgVar = '--my-navbar-bg';
    this.navbarColorActiveVar = '--my-navbar-color-active';
  }
}

