/// <reference types="cypress" />

describe('Verify the login functionality', () => {
  beforeEach(() => {

    // Visit the login page before each test run
    cy.visit('/')
  });

  it('TC_01-After successful login, it should redirects user to the program list page', () => {
    cy.get('[formcontrolname="username"]').type('akshay.khatode+4@simplifyvms.com')
    cy.get('[formcontrolname="password"]').type('Akshay@1234')
    cy.get('[class="col-12 ps-1"]').click().wait(7000)

    cy.origin('https://qa-hiring.simplifysandbox.net/dashboard', () => {
      const timestamp = Date.now();
      const firstName = `John${timestamp}`;
      const lastName = `Doe${timestamp}`;
      const email = `john.doe${timestamp}@example.com`;

      // create candidate
      // 1.Getting started
      cy.get('[class="btn_text"]').click({ force: true }).wait(2000);
      cy.get('[class="ng-value ng-star-inserted"]').contains('SOW Worker')

      cy.get('[class="p-button-label"]').contains('Get Started ').click();
      cy.get('[id="firstName"]').type(firstName); // enter first name

      cy.get('[id="lastName"]').type(lastName); // enter last name
      cy.get('[placeholder="MM/DD"]').first().click() // enter DOB
      cy.get('[class="p-ripple p-element ng-tns-c2612975420-89 ng-star-inserted"]', { timeout: 10000 })
        .eq(7).click();
      cy.contains('Select Country').click({ force: true }).wait(5000);

      // Step 2: Find the actual input field and type
      cy.get('input[aria-autocomplete="list"]').eq(3).type('India').wait(2000);
      cy.get('[class="ng-option-label ng-star-inserted"]').eq(1).contains('India').click({ force: true })
      cy.get('[id="ssn_id"]').type('7654')

      cy.get('[placeholder="Enter Email Address (Primary)"]').type(email, { force: true }).wait(5000)
      cy.get('[id="primaryPhone"]').type('8989890909')
      cy.get('[class="p-button-label"]').contains('Continue').click({ force: true }).wait(2000)
      cy.get('[label="Continue"]').click({ force: true }).wait(2000)
      cy.get('[class="p-button-label"]').contains('Create New Candidate ').click();
    });
  });
});