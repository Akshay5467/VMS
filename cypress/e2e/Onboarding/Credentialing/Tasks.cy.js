/// <reference types="cypress" />

describe('Verify the login functionality', () => {
    beforeEach(() => {
  
      // Visit the login page before each test runsnp
      cy.visit('/')
      cy.get('[formcontrolname="username"]').type('admin');
        cy.get('[formcontrolname="password"]').type('Admin@Simplify');
        cy.get('[class="col-12 ps-1"]').click().wait(4000);
    });

    it('Create Tasks', () => {
        cy.get('[placeholder="Search.."]').type('AkshayVMS').wait(3000)
        cy.get('[class="col-4 d_flex cursor-pointer"]').click({force:true});
        cy.contains('Onboarding/Credentialing').click();
        cy.get('[class="nested-menu-item text_truncate"]').first().click().wait(4000);

        cy.get('[class="p-element text-container text-capitalize"]').should('be.visible').then(($tasks) => {
            if ($tasks.length === 0) {
              // If no tasks are found, click on the 'Import Tasks' button
              cy.get('[class="d-none d-md-flex"]').click(); 
      
             
              cy.wait(5000); // Wait for the import process to complete
      
              // Verify that tasks are now visible on the page
              cy.get('[class="p-element text-container text-capitalize"]').should('have.length.greaterThan', 0); // Ensure tasks are added
            } else {
              // If tasks are already visible, log this in the console
              cy.log('Tasks already available, no need to import');
            }
       })
    })
    });