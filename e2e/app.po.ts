import { browser, by, element } from 'protractor';

export class EmpAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('emp--skip-install-root h1')).getText();
  }
}
