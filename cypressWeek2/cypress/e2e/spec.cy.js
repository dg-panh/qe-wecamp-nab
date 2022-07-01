describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://demo.guru99.com/test/newtours/');
    cy.wait(10000);
    //login
    cy.get("input[name='userName']").click();
    cy.get("input[name='userName']").type('tutorial');
    cy.get("input[name='password']").click();
    cy.get("input[name='password']").type('tutorial');
    cy.get("input[name='submit']").click();
    cy.wait(1000);
    cy.get("h3").should('be.visible').and('have.text', 'Login Successfully');
    cy.get("h3").contains('Login Successfully');

    //
    cy.get("a[href='reservation.php']").click();
    //input fields
    cy.get("font:nth-child(1) > input:nth-child(2)").click();
    cy.get("select[name='passCount']").select("2").should("have.value", "2");
    cy.get("select[name='fromPort']").select("Acapulco").should("have.value", "Acapulco");
    cy.get("select[name='fromMonth']").select("August").should("have.value", "8");
    cy.get("select[name='fromDay']").select("16").should("have.value", "16");
    cy.get("select[name='toPort']").select("London").should("have.value", "London");
    cy.get("select[name='toMonth']").select("August").should("have.value", "8");
    cy.get("select[name='toDay']").select("30").should("have.value", "30");
    cy.get("select[name='passCount']").select("2").should("have.value", "2");
    cy.get("font > font:nth-child(2)").click();
    cy.get("select[name='airline']").select("Blue Skies Airlines").should("have.value", "Blue Skies Airlines");
    cy.get("input[name='findFlights']").click();
    //
    cy.get("font:nth-child(1) > b > font:nth-child(1)").contains('After flight finder - No Seats Avaialble');

  })
})