import { CssColorVarNames } from '../_misc/css-color-var-names';

export class Colorset {
  id?: number;
  colorsetName: string;
  isDefault: boolean;
  isProtected: boolean;
  primaryColor: string;
  primaryBg: string;
  primaryBgIsNone: boolean;
  secondaryColor: string;
  secondaryBg: string;
  secondaryBgIsNone: boolean;
  infoColor: string;
  infoBg: string;
  brandColor: string;
  brandBg: string;
  navbarColor: string;
  navbarColorActive: string;
  navbarBg: string;
  navbarBgIsNone: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  version?: number;



  constructor() {
    this.colorsetName = 'Unknown';
    this.isDefault = false;
    this.isProtected = false;
    this.primaryColor = '000000';
    this.primaryBg = 'FFFFFF';
    this.primaryBgIsNone = false;
    this.secondaryColor = 'FFFFFF';
    this.secondaryBg = '000000';
    this.secondaryBgIsNone = false;
    this.infoColor = '000000';
    this.infoBg = 'FFFFFF';
    this.brandColor = '000000';
    this.brandBg = 'FFFFFF';
    this.navbarColor = 'FFFFFF';
    this.navbarColorActive = 'FFFFFF';
    this.navbarBg = '000000';
    this.navbarBgIsNone = false;
  }

  static deepCopyColorset(fromColorset: Colorset, toColorset: Colorset, includeAudit: boolean) : void {
    toColorset.id = fromColorset.id;
    toColorset.colorsetName = fromColorset.colorsetName;
    toColorset.isDefault = fromColorset.isDefault;
    toColorset.isProtected = fromColorset.isProtected;
    toColorset.primaryColor = fromColorset.primaryColor;
    toColorset.primaryBg = fromColorset.primaryBg;
    toColorset.primaryBgIsNone = fromColorset.primaryBgIsNone;
    toColorset.secondaryColor = fromColorset.secondaryColor;
    toColorset.secondaryBg = fromColorset.secondaryBg;
    toColorset.secondaryBgIsNone = fromColorset.secondaryBgIsNone;
    toColorset.infoColor = fromColorset.infoColor;
    toColorset.infoBg = fromColorset.infoBg;
    toColorset.brandColor = fromColorset.brandColor;
    toColorset.brandBg =fromColorset.brandBg;
    toColorset.navbarColor = fromColorset.navbarColor;
    toColorset.navbarColorActive = fromColorset.navbarColorActive;
    toColorset.navbarBg = fromColorset.navbarBg;
    toColorset.navbarBgIsNone = fromColorset.navbarBgIsNone;
    if (includeAudit) {
      toColorset.createdAt = fromColorset.createdAt;
      toColorset.updatedAt = fromColorset.updatedAt;
      toColorset.version = fromColorset.version;
    }
  }

  static setColorsetFromCssVars(colorset: Colorset) {
    let colorVarNames: CssColorVarNames = new CssColorVarNames();

    colorset.primaryColor = getComputedStyle(document.documentElement).getPropertyValue(colorVarNames.primaryColorVar);
    colorset.primaryBg = getComputedStyle(document.documentElement).getPropertyValue(colorVarNames.primaryBgVar);
    colorset.secondaryColor = getComputedStyle(document.documentElement).getPropertyValue(colorVarNames.secondaryColorVar);
    colorset.secondaryBg = getComputedStyle(document.documentElement).getPropertyValue(colorVarNames.secondaryBgVar);
    colorset.infoColor = getComputedStyle(document.documentElement).getPropertyValue(colorVarNames.infoColorVar);
    colorset.infoBg = getComputedStyle(document.documentElement).getPropertyValue(colorVarNames.infoBgVar);
    colorset.brandColor = getComputedStyle(document.documentElement).getPropertyValue(colorVarNames.brandColorVar);
    colorset.brandBg = getComputedStyle(document.documentElement).getPropertyValue(colorVarNames.brandBgVar);
    colorset.navbarColor = getComputedStyle(document.documentElement).getPropertyValue(colorVarNames.navbarColorVar);
    colorset.navbarBg = getComputedStyle(document.documentElement).getPropertyValue(colorVarNames.navbarBgVar);
    colorset.navbarColorActive = getComputedStyle(document.documentElement).getPropertyValue(colorVarNames.navbarColorActiveVar);
  }

  static setCssVarsFromColorSet(colorset: Colorset){
    let colorVarNames: CssColorVarNames = new CssColorVarNames();

    document.documentElement.style.setProperty(colorVarNames.primaryColorVar, colorset.primaryColor);
    document.documentElement.style.setProperty(colorVarNames.secondaryColorVar, colorset.secondaryColor);
    document.documentElement.style.setProperty(colorVarNames.infoColorVar, colorset.infoColor);
    document.documentElement.style.setProperty(colorVarNames.infoBgVar, colorset.infoBg);
    document.documentElement.style.setProperty(colorVarNames.brandColorVar, colorset.brandColor);
    document.documentElement.style.setProperty(colorVarNames.brandBgVar, colorset.brandBg);
    document.documentElement.style.setProperty(colorVarNames.navbarColorVar, colorset.navbarColor);
    document.documentElement.style.setProperty(colorVarNames.navbarColorActiveVar, colorset.navbarColorActive);

    if (colorset.primaryBgIsNone) {
      document.documentElement.style.setProperty(colorVarNames.primaryBgVar, 'none');
    } else {
      document.documentElement.style.setProperty(colorVarNames.primaryBgVar, colorset.primaryBg);
    }
    if (colorset.secondaryBgIsNone) {
      document.documentElement.style.setProperty(colorVarNames.secondaryBgVar, 'none');
    } else {
      document.documentElement.style.setProperty(colorVarNames.secondaryBgVar, colorset.secondaryBg);
    }
    if (colorset.navbarBgIsNone) {
      document.documentElement.style.setProperty(colorVarNames.navbarBgVar, 'none');
    } else {
      document.documentElement.style.setProperty(colorVarNames.navbarBgVar, colorset.navbarBg);
    }
  }

}
