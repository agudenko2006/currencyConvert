type CurrencySymbol = string;

export interface IOptions {
    premium: boolean;
    fast: boolean;
}

/**
 * Функция ковертации валюты
 * @param from Исходная валюта
 * @param to Целевая валюта
 * @param amount {float} Сумма в исходной валюте (в основных единицах валюты)
 * @param options
 * @returns Результат конвертации в целевой валюте (в основных единицах валюты)
 */
export function calculateExchange(
    from: CurrencySymbol,
    to: CurrencySymbol,
    amount: number,
    options: IOptions
    ): number {
        console.log(`Called recalc with pr${options.premium} and fs${options.fast}`)
        return amount*2;
}

/**
 * Список доступных валют
 * @returns 
 */
export function getKnownCurrencies(): CurrencySymbol[] {
    return ['BTC', 'USDT', 'ETH'];
}