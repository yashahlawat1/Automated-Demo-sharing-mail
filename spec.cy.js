const { faker } = require("@faker-js/faker");

describe('Template Spec', async () => {
  it('Verifies if properties containing tags are updated', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.visit('https://www.sprinklr.com/');
    cy.get('[class="flex gap-8"]', { timeout: 120000 }).click();
    cy.get('[id="email-856f51b0-1ccb-495b-891c-b147dbd9bcb2_form-jQTmY6RJSm7tanTf4VS0F"]', { timeout: 120000 }).click();
    cy.get('[id="email-856f51b0-1ccb-495b-891c-b147dbd9bcb2_form-jQTmY6RJSm7tanTf4VS0F"]').type("yash.ahlawat@sprinklr.com");
    cy.get('[id="firstname-856f51b0-1ccb-495b-891c-b147dbd9bcb2_form-jQTmY6RJSm7tanTf4VS0F"]', { timeout: 120000 }).click();
    cy.get('[id="firstname-856f51b0-1ccb-495b-891c-b147dbd9bcb2_form-jQTmY6RJSm7tanTf4VS0F"]').type("Yash");
    cy.get('[id="lastname-856f51b0-1ccb-495b-891c-b147dbd9bcb2_form-jQTmY6RJSm7tanTf4VS0F"]', { timeout: 120000 }).click();
    cy.get('[id="lastname-856f51b0-1ccb-495b-891c-b147dbd9bcb2_form-jQTmY6RJSm7tanTf4VS0F"]').type("Ahlawat");
    cy.get('[id="company-856f51b0-1ccb-495b-891c-b147dbd9bcb2_form-jQTmY6RJSm7tanTf4VS0F"]', { timeout: 120000 }).click();
    cy.get('[id="company-856f51b0-1ccb-495b-891c-b147dbd9bcb2_form-jQTmY6RJSm7tanTf4VS0F"]').type("Sprinklr Inc");
    cy.get('[id="job_function__c-856f51b0-1ccb-495b-891c-b147dbd9bcb2_form-jQTmY6RJSm7tanTf4VS0F"]', { timeout: 12000 })
      .select('Product Management') 
      .should('have.value', 'Product Management');
    cy.get('[id="role__c-856f51b0-1ccb-495b-891c-b147dbd9bcb2_form-jQTmY6RJSm7tanTf4VS0F"]', { timeout: 120000 })
      .select('Director') 
      .should('have.value', 'Director');
    cy.get('[id="phone-856f51b0-1ccb-495b-891c-b147dbd9bcb2_form-jQTmY6RJSm7tanTf4VS0F"]', { timeout: 120000 }).click();
    cy.get('[id="phone-856f51b0-1ccb-495b-891c-b147dbd9bcb2_form-jQTmY6RJSm7tanTf4VS0F"]').type("9845503430");
    cy.get('[type="submit"]', { timeout: 120000 }).click();
  });
});
