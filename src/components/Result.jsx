import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({ investmentData }) {
  const { initialInvestment, expectedReturn, annualInvestment, duration } =
    investmentData;
  var results;
  var headings;
  if (
    duration > 0 &&
    initialInvestment > 0 &&
    expectedReturn > 0 &&
    annualInvestment > 0
  ) {
    results = calculateInvestmentResults(investmentData);
    headings = Object.keys(results[0]);
  }
  // const initialInvestment =
  //   results[0].valueEndOfYear -
  //   results[0].interest -
  //   results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th id="Year">Year</th>
          <th id="Investment Value">Investment Value</th>
          <th id="Interest">Interest (Year)</th>
          <th id="Total Interest">Total Interest</th>
          <th id="Invested Capital">Invested Capital</th>
        </tr>
      </thead>
      {results && (
        <tbody>
          {results.map((row, rowInd) => {
            const totalInterest =
              row.valueEndOfYear -
              row.annualInvestment * row.year -
              initialInvestment;
            const investedCapital = row.valueEndOfYear - totalInterest;
            return (
              <tr key={rowInd}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
}
