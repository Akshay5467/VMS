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
  

describe('Vendor Management Front-End Automation', () => {
    let clientName, vendorName, mspName, programName;

    before(() => {
        clientName = generateRealisticName('Client');
        vendorName = generateRealisticName('Vendor');
        mspName = generateRealisticName('MSP');
        programName = generateRealisticName('Program');
      });

    it('should create a unique Vendor via UI', () => {
        cy.visit('/')

        cy.get('[formcontrolname="username"]').type('admin')
        cy.get('[formcontrolname="password"]').type('Admin@Simplify')
        cy.get('[class="col-12 ps-1"]').click().wait(4000)
        cy.get('[class="cursor pl_10 fs_13"]').contains('Vendors').click();
        cy.get('[class="d-none d-md-flex"]').click();
        cy.get('[placeholder="Vendor Organization Name"]').type(vendorName);
        cy.get('[class="col-auto mx-2"]').click();
        cy.get('[class="col-auto mx-2"]').click();
    });

    it('should create a unique client via UI', () => {
        cy.visit('/')

        cy.get('[formcontrolname="username"]').type('admin')
        cy.get('[formcontrolname="password"]').type('Admin@Simplify')
        cy.get('[class="col-12 ps-1"]').click().wait(4000)
        cy.get('[class="cursor pl_10 fs_13"]').contains('Clients').click().wait(2000);
        cy.get('[class="d-none d-md-flex"]').click();
        cy.get('[placeholder="Client Organization Name"]').type(clientName);
        cy.get('[class="col-auto mx-2"]').click();
        cy.get('[class="col-auto mx-2"]').click();
    });

    it('should create a unique MSP via UI', () => {
        cy.visit('/')

        cy.get('[formcontrolname="username"]').type('admin')
        cy.get('[formcontrolname="password"]').type('Admin@Simplify')
        cy.get('[class="col-12 ps-1"]').click().wait(4000)
        cy.get('[class="cursor pl_10 fs_13"]').contains('MSPs').click();
        cy.get('[class="d-none d-md-flex"]').click();
        cy.get('[placeholder="MSP Organization Name"]').type(mspName);
        cy.get('[class="col-auto mx-2"]').click();
        cy.get('[class="col-auto mx-2"]').click();
    });

    it('should create a unique Programme via UI', () => {
        cy.visit('/')

        cy.get('[formcontrolname="username"]').type('admin')
        cy.get('[formcontrolname="password"]').type('Admin@Simplify')
        cy.get('[class="col-12 ps-1"]').click().wait(4000)
        cy.get('[class="cursor pl_10 fs_13"]').contains('Programs').click();
        cy.get('[class="d-none d-md-flex"]').click();
        // Select Client
        cy.get('[class="ng-input"]').first().type(clientName).wait(3000).type('{downarrow}')
        .type('{enter}');; //  

        cy.get('[class="ng-input"]').last().click();
        cy.contains('MSP-MANAGED').click().wait(1000);


        // Select MSP
        cy.get('[class="ng-input"]').last().type(mspName).wait(3000).type('{downarrow}')
        .type('{enter}'); // 
        cy.get('[id="inputName"]').type(programName).wait(1000)
        cy.get('[id="inputNumber"]').type('9i8u')
        cy.get('[id="icondisplay"]').click();
        cy.get('[data-date="2025-3-16"]').click()
        cy.get('[class="float-end"]').click().wait(3000);
        cy.get('[type="button"]').click();
    });
});