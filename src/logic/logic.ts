export type CurrencySymbol = string;
const baseUrl = "https://functions.yandexcloud.net/d4el15n3josghdmf2630";

/**
 * Функция покупки валюты
 * @param from Исходная валюта
 * @param to Целевая валюта
 * @param amount {float} Сумма в целевой валюте (в основных единицах валюты)
 * @param options
 * @returns Результат конвертации в исходной валюте (в основных единицах валюты)
 */
export function buyCurrency(
  sourceCurrency: CurrencySymbol,
  targetCurrency: CurrencySymbol,
  targetAmount: number,
  fast: boolean,
  premium: boolean
): Promise<number> {
  const url =
    baseUrl +
    `?action=buy&sourceCurrency=${sourceCurrency}&targetCurrency=${targetCurrency}&targetAmount=${targetAmount}`;
  // console.log("fetchingb "+url)
  return fetch(url + `&fast=${fast}&premium=${premium}`).then((res) =>
    res.json()
  );
}

/**
 * Функция продажи валюты
 * @param from Исходная валюта
 * @param to Целевая валюта
 * @param amount {float} Сумма в исходной валюте (в основных единицах валюты)
 * @param options
 * @returns Результат конвертации в целевой валюте (в основных единицах валюты)
 */
export function sellCurrency(
  sourceCurrency: CurrencySymbol,
  targetCurrency: CurrencySymbol,
  sourceAmount: number,
  fast: boolean,
  premium: boolean
): Promise<number> {
  const url =
    baseUrl +
    `?action=sell&sourceCurrency=${sourceCurrency}&targetCurrency=${targetCurrency}&sourceAmount=${sourceAmount}`;
  // console.log("fetchings "+url)
  return fetch(url).then((res) => res.json());
}

/**
 * Список доступных валют
 * @returns
 */
export function getKnownCurrencies(): Promise<CurrencySymbol[]> {
  return fetch(baseUrl + "?action=getCurrencies")
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
