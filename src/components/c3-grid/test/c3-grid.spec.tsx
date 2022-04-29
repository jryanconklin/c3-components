import { newSpecPage } from '@stencil/core/testing';
import { C3Grid } from '../c3-grid';

describe('c3-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [C3Grid],
      html: `<c3-grid></c3-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <c3-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </c3-grid>
    `);
  });
});
