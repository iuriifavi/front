import { ShansPage } from './app.po';

describe('shans App', () => {
  let page: ShansPage;

  beforeEach(() => {
    page = new ShansPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
