import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'c3-card',
  styleUrl: 'c3-card.css',
  shadow: true,
})
export class C3Card {

  /**
   * The Card's display variant.
   */
   @Prop() variant: string;

   render() {
    return (
      <Host>
        <div class='card'>
          <div class='card__image'>
            <slot name='image'>No Image Provided.</slot>
          </div>
          <h5 class='card__headline'><slot name='headline'>Card title</slot></h5>
          <slot name='text'>No Body Text Provided.</slot>
          <slot name='primary-cta'>No CTA Provided</slot>
        </div>
      </Host>
    );
  }

}
