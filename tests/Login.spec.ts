import { test, expect, Browser, BrowserContext,Page,Locator } from '@playwright/test';
import {chromium} from '@playwright/test';
import { Console } from 'console';


const url:string= "https://www.polestar.com/se";


test('Login', async({browser})=>{
    //Creating a browser context

    const context:BrowserContext= await browser.newContext();
    const page:Page= await context.newPage();


    //Navigating to URL 

    await LoginPage(page,url,context);


   



    
});


async function LoginPage(page:Page, url:string,context:BrowserContext){


    await page.goto(url);
    const menu:Locator= page.locator('button[title=Meny]');
    const email:Locator=page.locator('#email-username-field');
    const password:Locator=page.locator('#password-field');
    const login:Locator=page.locator("#login-btn");

    //Login
    await page.locator("#onetrust-accept-btn-handler").click();
    await menu.click();
    await page.locator('a[href*=login]').click();
    await email.fill("sreenathsivaraman78@gmail.com");
    await password.fill("Vettel#5");
    await login.click();
    



  //fetching locators on booking test drive page

  const bookTestDrive:Locator = page.getByAltText('A polestar car driving on a road');
  const carModel:Locator = page.getByTestId('selectable-card-ps2-image');
  const driveLocation:Locator = page.getByTestId('selectable-card-at-polestar');
  const city:Locator = page.getByTestId('at-polestar-list-malmo');
  const driveDate:Locator = page.getByTestId('selectable-date').first();
  const firstName:Locator=page.locator('#firstname');
  const SurName:Locator= page.locator('#lastname');
  const Email:Locator= page.locator('#email');
  const Phone:Locator= page.locator('#phone');
  const PostalCode:Locator= page.locator('#postal-code');
  const CustomerDropDown = page.locator('#customer-category');
  const option:Locator = page.locator('#customer-category-list-0');
  const LicenseDeclaration:Locator = page.locator('#checkbox-legalDocumentsAccepted');
  const ConfirmButton:Locator = page.getByTestId('confirm-booking-btn');
  const arrow :Locator =page.getByLabel('chevronDown').nth(1);

    //Filling details for booking a test drive  
  
    await bookTestDrive.click();
    await carModel.click();
    await driveLocation.click();
    await city.click();
    await driveDate.click();
    await firstName.fill("Sreenath");
    await SurName.fill("Menon");
    await Email.fill("sreenathsivaraman78@gmail.com");
    await Phone.fill("555555555")
    await PostalCode.fill("211 10");
    await arrow.click();
    await option.click();
    await LicenseDeclaration.click();
     
    //Asserting booking button to be enabled
    await expect(ConfirmButton).toBeEnabled();
    await screenShot(page);
    
}

async function screenShot(page : Page) {

    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    
}
