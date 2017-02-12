import { AngularBootstrap4Page } from './app.po';

describe('angular-bootstrap4 App', function() {
  let page: AngularBootstrap4Page;

  beforeEach(() => {
    page = new AngularBootstrap4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
