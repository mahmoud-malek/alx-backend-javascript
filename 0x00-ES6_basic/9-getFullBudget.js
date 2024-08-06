/* eslint import/extensions: "off" */
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(inc) {
      return `$${inc}`;
    },
    getIncomeInEuros(inc) {
      return `${inc} euros`;
    },
  };

  return fullBudget;
}
