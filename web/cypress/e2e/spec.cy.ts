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
    cy.wait(1000);
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

describe("crew crud", () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/crews')
  });
  const crewName = "automated-test";
  const editedcrewName = "automated-test-edited";

  it("should add a crew", () => {
    openModal();

    cy.get(".modal").find("input").eq(0).type(crewName);
    cy.get(".modal").find("input").eq(1).type("3");

    //create
    cy.get("#add-save-button").click();
    cy.get(".close").click();
    cy.get(".modal").should("not.exist");
    cy.wait(1000);
    //check if created
    cy.get("tbody").find("tr").last().find("td").first().should("have.text", crewName);
    cy.get("tbody").find("tr").last().contains(crewName);


  });

  it("should edit a crew", () => {

    //edit
    cy.get(".edit-button").last().click();
    cy.get(".modal").find("input").eq(0).type("-edited");
    cy.get("#edit-save-button").click();
    cy.get(".close").click();
    //check if edited
    cy.get("tbody").find("tr").last().find("td").first().should("have.text", editedcrewName);
  });

  it("should delete a crew", () => {
    //delete
    cy.get(".delete-button").last().click();
  });

});


describe("crewmen crud", () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/crewmen')
  });
  const crewmanName = "automated-test";
  const editedcrewmanName = "automated-test-edited";

  it("should add a crewman", () => {
    openModal();

    cy.get(".modal").find("input").eq(0).type(crewmanName);
    cy.get(".modal").find("input").eq(1).type("3");

    //create
    cy.get("#add-save-button").click();
    cy.get(".close").click();
    cy.get(".modal").should("not.exist");
    cy.wait(1000);
    //check if created
    cy.get("tbody").find("tr").last().find("td").first().should("have.text", crewmanName);
    cy.get("tbody").find("tr").last().contains(crewmanName);


  });

  it("should edit a crewman", () => {

    //edit
    cy.get(".edit-button").last().click();
    cy.get(".modal").find("input").eq(0).type("-edited");
    cy.get("#edit-save-button").click();
    cy.get(".close").click();
    //check if edited
    cy.get("tbody").find("tr").last().find("td").first().should("have.text", editedcrewmanName);
  });

  it("should delete a crewman", () => {
    //delete
    cy.get(".delete-button").last().click();
  });

});

describe("launch crud", () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/launches')
  });
  const launchCode = "0";
  const editedlaunchCode = "1";

  it("should add a launch", () => {
    openModal();

    cy.get(".modal").find("input").eq(0).type(launchCode);
    cy.get(".modal").find("input").eq(1).type("2003-02-03");
    cy.get(".modal").find("input").eq(2).type("32");
    cy.get(".modal").find("input").eq(3).type("31");

    //create
    cy.get("#add-save-button").click();
    cy.get(".close").click();
    cy.get(".modal").should("not.exist");
    cy.wait(1000);
    //check if created
    cy.get("tbody").find("tr").first().find("td").first().should("have.text", launchCode);
    cy.get("tbody").find("tr").first().contains(launchCode);


  });

  it("should edit a launch", () => {

    //edit
    cy.get(".edit-button").first().click();
    cy.get(".modal").find("input").eq(0).type("1");
    cy.get("#edit-save-button").click();
    cy.get(".close").click();
    //check if edited
    cy.get("tbody").find("tr").first().find("td").first().should("have.text", editedlaunchCode);
  });

  it("should delete a launch", () => {
    //delete
    cy.get(".delete-button").first().click();
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