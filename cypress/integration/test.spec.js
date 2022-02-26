describe("Bloomtech Pizza App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  // I'm a bit confused about the instruction regarding
  // "test that you can add text to the box", not really
  // sure what box this is referencing? The name and instruction inputs?
  // Either way, I'll create tests for both!

  // Helpers to grab elements
  const nameInput = () => cy.get("input[name=name]");
  const instructionTextArea = () => cy.get("textarea[name=specialInstructions");

  const checkboxPepperoni = () => cy.get("input[name=pepperoni]");
  const checkboxBacon = () => cy.get("input[name=bacon]");
  const checkboxMushrooms = () => cy.get("input[name=mushrooms]");
  const checkboxOnions = () => cy.get("input[name=onions]");

  const submitBtn = () => cy.get("button[id=order-button]");
  const pizzaSizeSelect = () => cy.get("select[name=pizzaSize]");

  // TEST: for name input and instructions test area
  // PURPOSE: for typing capability, and existence
  it("name input, and textarea exists", () => {
    nameInput().should("exist");
    instructionTextArea().should("exist");
  });
  it("able to type values into the name input and text area", () => {
    nameInput().type("Spiderman");
    nameInput().should("have.value", "Spiderman");
    instructionTextArea().type(
      "Please do not ring the doorbell! kids sleeping!"
    );
    instructionTextArea().should(
      "have.value",
      "Please do not ring the doorbell! kids sleeping!"
    );
  });

  // TEST: for checkboxes
  // PURPOSE: ability to check and uncheck them, and existence
  it("can mark the checkboxes as checked and unchecked", () => {
    checkboxPepperoni().should("exist");
    checkboxBacon().should("exist");
    checkboxMushrooms().should("exist");
    checkboxOnions().should("exist");

    checkboxPepperoni().check();
    checkboxBacon().check();
    checkboxMushrooms().check();
    checkboxOnions().check();

    checkboxPepperoni().uncheck();
    checkboxBacon().uncheck();
    checkboxMushrooms().uncheck();
    checkboxOnions().uncheck();
  });

  // Test: for submit button
  // PURPOSE: ability to submit the form
  it("able submit the form", () => {
    // Have to pass validation so creating values for whats needed here
    nameInput().type("Spiderman");
    pizzaSizeSelect().select(1);

    submitBtn().click();
  });
});
