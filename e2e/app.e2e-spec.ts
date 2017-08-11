import { LogologyPage } from './app.po';

describe('logology App', () => {
  let page: LogologyPage;

  beforeEach(() => {
    page = new LogologyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
