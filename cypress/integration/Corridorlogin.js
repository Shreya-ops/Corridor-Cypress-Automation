describe('corridor login ',function(){

    this.beforeEach(function(){

        cy.fixture('corridorlogin').then(function(data){
           
            this.data = data
        
          })
        })


it('corridor login testcase',function(){


cy.visit('https://corridor.pramati.com/')
cy.get('#menu-item-15255').click()
cy.get('#username').type(this.data.name)
cy.get('#password').type(this.data.password)
cy.get('#loginButton').click()

// Launch Phonebook app
cy.get('a[href*="https://wavemaker-apps.pramati.com/wm_phonebook"]').click()
cy.wait(5000)

//Search for a name
cy.get(':nth-child(1) > .app-checkboxset-label > .caption').click({force:true})
cy.get('.app-textbox').type('varun')
cy.wait(4000)
//Validate number of records returned for entered  name
cy.get('.app-livelist-container.clearfix.list-group').find('.app-container.media').should('have.length','6')



})


})