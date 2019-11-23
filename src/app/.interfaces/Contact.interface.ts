interface IContact {
  id?: number;
  firstname?: string;
  lastname?: string;
  fullName?: string;
  phoneOffice?: string;
  phoneMobile?: string;
  email?: string;
  photoUrl?: string;
  specialization?: string;
  position?: string;
  blurb?: string;
  isCollapsed?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  version?: number;
  }

export class Contact implements IContact {
  id?: number;
  firstname?: string;
  lastname?: string;
  fullName: string;
  phoneOffice?: string;
  phoneMobile?: string;
  email?: string;
  photoUrl?: string;
  specialization?: string;
  position?: string;
  blurb?: string;
  isCollapsed?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  version?: number;
}

