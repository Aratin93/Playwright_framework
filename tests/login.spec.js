
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

const fs = require('fs')


// ✅ Import your email function


//test1

test('Login Test - OrangeHRM', async ({ page }) => {
  const loginPage = new LoginPage(page)

  
// Step 1: Open URL
  await loginPage.navigate();

// Step 2: Login
  await loginPage.login('Admin', 'admin123');


//Step 3: Verify login success
  await loginPage.verifyLoginSuccess();
  
// Optional assertion
  await expect(page.locator('h6')).toHaveText('Dashboard');

  //folder screenshot

 //await page.screenshot( {path : 'screenshots/image1.png',})




})

//test2

test('Login Test with inavlid username - OrangeHRM', async ({ page }) => {
  const loginPage = new LoginPage(page)
// Step 1: Open URL
  await loginPage.navigate();

// Step 2: Login
  await loginPage.login('Admin1', 'admin123');
const errorText = await page.locator('//div[@class="oxd-alert-content oxd-alert-content--error"]').textContent();
expect(errorText).toBe('Invalid credentials');
console.log(errorText)

//element screenshot

await page.locator('//div[@class="oxd-alert-content oxd-alert-content--error"]').screenshot({path : 'screenshots/image2.png'})

})

//test3

test('Login Test with inavlid password - OrangeHRM', async ({ page }) => {
  const loginPage = new LoginPage(page)
// Step 1: Open URL
  await loginPage.navigate();

// Step 2: Login
  await loginPage.login('Admin', 'admin12345');

  const errorText2 = await page.locator('//div[@class="oxd-alert-content oxd-alert-content--error"]').textContent();
expect(errorText2).toBe('Invalid credentials');
console.log(errorText2)

await page.screenshot({ path: 'screenshots/image5.png', fullPage: true });

//creating buffer

//const buffer =await page.screenshot();
//const text =buffer.toString('base64')
//console.log(text)

//changing base 64 into image

const buffer1 =Buffer.from( text ,'base64')

fs.writeFileSync( 'screenshots/image4.png',buffer1)

//changing existing image into text base64 format

const imagebuffer =fs.readFileSync('screenshots/image3.png')


const base64string =imagebuffer.toString('base64')
console.log(base64string)

console.log ('image changed to base64')
})



