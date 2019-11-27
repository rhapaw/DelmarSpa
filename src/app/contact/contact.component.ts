import { Component, OnInit } from '@angular/core';
import { Contact } from '../_models/contact';
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
        firstName: 'Adrian',
        lastName: 'Young',
        phoneOffice: '(909) 945-4586',
        phoneMobile: '(909) 241-9500',
        email: 'adrian@delmar1.com',
        photoUrl: 'adrianyoung.jpg',
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
        firstName: 'Jim',
        lastName: 'Cordova',
        phoneOffice: '(909) 945-4594',
        email: 'jimc@delmar1.com',
        photoUrl: 'jimcordova.jpg',
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
        firstName: 'Matt',
        lastName: 'Young',
        phoneOffice: '(909) 945-4590',
        email: 'matty@delmar1.com',
        photoUrl: 'mattyoung.jpg',
        position: 'Asset Manager',
        blurb: `
          <p>
          Matt joined Delmar in 1995 as a property manager and graduated to the position of Controller in
          2002. Matt currently oversees Delmar’s investment division and is the head asset manager.
          </p>`
      },

      {
        firstName: 'Quinn',
        lastName: 'Young',
        phoneOffice: '(909) 945-4594',
        email: 'quinny@delmar1.com',
        photoUrl: 'quinnyoung.jpg',
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
        firstName: 'Donald',
        lastName: 'Barmakian',
        phoneOffice: '(909) 945-4599',
        phoneMobile: '(909) 223-0025',
        email: 'donb@delmar1.com',
        photoUrl: 'donbarmakian.jpg',
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
        firstName: 'Jack',
        lastName: 'Ghazarian',
        phoneOffice: '(909) 945-4588',
        phoneMobile: '(714) 349-2765',
        email: 'jackg@delmar1.com',
        photoUrl: 'jackghazarian.jpg',
        position: 'Broker',
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
        firstName: 'Robert',
        lastName: 'Jimenez',
        phoneOffice: '(909) 945-4598',
        phoneMobile: '(909) 238-9874',
        email: 'robertj@delmar1.com',
        photoUrl: 'robertjimenez.jpg',
        position: 'Broker',
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
        firstName: 'David',
        lastName: 'McErlean',
        phoneOffice: '(949) 370-5415',
        phoneMobile: '(949) 370-5415',
        email: 'davem@delmar1.com',
        photoUrl: 'davidmcerlean.jpg',
        position: 'Broker',
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
        firstName: 'Mark',
        lastName: 'McErlean',
        phoneOffice: '(909) 945-4595',
        phoneMobile: '(909) 214-9125',
        email: 'markm@delmar1.com',
        photoUrl: 'markmcerlean.jpg',
        position: 'Broker',
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
        firstName: 'Stephen',
        lastName: 'Wheatley',
        phoneOffice: '(909) 945-4589',
        phoneMobile: '(909) 268-8171',
        email: 'stevew@delmar1.com',
        photoUrl: 'stephenwheatley.jpg',
        position: 'Broker',
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

    this.contacts.forEach( (x) =>
    {
      x.isCollapsed = true;
      x.fullName = `${x.firstName} ${x.lastName}`;
    });
  }

}
