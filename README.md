# Currency Converter
This is a student project, so don't use it in production...

## Getting started
```bash
git clone https://github.com/agudenko2006/currencyConvert
cd currencyConvert
npm install
npm start # or npm run dev
```

## Structure
- `src/components`
  - `App` is the main component, it communicates with the `src/stateManager`
  - `CurrencyInput` is a component that provides a number input and a drop-down list of currencies
  - `Options`(WIP)
- `src/logic` is the model implementation
- `src/stateManager` uses Redux to store the app's state