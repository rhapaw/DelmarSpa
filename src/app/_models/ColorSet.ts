export class Colorset {
  id?: number;
  colorsetName: string;
  isDefault: boolean;
  isProtected: boolean;
  primaryColor: string;
  primaryBg: string;
  secondaryColor: string;
  secondaryBg: string;
  infoColor: string;
  infoBg: string;
  brandColor: string;
  brandBg: string;
  navbarColor: string;
  navbarColorActive: string;
  navbarBg: string;
  createdAt?: Date;
  updatedAt?: Date;
  version?: number;

  constructor() {
    this.colorsetName = 'Unknown';
    this.isDefault = false;
    this.isProtected = false;
    this.primaryColor = '000000';
    this.primaryBg = '000000';
    this.secondaryColor = '000000';
    this.secondaryBg = '000000';
    this.infoColor = '000000';
    this.infoBg = '000000';
    this.brandColor = 'FFFFFF';
    this.brandBg = 'FFFFFF';
    this.navbarColor = '000000';
    this.navbarBg = '000000';
    this.navbarColorActive = '000000';
  }
}
