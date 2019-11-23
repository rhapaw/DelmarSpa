import { Component, OnInit } from '@angular/core';
import { Contact } from '../.interfaces/contact.interface';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[];
  aContact: Contact;

  constructor() {}

  ngOnInit() {
    this.contacts = [
      {
        fullName: 'Adrian Young',
        officePhone: '(909) 945-4586',
        mobilePhone: '(909) 241-9500',
        emailAddress: 'adrian@delmar1.com',
        pictureName: 'adrianyoung.jpg',
        position: 'President',
        specialization: 'Office/Investment',
        blurb: `
        <p>
        Adrian Young, RPA is responsible for the overall operations, strategic planning, market
        research/analysis, and the leasing/marketing operations. Under his direction, the company's
        projects have been successfully leased. He also serves as a public liaison with various banks,
        brokerage firms, local institutions, and regulatory agencies.
    </p>
    <p>
        During the past twenty years, Mr. Young has been named as a court-appointed receiver for over
        one hundred properties throughout California.
    </p>`
      },

      {
        fullName: 'Jim Cordova',
        officePhone: '(909) 945-4594',
        emailAddress: 'jimc@delmar1.com',
        pictureName: 'jimcordova.jpg',
        position: 'Controller',
        blurb: `
          <p>
          Jim Cordova is responsible for the overall management of the accounting department. His duties
          include the preparation of the monthly property financial packages, annual budgets, annual audits
          and CAM/Operating Expense reconciliations. The accounting department currently processes
          payable and receivables for over ten properties, four companies and three foreign partnerships
          including those of the company.
          </p>
          <p>
          Mr. Cordova also coordinates all long-term management and
          financial planning for Delmar Property Management. Delmar Property Management is currently
          using Windows 7 & 8, Microsoft Excel, Microsoft Word, and Microsoft Access and uses Spectra
          property management software.
          </p>`
      },

      {
        fullName: 'Matt Young',
        officePhone: '(909) 945-4590',
        emailAddress: 'matty@delmar1.com',
        pictureName: 'mattyoung.jpg',
        position: 'Asset Manager',
        blurb: `
          <p>
          Matt joined Delmar in 1995 as a property manager and graduated to the position of Controller in
          2002. Matt currently oversees Delmar’s investment division and is the head asset manager.
          </p>`
      },

      {
        fullName: 'Quinn Young',
        officePhone: '(909) 945-4594',
        emailAddress: 'quinny@delmar1.com',
        pictureName: 'quinnyoung.jpg',
        position: 'Property Manager',
        blurb: `
          <p>
          Quinn Young is responsible for all physical aspects of the properties. He is familiar with commercial
          leases and the implementation of the lease. He regularly visits and inspects the properties and deals
          with various building and tenant issues. He supervises all recurring maintenance work. He assists in
          the budgeting process and then works to schedule and implement the work in a timely and
          professional manner.
          </p>`
      },

      {
        fullName: 'Donald Barmakian',
        officePhone: '(909) 945-4599',
        mobilePhone: '(909) 223-0025',
        emailAddress: 'donb@delmar1.com',
        pictureName: 'donbarmakian.jpg',
        specialization: 'Industrial/Investment',
        position: 'Broker',
        blurb: `
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur lobortis lacus. Aliquam at urna a urna laoreet faucibus.
          Pellentesque id orci id tellus dictum ultrices. Vestibulum eu diam
          ac mauris lacinia faucibus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum at cursus risus. Cras sit amet metus
          dui. Etiam porttitor interdum erat quis hendrerit. Nullam eu nunc
          quis neque tempor dapibus. Donec nec sapien vel purus posuere
          suscipit at non lectus. Duis et enim porttitor enim porttitor congue
          et dapibus ipsum. Nulla viverra nisi a lorem bibendum aliquet.
          Suspendisse potenti. Ut nulla odio, imperdiet at odio a, euismod
          faucibus est.
          </p>`
      },

      {
        fullName: 'Jack Ghazarian',
        officePhone: '(909) 945-4588',
        mobilePhone: '(714) 349-2765',
        emailAddress: 'jackg@delmar1.com',
        pictureName: 'jackghazarian.jpg',
        specialization: 'Retail/Investments',
        blurb: `
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur lobortis lacus. Aliquam at urna a urna laoreet faucibus.
          Pellentesque id orci id tellus dictum ultrices. Vestibulum eu diam
          ac mauris lacinia faucibus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum at cursus risus. Cras sit amet metus
          dui. Etiam porttitor interdum erat quis hendrerit. Nullam eu nunc
          quis neque tempor dapibus. Donec nec sapien vel purus posuere
          suscipit at non lectus. Duis et enim porttitor enim porttitor congue
          et dapibus ipsum. Nulla viverra nisi a lorem bibendum aliquet.
          Suspendisse potenti. Ut nulla odio, imperdiet at odio a, euismod
          faucibus est.
          </p>`
      },

      {
        fullName: 'Robert Jimenez',
        officePhone: '(909) 945-4598',
        mobilePhone: '(909) 238-9874',
        emailAddress: 'robertj@delmar1.com',
        pictureName: 'robertjimenez.jpg',
        specialization: 'Industrial/Investment',
        blurb: `
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur lobortis lacus. Aliquam at urna a urna laoreet faucibus.
          Pellentesque id orci id tellus dictum ultrices. Vestibulum eu diam
          ac mauris lacinia faucibus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum at cursus risus. Cras sit amet metus
          dui. Etiam porttitor interdum erat quis hendrerit. Nullam eu nunc
          quis neque tempor dapibus. Donec nec sapien vel purus posuere
          suscipit at non lectus. Duis et enim porttitor enim porttitor congue
          et dapibus ipsum. Nulla viverra nisi a lorem bibendum aliquet.
          Suspendisse potenti. Ut nulla odio, imperdiet at odio a, euismod
          faucibus est.
          </p>`
      },

      {
        fullName: 'David McErlean',
        officePhone: '(949) 370-5415',
        mobilePhone: '(949) 370-5415',
        emailAddress: 'davem@delmar1.com',
        pictureName: 'davidmcerlean.jpg',
        specialization: 'Industrial/Investment',
        blurb: `
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur lobortis lacus. Aliquam at urna a urna laoreet faucibus.
          Pellentesque id orci id tellus dictum ultrices. Vestibulum eu diam
          ac mauris lacinia faucibus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum at cursus risus. Cras sit amet metus
          dui. Etiam porttitor interdum erat quis hendrerit. Nullam eu nunc
          quis neque tempor dapibus. Donec nec sapien vel purus posuere
          suscipit at non lectus. Duis et enim porttitor enim porttitor congue
          et dapibus ipsum. Nulla viverra nisi a lorem bibendum aliquet.
          Suspendisse potenti. Ut nulla odio, imperdiet at odio a, euismod
          faucibus est.
          </p>`
      },

      {
        fullName: 'Mark McErlean',
        officePhone: '(909) 945-4595',
        mobilePhone: '(909) 214-9125',
        emailAddress: 'markm@delmar1.com',
        pictureName: 'markmcerlean.jpg',
        specialization: 'Industrial/Investment',
        blurb: `
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur lobortis lacus. Aliquam at urna a urna laoreet faucibus.
          Pellentesque id orci id tellus dictum ultrices. Vestibulum eu diam
          ac mauris lacinia faucibus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum at cursus risus. Cras sit amet metus
          dui. Etiam porttitor interdum erat quis hendrerit. Nullam eu nunc
          quis neque tempor dapibus. Donec nec sapien vel purus posuere
          suscipit at non lectus. Duis et enim porttitor enim porttitor congue
          et dapibus ipsum. Nulla viverra nisi a lorem bibendum aliquet.
          Suspendisse potenti. Ut nulla odio, imperdiet at odio a, euismod
          faucibus est.
          </p>`
      },

      {
        fullName: 'Stephen Wheatley',
        officePhone: '(909) 945-4589',
        mobilePhone: '(909) 268-8171',
        emailAddress: 'stevew@delmar1.com',
        pictureName: 'stephenwheatley.jpg',
        specialization: 'Office/Land/Investment',
        blurb: `
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur lobortis lacus. Aliquam at urna a urna laoreet faucibus.
          Pellentesque id orci id tellus dictum ultrices. Vestibulum eu diam
          ac mauris lacinia faucibus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum at cursus risus. Cras sit amet metus
          dui. Etiam porttitor interdum erat quis hendrerit. Nullam eu nunc
          quis neque tempor dapibus. Donec nec sapien vel purus posuere
          suscipit at non lectus. Duis et enim porttitor enim porttitor congue
          et dapibus ipsum. Nulla viverra nisi a lorem bibendum aliquet.
          Suspendisse potenti. Ut nulla odio, imperdiet at odio a, euismod
          faucibus est.
          </p>`
      }
    ];
  }
}
