//THIS IS THE ORIGINAL FAILING TEST
it('shows the original failing test', () => {
  cy.visit('https://the-internet.herokuapp.com/dynamic_controls');

  cy.get('#checkbox').should('be.visible');
  cy.contains('button', 'Remove').click();

  cy.get('#message').should('contain', "It's disabled");  // This line was failing
});



//THIS IS THE NEW TEST AFTER DEBUGGING
describe('Debugging techniques with dynamic controls', () => {

it('uses dynamic Controls for the debugged version', () => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_controls');

    cy.get('#checkbox').debug().should('be.visible'); // used .debug() to stop and inspect the element
    
     cy.contains('button', 'Remove').click().then(() => {
        cy.log('Clicked remove button and waiting for dynamic message');  // used cy.log() to write message
      });

    cy.get('#message').should('be.visible').debug().then(($msg) => { // Used .debug() and .then() to look at the actual message 
        const actualText = $msg.text().trim();
        cy.log(`Actual message text: ${actualText}`);   // to write the actual message
      });

    cy.get('#message').should('contain', "It's gone!");  // This is to say the expectation after debugging the test

    cy.get('#checkbox', { timeout: 10000 }).should('not.exist'); //ensuring that checkbox is removed by extending timeout
  });

});
