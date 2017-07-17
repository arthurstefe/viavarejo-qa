import { ViaVarejoPage } from './app.po';

describe('via-varejo App', () => {
  let page: ViaVarejoPage;

  beforeEach(() => {
    page = new ViaVarejoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
