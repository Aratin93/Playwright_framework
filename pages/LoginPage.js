

class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.dashboardText = page.locator('h6:has-text("Dashboard")');
  }

  
// Actions

/**launch the orangehrmlive url
 * 
 */
  async navigate() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  /**log in to the application 
   * 
  */

async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

async verifyLoginSuccess() {
    await this.dashboardText.waitFor();
  }

}

module.exports = { LoginPage };
