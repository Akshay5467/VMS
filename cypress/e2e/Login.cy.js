/// <reference types="cypress" />

describe('Verify the login functionality', () => {
  beforeEach(() => {

    // Visit the login page before each test runsnp
    cy.visit('/')
  });

  it('TC_01-After successful login, it should redirects user to the program list page', () => {
    cy.get('[formcontrolname="username"]').type('admin')
    cy.get('[formcontrolname="password"]').type('Admin@Simplify')
    cy.get('[class="col-12 ps-1"]').click()

    // Verify the pop-up message after login
    cy.on('window:alert', (alertText) => {
      // Assert that the alert text contains 'login successful'
      expect(alertText).to.include('User logged in successfully!').should('be.visible');
      return false;
    });
    cy.wait(6000)
    cy.url().should('include', '/control-panel/programs/list');
  });

  it('TC_02-Verify for valid username & invalid password', () => {
    // Enter blank username and password
    cy.get('[formcontrolname="username"]').type('admin')
    cy.get('[formcontrolname="password"]').type('admin@123')
    cy.get('[class="col-12 ps-1"]').click()

    // assertion to check the error message
    cy.on('window:alert', (alertText) => {
      // Assert that the alert text contains 'login successful'
      expect(alertText).to.include('Unable to login. Invalid credentials. Please try again.').should('be.visible');
      return false;
    });
  });

  it('TC_03-Verify for Invalid username & valid password', () => {
    // Enter blank username and password
    cy.get('[formcontrolname="username"]').type('admin123')
    cy.get('[formcontrolname="password"]').type('Admin@Simplify')
    cy.get('[class="col-12 ps-1"]').click()

    // assertion to check the error message
    cy.on('window:alert', (alertText) => {
      // Assert that the alert text contains 'login successful'
      expect(alertText).to.include('Unable to login. Invalid credentials. Please try again.').should('be.visible');
      return false;
    });
  });

  // Test case for blank credentials (both username and password blank)
  it('TC_04-Login button should be disable when both fields are blank', () => {
    // Enter blank username and password
    cy.get('[class="btn_skyblue w-100 align-items-center"]').should('be.disabled'); // Assert that the button is disabled
  });
});