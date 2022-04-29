# c3-grid



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                         | Type                                                                     | Default     |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------- |
| `hasDefaultSlot` | `has-default-slot` | Evaluate if default slot exists for Smart Grid.                                                                     | `boolean`                                                                | `undefined` |
| `hasFirstSlot`   | `has-first-slot`   | Evaluate if first slot has content.                                                                                 | `boolean`                                                                | `undefined` |
| `hasFourthSlot`  | `has-fourth-slot`  | Evaluate if fourth slot has content.                                                                                | `boolean`                                                                | `undefined` |
| `hasSecondSlot`  | `has-second-slot`  | Evaluate if second slot has content.                                                                                | `boolean`                                                                | `undefined` |
| `hasThirdSlot`   | `has-third-slot`   | Evaluate if third slot has content.                                                                                 | `boolean`                                                                | `undefined` |
| `items`          | `items`            | The Number of Items to display for Smart Grid in Slot One: 2\|3\|4                                                  | `"2" \| "3" \| "4"`                                                      | `undefined` |
| `variant`        | `variant`          | The type of layout to display. Smart allows infinite items and the rest are slotted between one - four named slots. | `"1-1" \| "1-3" \| "1-4" \| "2-2" \| "3-1" \| "3-3" \| "4-4" \| "smart"` | `'1-1'`     |


## Slots

| Slot      | Description                                |
| --------- | ------------------------------------------ |
| `"four"`  | A quaternary slot for grid component.      |
| `"one"`   | The default named slot for grid component. |
| `"three"` | A tertiary slot for grid component.        |
| `"two"`   | A secondary slot for grid component.       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
