import { Component, OnInit } from '@angular/core';
import { Colorset } from '../_models/colorset'
import { ColorsetService } from '../_services/colorset.service';
import { PaginatedResult, Pagination } from '../_models/pagination';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, from } from 'rxjs';
import { CssColorVarNames } from '../_misc/css-color-var-names';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  pagination: Pagination;
  colorsets: Colorset[];
  colorset: Colorset;
  selectedColorsetId: number;
  colorDialogVar: string;
  colorDialogCancelValue: string;
  newColorsetName: string;

  pendingChanges: boolean;

  primaryBgButtonText: string;
  secondaryBgButtonText: string;
  navbarBgButtonText: string;

  colorVarNames: CssColorVarNames = new CssColorVarNames();

  constructor(private colorsetService: ColorsetService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.pendingChanges = false;

    this.colorDialogVar = '';
    this.colorDialogCancelValue = 'FFFFFF';

    this.colorset = new Colorset();
    this.colorset.colorsetName = 'Default';
    this.colorset.id = 2;
    this.colorset.isDefault = true;
    this.colorset.isProtected = true;

    // Initialize the local vars from CSS vars
    // this.setLocalVarsFromCssColorVars();

    Colorset.setColorsetFromCssVars(this.colorset);

    // this.colorset = this.loadColorSet(this.colorsetName);

    this.loadColorsets();

    this.primaryBgButtonText = 'Not Transparent';
    this.secondaryBgButtonText = 'Not Transparent';
    this.navbarBgButtonText = 'Not Transparent';

    if (this.colorset.primaryBgIsNone) {
      this.primaryBgButtonText = 'Transparent';
      }
    if (this.colorset.secondaryBgIsNone) {
      this.secondaryBgButtonText = 'Transparent';
    }
    if (this.colorset.navbarBgIsNone) {
      this.navbarBgButtonText = 'Transparent';
    }
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
    this.pendingChanges = true;
  }

  toggleSecondaryBg() {
    this.pendingChanges = true;
    this.colorset.secondaryBgIsNone = !this.colorset.secondaryBgIsNone;

    if (this.colorset.secondaryBgIsNone) {
      document.documentElement.style.setProperty(this.colorVarNames.secondaryBgVar, 'none');
      this.secondaryBgButtonText = 'Transparent';
    } else {
      document.documentElement.style.setProperty(this.colorVarNames.secondaryBgVar, this.colorset.secondaryBg);
      this.secondaryBgButtonText = 'Not Transparent';
    }
  }

  togglePrimaryBg() {
    this.pendingChanges = true;
    this.colorset.primaryBgIsNone = !this.colorset.primaryBgIsNone;

    if (this.colorset.primaryBgIsNone) {
      document.documentElement.style.setProperty(this.colorVarNames.primaryBgVar, 'none');
      this.primaryBgButtonText = 'Transparent';
      } else {
      document.documentElement.style.setProperty(this.colorVarNames.primaryBgVar, this.colorset.primaryBg);
      this.primaryBgButtonText = 'Not Transparent';
    }
  }

  toggleNavbarBg() {
    this.pendingChanges = true;
    this.colorset.navbarBgIsNone = !this.colorset.navbarBgIsNone;
    if (this.colorset.navbarBgIsNone) {
      document.documentElement.style.setProperty(this.colorVarNames.navbarBgVar, 'none');
      this.navbarBgButtonText = 'Transparent';
    } else {
      document.documentElement.style.setProperty(this.colorVarNames.navbarBgVar, this.colorset.navbarBg);
      this.navbarBgButtonText = 'Not Transparent';
    }
  }

  loadColorsets(page?:number, perpage?:number) : void {
    this.colorsetService.getColorsets(page, perpage).subscribe( res => {
      // debugger;
      console.log('Res: ' + res);
      console.log('All colorsets: ' + res.result);
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
    let index = this.colorsets.findIndex( c => c.isDefault);
    if (index >= 0) {
      console.log('Index of default colorset is: ' + index);
      Colorset.deepCopyColorset(this.colorsets[index], this.colorset, true);
      Colorset.setCssVarsFromColorSet(this.colorset);
      this.pendingChanges = false;
    }
  }

  loadSelectedColorset() : void {
    console.log('Selected Colorset Id is: ' + this.selectedColorsetId);
    let index = this.colorsets.findIndex( c => c.id == this.selectedColorsetId);
    if (index >= 0) {
      console.log('Index to load is: ' + index);
      Colorset.deepCopyColorset(this.colorsets[index], this.colorset, true);
      Colorset.setCssVarsFromColorSet(this.colorset);
      this.pendingChanges = false;
    }
  }

  setCurrentColorsetAsDefault() : void {
    let index = this.colorsets.findIndex( c => c.id === this.colorset.id);
    if (index >= 0) {
      console.log('Index to set as default is: ' + index);
      // Reset the current default - there can only be one default.
      let currDefaultIndex = this.getIndexOfDefaultColorset();
      if (currDefaultIndex >= 0) {
        this.colorsets[currDefaultIndex].isDefault = false;
      }
      this.colorsets[index].isDefault = true;
      this.colorset.isDefault = true;
      // Write it to the database.
      this.colorsetService.setDefaultColorset(this.colorset.id, this.colorset).subscribe( res => {
        // ignore successful result
      }, err => {
        // show the error
        this.alertify.error(err);
      } );

      // The colorset has not been saved - only the default flag has been saved.
      this.pendingChanges = true;
    }
  }

  protectCurrentColorset(setProtect: boolean) : void {
    // console.log('Load ' + this.selectedColorset);
    // var index = peoples.findIndex(p => p.attr1 == "john")
    console.log('Current Colorset Id is: ' + this.colorset.id);
    let index = this.colorsets.findIndex( c => c.id == this.colorset.id);
    if (index >= 0) {
      console.log('Index to protect/unprotect is: ' + index + ' Protect: ' + setProtect);
      this.colorsets[index].isProtected = setProtect;
      this.colorset.isProtected = setProtect;
      this.pendingChanges = true;
    }
  }

  saveCurrentColorset() : void {
    // console.log('Load ' + this.selectedColorset);
    // var index = peoples.findIndex(p => p.attr1 == "john")
    console.log('Current Colorset Id is: ' + this.colorset.id);
    let index = this.colorsets.findIndex( c => c.id == this.colorset.id);
    if (index >= 0) {
      console.log('Index to save is: ' + index);
      this.pendingChanges = false;
      this.colorsetService.updateColorset(this.colorset.id, this.colorset).subscribe( res => {
        // ignore successful result
        console.log('Saved');
      }, err => {
        // show the error
        this.alertify.error(err);
      } );

    }
  }

  deleteCurrentColorset() : void {
    // console.log('Load ' + this.selectedColorset);
    // var index = peoples.findIndex(p => p.attr1 == "john")
    // Cannot delete default colorset
    // Cannot delete protected colorset
    console.log('Current Colorset Id is: ' + this.colorset.id);
    let index = this.colorsets.findIndex( c => c.id == this.colorset.id);
    if (index >= 0) {
      console.log('Index to delete is: ' + index);
      if (this.colorsets[index].isDefault) {
        this.alertify.error('This is the default colorset - it cannot be deleted');
        return;
      }
      if (this.colorsets[index].isProtected) {
        this.alertify.error('This colorset is protected - it cannot be deleted');
        return;
      }

      this.colorsetService.deleteColorset(this.colorsets[index].id).subscribe( res => {
      // If delete was successful, then we load the default colorset.
      this.pendingChanges = false;
      this.loadDefaultColorset();
    }, err => {
      // show the error
      this.alertify.error(err);
    } );

  }
}

  createColorset() : void {
    // console.log('Load ' + this.selectedColorset);
    // var index = peoples.findIndex(p => p.attr1 == "john")
    console.log('Create colorset:' + this.newColorsetName);
    // Set name and clear id. Set isDefault and isProtected to false.
    this.colorset.colorsetName = this.newColorsetName;
    this.colorset.id = null;
    this.colorset.isDefault = false;
    this.colorset.isProtected = false;

    this.colorsetService.createColorset(this.colorset).subscribe( res => {
      // If create was successful, then we append the new colorset to colorsets[].
      this.pendingChanges = false;
      let xx: Colorset = (res as Colorset);
      console.log('New colorset: ' + xx);
      this.colorset.id = xx.id;
      console.log('New colorset id: ' + xx.id);
    }, err => {
      // show the error
      this.alertify.error(err);
    } );
  }

  getIndexOfColorsetById(colorsetId: number) : number {
    let index = this.colorsets.findIndex( c => c.id == colorsetId);
    return index;
  }

  getIndexOfDefaultColorset() : number {
    let index = this.colorsets.findIndex( c => c.isDefault == true);
    return index;
  }

}

