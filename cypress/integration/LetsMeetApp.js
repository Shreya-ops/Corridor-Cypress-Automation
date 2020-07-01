
describe('Lets Meet Test suite',function(){

    this.beforeEach(function(){

cy.fixture('corridorlogin').then(function(data){
   
    this.data = data

  })
})

it('Login to Corridor testcase',function(){

    cy.visit('https://corridor.pramati.com/')
    cy.get('#menu-item-15255').click()
    cy.get('#username').type(this.data.name)
    cy.get('#password').type(this.data.password)
    cy.get('#loginButton').click()
    cy.wait(5000)

})

it('Launch Lets Meet App',function(){

cy.get('#content > div:nth-child(10) > div > div:nth-child(2) > div > a').click()

cy.get('#username').type(this.data.name)
cy.get('#password').type(this.data.password)
cy.get('#loginButton').click()
cy.get('[widget-id="widget-id15"] > .col-sm-3 > .ng-invalid > .live-field > .control-label').contains('From Date')
//cy.get('input[type="text"]').contains('text','16-jun-2020')
cy.get('[widget-id="widget-id15"] > .col-sm-3 > .ng-invalid > .live-field > div.col-xs-12 > .ng-untouched > .input-group-btn > .btn').click()
cy.get('[widget-id="widget-id15"] > .col-sm-3 > .ng-invalid > .live-field > div.col-xs-12 > .ng-valid > .input-group-btn > .btn > .app-icon').click()
const fromDate = cy.get('input[name="Booking_fromDate_formWidget"]')
fromDate.clear()
fromDate.type('30-Jun-2020')

const fromTime = cy.get('input[name="Booking_fromTime_formWidget"]')
fromTime.clear()
fromTime.clear('00:00')
cy.get('#widget-id36').type('18:00')

const toTime = cy.get('input[name="Booking_toTime_formWidget"]')
toTime.clear()
toTime.clear('18:00')
cy.get('#widget-id39').type('18:30')
cy.get('#widget-id43').select('Hyderabad').should('have.value',"3: 'Hyderabad'")
cy.get('#widget-id47').select("O'Hare (2nd Flr) - 12").should('have.value','5: 5')
cy.get('#widget-id51').select('Accelalpha').should('have.value',"8: 'Accelalpha'")
cy.get('#widget-id55').type('Team be on Time')
cy.get('.form-reset').click()
cy.get('.app-anchor').click({multiple:true})
cy.get('.app-grid-column > .app-grid > .panel-footer > .app-datagrid-paginator > .app-datanavigator > .ng-untouched > .pagination > .active > .page-link').click({force:true})
cy.wait(3000)
cy.get('.app-datagrid-body').find('.app-datagrid-row ').should('have.length','5')
cy.get('[data-row-id="0"] > [data-col-id="7"] > .actions-column > .btn').click()
cy.get('.toast-message').should('have.text','Sorry this request is older to delete.')
cy.get('.app-picture').click()


})


})






































