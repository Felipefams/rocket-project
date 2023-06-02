describe('Routes test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it("should have a link to the rockets page", () => {
    cy.get("nav").find("a").eq(1).click()
    cy.url().should("include", "/rockets");
  });

  it("should have a link to the crewmen page", () => {
    cy.get("nav").find("a").eq(2).click()
    cy.url().should("include", "/crewmen");
  });

  it("should have a link to the crews page", () => {
    cy.get("nav").find("a").eq(3).click()
    cy.url().should("include", "/crews");
  });

  it("should have a link to the launches page", () => {
    cy.get("nav").find("a").eq(4).click()
    cy.url().should("include", "/launches");
  });
});

function openModal() {
    cy.get(".modal").should("not.exist")
    cy.get(".add-button").click()
    cy.get(".modal").should("be.visible")
}

describe("rocket crud", () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/rockets')
  });
  const rocketName = "automated-test";
  const editedRocketName = "automated-test-edited";

  it("should add a rocket", () => {
    openModal();

    cy.get(".modal").find("input").eq(0).type(rocketName);

    //create
    cy.get("#add-save-button").click();
    cy.get(".close").click();
    cy.get(".modal").should("not.exist");
    //check if created
    cy.get("tbody").find("tr").last().find("td").first().should("have.text", rocketName);
    cy.get("tbody").find("tr").last().contains(rocketName);


  });

  it("should edit a rocket", () => {

    //edit
    cy.get(".edit-button").last().click();
    cy.get(".modal").find("input").eq(0).type("-edited");
    cy.get("#edit-save-button").click();
    cy.get(".close").click();
    //check if edited
    cy.get("tbody").find("tr").last().find("td").first().should("have.text", editedRocketName);
  });

  it("should delete a rocket", () => {
    //delete
    cy.get(".delete-button").last().click();
  });

});

describe('Navbar styles', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });

  it("should have a main element", () => {
    cy.get("#home-div").should("exist");
  });

  it("should have 5 different links in the navbar", () => {
    cy.get("nav").find("a").should("have.length", 5);
  });
});