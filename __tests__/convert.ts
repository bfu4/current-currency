import { convert } from "../src";

test("Convert EUR to USD", () => {
  convert("EUR", 10, "USD").then((result) => {
    expect(result).toHaveProperty("currency");
    expect(result).toHaveProperty("amount");
  });
});

test("Convert MXN to GBP", () => {
  convert("MXN", 10, "GBP").then((result) => {
    expect(result).toHaveProperty("currency");
    expect(result).toHaveProperty("amount");
  });
});

test("Do not convert unknown currency to EUR", () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  convert("unknown currency", 10, "EUR").catch((err) => {
    expect(err).toBe("Base 'unknown currency' is not supported.");
  });
});

test("Do not convert EUR to EUR", () => {
  convert("EUR", 10, "EUR").catch((err) => {
    expect(err).toBe("fromCurrency cannot be the same as toCurrency.");
  });
});

test("Convert EUR to BTC",   () => {
  convert("EUR", 40000, "BTC").then((result) => {
    expect(result).toHaveProperty("currency");
    expect(result).toHaveProperty("amount");
  });

})

test("Convert ETH to BTC",  () => {
  convert("ETH", 1, "BTC").then((result) => {
    expect(result).toHaveProperty("currency");
    expect(result).toHaveProperty("amount");
  })
})
