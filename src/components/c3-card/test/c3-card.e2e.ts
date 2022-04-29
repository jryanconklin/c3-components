import { newE2EPage } from '@stencil/core/testing';

describe('c3-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<c3-card></c3-card>');

    const element = await page.find('c3-card');
    expect(element).toHaveClass('hydrated');
  });
});
