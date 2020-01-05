import { Component, OnInit } from '@angular/core';
import { Colorset } from '../_models/colorset'
import { ColorsetService } from '../_services/colorset.service';
import { PaginatedResult, Pagination } from '../_models/pagination';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, from } from 'rxjs';

class CssColorVarNames {
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

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  pagination: Pagination;
  colorsets: Colorset[];
  colorset: Colorset;
  selectedColorsetName: string = 'DEFAULT';
  colorDialogVar: string;
  colorDialogCancelValue: string;
  // colorsetName: string;
  newColorsetName: string;
  newColorsetDescription: string;
  // deleteColorsetName: string;
  primaryBgIsNone = false;
  secondaryBgIsNone = false;
  navbarBgIsNone = false;
  colorVarNames: CssColorVarNames = new CssColorVarNames();

  constructor(private colorsetService: ColorsetService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.colorDialogVar = '';
    this.colorDialogCancelValue = 'FFFFFF';

    this.colorset = new Colorset();
    this.colorset.colorsetName = 'DEFAULT';
    // this.colorset.description = 'Blorf!'
    this.colorset.isDefault = true;
    this.colorset.isProtected = true;

    // Initialize the local vars from CSS vars
    // this.setLocalVarsFromCssColorVars();

    ColorComponent.setColorsetFromCssVars(this.colorset);

    // this.colorset = this.loadColorSet(this.colorsetName);

    this.loadColorsets();
  }

  cpOpenDialog(colorName: string) {
    this.colorDialogVar = colorName;
    this.colorDialogCancelValue = getComputedStyle(document.documentElement).getPropertyValue(this.colorDialogVar);
    // console.log(`Open dialog for color name: ${this.colorDialogVar} with color: ${this.colorDialogCancelValue}`);
  }

  cpCancelDialog() {
    // console.log(`Cancel dialog for: ${this.colorDialogVar} Revert to: ${this.colorDialogCancelValue}`);
    document.documentElement.style.setProperty(this.colorDialogVar, this.colorDialogCancelValue);
  }

  cpCloseDialog() {
    // console.log(`Close dialog for: ${this.colorDialogVar}`);
    // The color var is already set. There's nothing we need to do.
    // if (this.colorDialogVar === this.secondaryBgVar) {
      // this.secondaryBgValue = 'none';
      // document.documentElement.style.setProperty(this.colorDialogVar, 'none');
    // }
  }

  cpChangeColor(e: any) {
    // console.log(`Change for: ${this.colorDialogVar} New value is: ${e}`);
    document.documentElement.style.setProperty(this.colorDialogVar, e);
  }

  killSecondaryBg() {
    document.documentElement.style.setProperty(this.colorVarNames.secondaryBgVar, 'none');
    this.colorset.secondaryBg = 'none';
    // console.log('kill secondary bg');
  }

  killPrimaryBg() {
    document.documentElement.style.setProperty(this.colorVarNames.primaryBgVar, 'none');
    this.colorset.primaryBg = 'none';
    console.log('kill primary bg');
  }

  killNavbarBg() {
    document.documentElement.style.setProperty(this.colorVarNames.navbarBgVar, 'none');
    this.colorset.navbarBg = 'none';
    console.log('kill navbar bg');
  }

  loadColorsets(page?:number, perpage?:number) : void {
    // debugger;
    //let paginatedResult: Observable<>;
    this.colorsetService.getColorsets(page, perpage).subscribe( res => {
      // debugger;
      this.pagination = res.pagination;
      this.colorsets = res.result;
    }, err => {
      // debugger;
      this.alertify.error(err);
    }, () => {
      console.log('Done loading colorsets!');
    }
    );
  }

  loadDefaultColorset() : void {
    // console.log('Load ' + this.selectedColorset);
    // var index = peoples.findIndex(p => p.attr1 == "john")
    let index = this.colorsets.findIndex( c => c.isDefault);
    if (index >= 0) {
      console.log('Index of default colorset is: ' + index);
    }
  }

  loadSelectedColorset() : void {
    // console.log('Load ' + this.selectedColorset);
    // var index = peoples.findIndex(p => p.attr1 == "john")
    let index = this.colorsets.findIndex( c => c.colorsetName === this.colorset.colorsetName);
    if (index >= 0) {
      console.log('Index to load is: ' + index);
    }
  }

