import { newSpecPage } from '@stencil/core/testing';
import { C3Card } from '../c3-card';

describe('c3-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [C3Card],
      html: `<c3-card></c3-card>`,
    });
    expect(page.root).toEqualHtml(`
      <c3-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </c3-card>
    `);
  });
});
