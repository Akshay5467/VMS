import { v4 as uuidv4 } from 'uuid';
const companyPrefixes = [
    'TCS', 'Infosys', 'Wipro', 'TechMahindra', 'Capgemini', 'Cognizant',
    'HCL', 'Accenture', 'Mindtree', 'LTI', 'Persistent', 'Mphasis',
    'Oracle', 'IBM', 'Dell', 'Amazon', 'Google', 'Microsoft', 'Flipkart'
  ];
  
  const generateRealisticName = (type) => {
    const base = companyPrefixes[Math.floor(Math.random() * companyPrefixes.length)];
    const suffix = Array.from({ length: 3 }, () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 26))
    ).join('');
    return `${base}${type}${suffix}`; // Example: InfosysClientQWE
  };
  

describe('Unique Programme name', () => {
    let programName;

    before(() => {        
        programName = generateRealisticName('Program');
      });
   
    it('should create a unique Programme via UI', () => {
        const uniqueCode = `PRG-${uuidv4()}`; // Always unique
        cy.visit('/')

        cy.get('[formcontrolname="username"]').type('admin')
        cy.get('[formcontrolname="password"]').type('Admin@Simplify')
        cy.get('[class="col-12 ps-1"]').click().wait(4000)
        cy.get('[class="cursor pl_10 fs_13"]').contains('Programs').click();
        cy.get('[class="d-none d-md-flex"]').click();
        // Select Client
        cy.get('[class="ng-input"]').first().type('AkshayVMS').wait(3000).type('{downarrow}')
        .type('{enter}');; //  

        cy.get('[class="ng-input"]').last().click();
        cy.contains('MSP-MANAGED').click().wait(1000);


        // Select MSP
        cy.get('[class="ng-input"]').last().type('AkshayVMS').wait(3000).type('{downarrow}')
        .type('{enter}'); // 
        cy.get('[id="inputName"]').type(programName).wait(1000)
        cy.get('[id="inputNumber"]').type(uniqueCode)
        cy.get('[id="icondisplay"]').click();
        cy.get('[data-date="2025-3-16"]').click()
        cy.get('[class="float-end"]').click().wait(3000);
        cy.get('[type="button"]').click()
    });
});