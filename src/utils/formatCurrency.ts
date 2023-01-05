interface Options {
  significantDigits: number,
  thousandsSeparator: string,
  decimalSeparator: string,
  symbol: string,
}

export const currencyFormatter = (number: number, options?: Options): string => {
  const defaultOptions = {
    significantDigits: 2,
    thousandsSeparator: ",",
    decimalSeparator: ".",
    symbol: "$",
  };

  const execute = (value: any, options: any) => {
    if (typeof value !== "number") value = 0.0;
    options = { ...defaultOptions, ...options };
    value = value.toFixed(options.significantDigits);

    let valueFormatted;

    if (options.significantDigits == 0) {
      const [currency] = value.split(".");
      valueFormatted = `${options.symbol}${currency.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        options.thousandsSeparator
      )}`;
    } else {
      const [currency, decimal] = value.split(".");
      valueFormatted = `${options.symbol}${currency.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        options.thousandsSeparator
      )}${options.decimalSeparator}${decimal}`;
    }

    return valueFormatted;
  };

  return execute(number, options);
};