import { newE2EPage } from '@stencil/core/testing';

describe('c3-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<c3-grid></c3-grid>');

    const element = await page.find('c3-grid');
    expect(element).toHaveClass('hydrated');
  });
});