  setCurrentColorsetAsDefault() : void {
    // console.log('Load ' + this.selectedColorset);
    // var index = peoples.findIndex(p => p.attr1 == "john")
    let index = this.colorsets.findIndex( c => c.colorsetName === this.colorset.colorsetName);
    if (index >= 0) {
      console.log('Index to set as default is: ' + index);
    }
  }

  protectCurrentColorset(setProtect: boolean) : void {
    // console.log('Load ' + this.selectedColorset);
    // var index = peoples.findIndex(p => p.attr1 == "john")
    let index = this.colorsets.findIndex( c => c.colorsetName === this.colorset.colorsetName);
    if (index >= 0) {
      console.log('Index to protect/unprotect is: ' + index + ' Protect: ' + setProtect);
    }
  }

  saveCurrentColorset() : void {
    // console.log('Load ' + this.selectedColorset);
    // var index = peoples.findIndex(p => p.attr1 == "john")
    let index = this.colorsets.findIndex( c => c.colorsetName === this.colorset.colorsetName);
    if (index >= 0) {
      console.log('Index to save is: ' + index);
    }
  }

  deleteCurrentColorset() : void {
    // console.log('Load ' + this.selectedColorset);
    // var index = peoples.findIndex(p => p.attr1 == "john")
    // Cannot delete default colorset
    // Cannot delete protected colorset
    let index = this.colorsets.findIndex( c => c.colorsetName === this.colorset.colorsetName);
    if (index >= 0) {
      console.log('Index to delete is: ' + index);
    }
  }

  createColorset() : void {
    // console.log('Load ' + this.selectedColorset);
    // var index = peoples.findIndex(p => p.attr1 == "john")
    console.log('Create colorset:' + this.newColorsetName);
  }

  static getIndexOfDefaultColorset(colorsets: Colorset[]) : number {
    let index = colorsets.findIndex( c => c.isDefault === true);
    return index;
  }

  static getIndexOfNamedColorset(colorsets: Colorset[], colorsetName: string) : number {
    let index = colorsets.findIndex( c => c.colorsetName === colorsetName);
    return index;
  }

  static deepCopyColorset(fromColorset: Colorset, toColorset: Colorset, includeAudit: boolean) : void {
    toColorset.id = fromColorset.id;
    toColorset.colorsetName = fromColorset.colorsetName;
    toColorset.isDefault = fromColorset.isDefault;
    toColorset.primaryColor = fromColorset.primaryColor;
    toColorset.primaryBg = fromColorset.primaryBg;
    toColorset.secondaryColor = fromColorset.secondaryColor;
    toColorset.secondaryBg = fromColorset.secondaryBg;
    toColorset.infoColor = fromColorset.infoColor;
    toColorset.infoBg = fromColorset.infoBg;
    toColorset.brandColor = fromColorset.brandColor;
    toColorset.brandBg =fromColorset.brandBg;
    toColorset.navbarColor = fromColorset.navbarColor;
    toColorset.navbarColorActive = fromColorset.navbarColorActive;
    toColorset.navbarBg = fromColorset.navbarBg;
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

  setCssVarsFromColorSet(colorset: Colorset){
    let colorVarNames: CssColorVarNames = new CssColorVarNames();

    document.documentElement.style.setProperty(colorVarNames.primaryColorVar, colorset.primaryColor);
    document.documentElement.style.setProperty(colorVarNames.primaryBgVar, colorset.primaryBg);
    document.documentElement.style.setProperty(colorVarNames.secondaryColorVar, colorset.secondaryColor);
    document.documentElement.style.setProperty(colorVarNames.secondaryBgVar, colorset.secondaryBg);
    document.documentElement.style.setProperty(colorVarNames.infoColorVar, colorset.infoColor);
    document.documentElement.style.setProperty(colorVarNames.infoBgVar, colorset.infoBg);
    document.documentElement.style.setProperty(colorVarNames.brandColorVar, colorset.brandColor);
    document.documentElement.style.setProperty(colorVarNames.brandBgVar, colorset.brandBg);
    document.documentElement.style.setProperty(colorVarNames.navbarColorVar, colorset.navbarColor);
    document.documentElement.style.setProperty(colorVarNames.navbarBgVar, colorset.navbarBg);
    document.documentElement.style.setProperty(colorVarNames.navbarColorActiveVar, colorset.navbarColorActive);
  }
}

