import { FunDablePage } from './app.po';

describe('fun-dable App', function() {
  let page: FunDablePage;

  beforeEach(() => {
    page = new FunDablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
