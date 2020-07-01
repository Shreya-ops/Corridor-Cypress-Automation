class MyProfilePage
{
 
ClickPersonalDetailsTab()
{
 return cy.contains('Personal Details').click()

}
 ClickInsuranceTab()

 {
   return cy.contains('Insurance').click()

 }

ClickOfficedetailsTab()
{
  return cy.contains('Office Details').click()

}
GetEmergencyMobileNumberEditBox()
{

     const Inputbox = cy.get('input[name="Emergency_Mobile_Number_formWidget"]')
     Inputbox.clear()
     Inputbox.type('9100151339')
     return this
}
ClickSave()
{
  return  cy.get('.form-save').click()
} 
 
ClickMySkillsTab()
{
 
  return  cy.get('[widget-id="widget-id208"] > .app-anchor').click()

}

ClickMyBenefitsTab()
{
    return cy.get('[widget-id="widget-id306"] > .app-anchor').click()
}
ClickMealCard()
{
    return cy.contains('Meal Card').click()
}

ClickVoluntaryProvidentFund()
{
  
    return cy.get('li.tab-header').contains('Voluntary Provident Fund').click()

}
GotoCorridorApps()
{

    return cy.get('a[name="corridor_anchor"]').click()
}


}

export default MyProfilePage