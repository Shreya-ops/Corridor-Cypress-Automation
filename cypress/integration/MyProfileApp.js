
import corridorHomePage from '../integration/PageObjects/corridorHomePage' 
import MyProfilePage from  '../integration/PageObjects/MyProfilePage'

describe('My Profile App test Suite',function(){
    this.beforeEach(function(){

        cy.fixture('corridorlogin').then(function(data){
           
            this.data = data
        
          })
        })

it('Corridor Login',function(){
const HomePage = new corridorHomePage()
const MyProfile =new MyProfilePage()
    cy.visit('https://corridor.pramati.com/')
    HomePage.ClickLoginButton()
    HomePage.GetUsername().type(this.data.name)
    HomePage.GetPassword().type(this.data.password)
    HomePage.ClickSubmit()
    HomePage.ClickMyProfileAppLabel()
    HomePage.ClickMyProfileLaunchButton()
    cy.wait(5000)
    
    MyProfile.ClickInsuranceTab()
    MyProfile.ClickOfficedetailsTab()
    MyProfile.ClickPersonalDetailsTab()
    MyProfile.GetEmergencyMobileNumberEditBox()
    MyProfile.ClickSave()
    MyProfile.ClickMySkillsTab()
    MyProfile.ClickMyBenefitsTab()
    MyProfile.ClickMealCard()
    MyProfile.ClickVoluntaryProvidentFund()  
    MyProfile.GotoCorridorApps()
    
})






})