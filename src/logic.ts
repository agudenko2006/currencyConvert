export type CurrencySymbol = string;

export interface IOptions {
    premium: boolean;
    fast: boolean;
}

/**
 * Функция покупки валюты
 * @param from Исходная валюта
 * @param to Целевая валюта
 * @param amount {float} Сумма в целевой валюте (в основных единицах валюты)
 * @param options
 * @returns Результат конвертации в исходной валюте (в основных единицах валюты)
 */
export function BuyCurrency(sourceCurrency: CurrencySymbol, targetCurrency: CurrencySymbol, targetAmount: number, options?: IOptions): number {
    return targetAmount * 4;
}

/**
 * Функция продажи валюты
 * @param from Исходная валюта
 * @param to Целевая валюта
 * @param amount {float} Сумма в исходной валюте (в основных единицах валюты)
 * @param options
 * @returns Результат конвертации в целевой валюте (в основных единицах валюты)
 */
export function SellCurrency(sourceCurrency: CurrencySymbol, targetCurrency: CurrencySymbol, sourceAmount: number, options?: IOptions): number {
    return sourceAmount * 2;
}


/**
 * Список доступных валют
 * @returns 
 */
export function getKnownCurrencies(): CurrencySymbol[] {
    return ['BTC', 'USDT', 'ETH'];
}