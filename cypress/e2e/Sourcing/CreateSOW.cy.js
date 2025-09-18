/// <reference types="cypress" />

describe('Verify the login functionality', () => {
  beforeEach(() => {
    cy.visit('https://qa-account.simplifysandbox.net/'); // or your login page URL
  });

  it('TC_01 - After successful login, it should redirect user to the program list page', () => {
    cy.get('[formcontrolname="username"]').type('akshay.khatode+3@simplifyvms.com');
    cy.get('[formcontrolname="password"]').type('Akshay@1234');
    cy.get('[class="col-12 ps-1"]').click().wait(5000);

    // Handle redirection to another domain
    cy.origin('https://qa-hiring.simplifysandbox.net', () => {
      // Wait for some element unique to the dashboard page
      cy.url().should('include', '/dashboard');

      cy.get('[class="layout-menuitem-text ng-tns-c2428658477-73"]').click({force:true});
    });
  });
});

