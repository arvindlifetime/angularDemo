import { EmpAppPage } from './app.po';

describe('emp-app App', () => {
  let page: EmpAppPage;

  beforeEach(() => {
    page = new EmpAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to emp--skip-install!!');
  });
});
