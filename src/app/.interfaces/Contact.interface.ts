interface IContact {
  fullName: string;
  officePhone: string;
  mobilePhone?: string;
  emailAddress?: string;
  pictureName?: string;
  specialization?: string;
  position?: string;
  blurb?: string;
}

export class Contact implements IContact {
  fullName: string;
  officePhone: string;
  mobilePhone?: string;
  emailAddress?: string;
  pictureName?: string;
  specialization?: string;
  position?: string;
  blurb?: string;
}
