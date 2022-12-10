import "./CurrencyInput.css";

export interface ICurrencyInputProps {
  allCurrencies: string[];
  selectedCurrency: string;
  value: number;

  onCurrencyChange(value: string): void;
  onValueChange(value: number): void;
}

export function CurrencyInput(props: ICurrencyInputProps) {
  return (
    <div className="input">
      <input
        type="number"
        value={props.value}
        min={0}
        onChange={(e) => props.onValueChange(e.target.valueAsNumber)}
      />

      <select onChange={(e) => props.onCurrencyChange(e.target.value)}>
        {props.allCurrencies.map((curr) => (
          <option selected={curr === props.selectedCurrency} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
}
