
class corridorHomePage

{
    ClickLoginButton()
    {
        return cy.get('#menu-item-15255 > a').click()
    }

    GetUsername()
    {
       return cy.get('#username')
    }
    GetPassword()
    {
      return cy.get('#password')

    }
    ClickSubmit()
    {
        return cy.get('#loginButton').click()
    }
    ClickMyProfileAppLabel()

    {
      return cy.contains('My Profile').click()
      
    }

    ClickMyProfileLaunchButton()
    {
      return cy.get('#content > div:nth-child(5) > div > div:nth-child(2) > div > a').click()

    }

}

export default corridorHomePage;



