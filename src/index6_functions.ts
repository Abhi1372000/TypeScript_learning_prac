function calculateTax(income: number, taxYear?: number): number {
  // the second number tells that the return value should be of return type
  if (income < 50_000) {
    // the question mark is specifying that
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000);
