export interface IColorSet {
  primary_color: string;
  primary_bg: string;
  secondary_color: string;
  secondary_bg: string;
  info_color: string;
  info_bg: string;
  brand_color: string;
  brand_bg: string;
  navbar_color: string;
  navbar_color_active: string;
  navbar_bg: string;
}

export class ColorSet implements IColorSet {
  primary_color: string;
  primary_bg: string;
  secondary_color: string;
  secondary_bg: string;
  info_color: string;
  info_bg: string;
  brand_color: string;
  brand_bg: string;
  navbar_color: string;
  navbar_color_active: string;
  navbar_bg: string;

  constructor() {}
}
