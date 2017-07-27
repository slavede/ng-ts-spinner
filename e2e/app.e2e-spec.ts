import { NgTsSpinnerPage } from './app.po';

describe('ng-ts-spinner App', () => {
  let page: NgTsSpinnerPage;

  beforeEach(() => {
    page = new NgTsSpinnerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
