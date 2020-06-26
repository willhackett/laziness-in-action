/// <reference types="cypress" />

const config = {
  email: 'willhackett@me.com',
  password: 'Horizon_#28',
  time: '12:00 PM',
  session: 'Weights Only',
  club: 'GoodlifeBundall'
}

context('Navigation', () => {
  Cypress.Cookies.defaults({
    whitelist: /.*/
  })
  Cypress.on('uncaught:exception', () => false);
  before(() => {
    cy.visit(`https://member.clubware.com.au/${config.club}/Account/Login`)
  })

  it('should log me in', () => {
    cy.get('#Email').type(config.email)
    cy.get('#Password').type(config.password)
    cy.get('input.btn').click();
  })

  it('should get the correct session and navigate there', () => {
    cy.get('#timeTableTable > tbody')
      .contains('tr', config.time)
      .contains('td:last-of-type', config.session)
      .contains('a', config.session)
      .then(sessionElem => {
        cy.get(sessionElem).click({ force: true });
      })
  })

  it('should book the session', () => {
    cy.get('button[name=submitButton]').click();
  })
})
