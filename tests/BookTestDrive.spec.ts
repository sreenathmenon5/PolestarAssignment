// import { test, expect, Locator } from '@playwright/test';

// test('Booking a test drive', async ({ page }) => {
  
  
//   //fetching locators on booking test drive page
//   const bookTestDrive:Locator = page.getByLabel('arrowRight').first();
//   const carModel:Locator = page.getByTestId('selectable-card-ps2-image');
//   const driveLocation:Locator = page.getByTestId('selectable-card-at-polestar');
//   const city:Locator = page.getByTestId('at-polestar-list-malmo');
//   const driveDate:Locator = page.getByRole('radio',{name:'hidden-selectable-date-51'});
//   const firstName:Locator=page.locator('#firstname');
//   const SurName:Locator= page.locator('#lastname');
//   const Email:Locator= page.locator('#email');
//   const Phone:Locator= page.locator('#phone');
//   const PostalCode:Locator= page.locator('#postal-code');
//   const CustomerDropDown = 'customer-category';
//   const LicenseDeclaration:Locator = page.locator('#checkbox-legalDocumentsAccepted');
//   const EmailDeclaration:Locator = page.locator('#checkbox-purposes[de568ad2-4514-4078-9bd5-d812ea15c4ca]');
//   const DataDeclaration:Locator = page.locator('#checkbox-purposes[a4ca2ade-63dd-43c3-a17b-1f42b87db55c]');
//   const ConfirmButton:Locator = page.getByTestId('confirm-booking-btn');



  

//   //Filling details for booking a test drive  
  
//   await bookTestDrive.click();
//   await carModel.click();
//   await driveLocation.click();
//   await city.click();
//   await driveDate.click();
//   await firstName.fill("Sreenath");
//   await SurName.fill("Menon");
//   await Email.fill("sreenathsivaraman78@gmail.com");
//   await Phone.fill("555555555")
//   await PostalCode.fill("211 10");
//   await page.selectOption(CustomerDropDown,{index:0});
//   await LicenseDeclaration.click();
//   await EmailDeclaration.click();
//   await DataDeclaration.click();

//   //Asserting booking button to be enabled
//   await expect(ConfirmButton).toBeEnabled();


 
// });
