import { Component, OnInit } from '@angular/core';
import{ ColorSet } from '../.interfaces/ColorSet'
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colorDialogVar: string;
  colorDialogCancelValue: string;
  colorSetName: string;
  colorSet: ColorSet;

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

  // Vars used to hold names of CSS var values
  primaryColorValue: string;
  primaryBgValue: string;
  secondaryColorValue: string;
  secondaryBgValue: string;
  infoColorValue: string;
  infoBgValue: string;
  brandColorValue: string;
  brandBgValue: string;
  navbarColorValue: string;
  navbarBgValue: string;
  navbarColorActiveValue: string;

  constructor() { }

  ngOnInit() {
    this.colorDialogVar = '';
    this.colorDialogCancelValue = 'FFFFFF';
    this.colorSetName = 'Default';

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

    // Initialize the local vars from CSS vars
    this.setLocalVarsFromCssColorVars();


    this.colorSet = this.loadColorSet(this.colorSetName);

  }

  loadColorSet(colorSetName: string) : ColorSet {
    let cs: ColorSet;

    //  For now we just build a colorset from the local vars and return it.
    // We assume that the local vars have already been set from the CSS vars.
    // Later we'll actually retrieve the colorset from a database.

    this.setColorSetFromLocalVars(cs);

    // After we retrieve a colorset, we have to copy the values to the CSS vars
    // and the local color vars.

    this.setCssColorVarsFromColorSet(cs);
    this.setLocalVarsFromCssColorVars();

    return cs;
  }

  saveColorSet(colorSetName: string) {
    let cs: ColorSet;

    this.setColorSetFromLocalVars(cs);
    // Save the colorset in a db using colorsetname;
  }

  setCssColorVarsFromColorSet(colors: ColorSet){

    document.documentElement.style.setProperty(this.primaryColorVar, colors.primary_color);
    document.documentElement.style.setProperty(this.primaryBgVar, colors.primary_bg);
    document.documentElement.style.setProperty(this.secondaryColorVar, colors.secondary_color);
    document.documentElement.style.setProperty(this.secondaryBgVar, colors.secondary_bg);
    document.documentElement.style.setProperty(this.infoColorVar, colors.info_color);
    document.documentElement.style.setProperty(this.infoBgVar, colors.info_bg);
    document.documentElement.style.setProperty(this.brandColorVar, colors.brand_color);
    document.documentElement.style.setProperty(this.brandBgVar, colors.brand_bg);
    document.documentElement.style.setProperty(this.navbarColorVar, colors.navbar_color);
    document.documentElement.style.setProperty(this.navbarBgVar, colors.navbar_bg);
    document.documentElement.style.setProperty(this.navbarColorActiveVar, colors.navbar_color_active);
  }

  setColorSetFromLocalVars(colors: ColorSet) {
    colors.primary_color = this.primaryColorValue;
    colors.primary_color = this.primaryBgValue;
    colors.primary_color = this.secondaryColorValue;
    colors.primary_color = this.secondaryBgValue;
    colors.primary_color = this.infoColorValue;
    colors.primary_color = this.infoBgValue;
    colors.primary_color = this.brandColorValue;
    colors.primary_color = this.brandBgValue;
    colors.primary_color = this.navbarColorValue;
    colors.primary_color = this.navbarBgValue;
    colors.primary_color = this.navbarColorActiveValue;
  }

  setLocalVarsFromCssColorVars() {
    this.primaryColorValue = getComputedStyle(document.documentElement).getPropertyValue(this.primaryColorVar);
    this.primaryBgValue = getComputedStyle(document.documentElement).getPropertyValue(this.primaryBgVar);
    this.secondaryColorValue = getComputedStyle(document.documentElement).getPropertyValue(this.secondaryColorVar);
    this.secondaryBgValue = getComputedStyle(document.documentElement).getPropertyValue(this.secondaryBgVar);
    this.infoColorValue = getComputedStyle(document.documentElement).getPropertyValue(this.infoColorVar);
    this.infoBgValue = getComputedStyle(document.documentElement).getPropertyValue(this.infoBgVar);
    this.brandColorValue = getComputedStyle(document.documentElement).getPropertyValue(this.brandColorVar);
    this.brandBgValue = getComputedStyle(document.documentElement).getPropertyValue(this.brandBgVar);
    this.navbarColorValue = getComputedStyle(document.documentElement).getPropertyValue(this.navbarColorVar);
    this.navbarBgValue = getComputedStyle(document.documentElement).getPropertyValue(this.navbarBgVar);
    this.navbarColorActiveValue = getComputedStyle(document.documentElement).getPropertyValue(this.navbarColorActiveVar);
  }

  cpOpenDialog(colorName: string) {
    this.colorDialogVar = colorName;
    this.colorDialogCancelValue = getComputedStyle(document.documentElement).getPropertyValue(this.colorDialogVar);
    console.log(`Open dialog for color name: ${this.colorDialogVar} with color: ${this.colorDialogCancelValue}`);
  }

  cpCancelDialog() {
    console.log(`Cancel dialog for: ${this.colorDialogVar} Revert to: ${this.colorDialogCancelValue}`);
    document.documentElement.style.setProperty(this.colorDialogVar, this.colorDialogCancelValue);
  }

  cpCloseDialog() {
    console.log(`Close dialog for: ${this.colorDialogVar}`);
  }

  cpChangeColor(e: any) {
    console.log(`Change for: ${this.colorDialogVar} New value is: ${e}`);
    document.documentElement.style.setProperty(this.colorDialogVar, e);

  }

}

