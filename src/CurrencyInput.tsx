import './CurrencyInput.css'

export interface ICurrencyInputProps {
    allCurrencies: string[],
    selectedCurrency: string,
    value: number,
    
    currencyChanged(value: string): void,
    valueChanged(value: number): void,
}

export function CurrencyInput(props: ICurrencyInputProps) {
    return <div className='input'>
        <input type="number" value={props.value} min={0} onChange={e =>
            props.valueChanged(e.target.valueAsNumber)
        } />
        
        <select onChange={e =>
            props.currencyChanged(e.target.value)
        }>
            {props.allCurrencies.map(curr => 
                <option selected={curr===props.selectedCurrency} value={curr}>{curr}</option>
            )}
        </select>
    </div>
}