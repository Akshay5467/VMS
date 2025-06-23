/// <reference types="cypress" />

describe('Verify the login functionality', () => {
    beforeEach(() => {

        // Visit the login page before each test runsnp
        cy.visit('/')
        cy.get('[formcontrolname="username"]').type('admin');
        cy.get('[formcontrolname="password"]').type('Admin@Simplify');
        cy.get('[class="col-12 ps-1"]').click().wait(4000);
    });

    it('Create Checklist', () => {
        cy.get('[placeholder="Search.."]').type('AkshayVMS').wait(3000)
        cy.get('[class="col-4 d_flex cursor-pointer"]').click({ force: true });
        cy.contains('Onboarding/Credentialing').click();
        cy.get('[class="nested-menu-item text_truncate"]').last().click().wait(4000);

    })
});