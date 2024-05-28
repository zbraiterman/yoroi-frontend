import React from 'react';
import { defineMessages } from 'react-intl';

export const messages = Object.freeze(
  defineMessages({
    search: {
      id: 'portfolio.main.search.text',
      defaultMessage: '!!!Search by asset name or ID',
    },
    balancePerformance: {
      id: 'portfolio.tooltip.balancePerformance',
      defaultMessage: '!!!Balance performance',
    },
    balanceChange: {
      id: 'portfolio.tooltip.balanceChange',
      defaultMessage: '!!!Balance change',
    },
    tokenPriceChange: {
      id: 'portfolio.tooltip.tokenPriceChange',
      defaultMessage: '!!!Token price change',
    },
    in24hours: {
      id: 'portfolio.tooltip.in24hours',
      defaultMessage: '!!!in 24 hours',
    },
    backToPortfolio: {
      id: 'portfolio.button.backToPortfolio',
      defaultMessage: '!!!Back to portfolio',
    },
    swap: {
      id: 'portfolio.button.swap',
      defaultMessage: '!!!Swap',
    },
    send: {
      id: 'portfolio.button.send',
      defaultMessage: '!!!Send',
    },
    receive: {
      id: 'portfolio.button.receive',
      defaultMessage: '!!!Receive',
    },
    balance: {
      id: 'portfolio.tokenInfo.balance',
      defaultMessage: '!!!balance',
    },
    marketPrice: {
      id: 'portfolio.tokenInfo.marketPrice',
      defaultMessage: '!!!Market price',
    },
    description: {
      id: 'portfolio.tokenInfo.overview.description',
      defaultMessage: '!!!Description',
    },
    website: {
      id: 'portfolio.tokenInfo.overview.website',
      defaultMessage: '!!!Website',
    },
    policyId: {
      id: 'portfolio.tokenInfo.overview.policyId',
      defaultMessage: '!!!Policy ID',
    },
    fingerprint: {
      id: 'portfolio.tokenInfo.overview.fingerprint',
      defaultMessage: '!!!Fingerprint',
    },
    detailsOn: {
      id: 'portfolio.tokenInfo.overview.detailsOn',
      defaultMessage: '!!!Details on',
    },
    overview: {
      id: 'portfolio.tokenInfo.menuLabel.overview',
      defaultMessage: '!!!Overview',
    },
    performance: {
      id: 'portfolio.tokenInfo.menuLabel.performance',
      defaultMessage: '!!!Performance',
    },
    marketData: {
      id: 'portfolio.tokenInfo.performance.marketData',
      defaultMessage: '!!!Market data',
    },
    tokenPrice: {
      id: 'portfolio.tokenInfo.performance.tokenPrice',
      defaultMessage: '!!!Token price',
    },
    marketCap: {
      id: 'portfolio.tokenInfo.performance.marketCap',
      defaultMessage: '!!!Market cap',
    },
    '24hVolumn': {
      id: 'portfolio.tokenInfo.performance.24hVolumn',
      defaultMessage: '!!!24h volumn',
    },
    rank: {
      id: 'portfolio.tokenInfo.performance.rank',
      defaultMessage: '!!!Rank',
    },
    circulating: {
      id: 'portfolio.tokenInfo.performance.circulating',
      defaultMessage: '!!!Circulating',
    },
    totalSupply: {
      id: 'portfolio.tokenInfo.performance.totalSupply',
      defaultMessage: '!!!Total supply',
    },
    maxSupply: {
      id: 'portfolio.tokenInfo.performance.maxSupply',
      defaultMessage: '!!!Max supply',
    },
    allTimeHigh: {
      id: 'portfolio.tokenInfo.performance.allTimeHigh',
      defaultMessage: '!!!All time high',
    },
    allTimeLow: {
      id: 'portfolio.tokenInfo.performance.allTimeLow',
      defaultMessage: '!!!All time low',
    },
    name: {
      id: 'portfolio.statsTable.headerText.name',
      defaultMessage: '!!!Name',
    },
    price: {
      id: 'portfolio.statsTable.headerText.price',
      defaultMessage: '!!!Price',
    },
    portfolio: {
      id: 'portfolio.statsTable.headerText.portfolio',
      defaultMessage: '!!!Portfolio',
    },
    totalAmount: {
      id: 'portfolio.statsTable.headerText.totalAmount',
      defaultMessage: '!!!Total amount',
    },
    transactionHistory: {
      id: 'portfolio.transactionTable.title',
      defaultMessage: '!!!Transaction history',
    },
    transactionType: {
      id: 'portfolio.transactionTable.headerText.transactionType',
      defaultMessage: '!!!Transaction type',
    },
    status: {
      id: 'portfolio.transactionTable.headerText.status',
      defaultMessage: '!!!Status',
    },
    fee: {
      id: 'portfolio.transactionTable.headerText.fee',
      defaultMessage: '!!!Fee',
    },
    amount: {
      id: 'portfolio.transactionTable.headerText.amount',
      defaultMessage: '!!!Amount',
    },
    today: {
      id: 'portfolio.transactionTable.timestamp.today',
      defaultMessage: '!!!Today',
    },
    yesterday: {
      id: 'portfolio.transactionTable.timestamp.yesterday',
      defaultMessage: '!!!Amount',
    },
    sent: {
      id: 'portfolio.transactionTable.historyLabel.sent',
      defaultMessage: '!!!Sent',
    },
    received: {
      id: 'portfolio.transactionTable.historyLabel.received',
      defaultMessage: '!!!Received',
    },
    transactionError: {
      id: 'portfolio.transactionTable.historyLabel.transactionError',
      defaultMessage: '!!!Transaction error',
    },
    rewardWithdraw: {
      id: 'portfolio.transactionTable.historyLabel.rewardWithdraw',
      defaultMessage: '!!!Reward withdrawn',
    },
    stakeDelegate: {
      id: 'portfolio.transactionTable.historyLabel.stakeDelegate',
      defaultMessage: '!!!Stake delegated',
    },
    low: {
      id: 'portfolio.transactionTable.status.low',
      defaultMessage: '!!!Low',
    },
    high: {
      id: 'portfolio.transactionTable.status.high',
      defaultMessage: '!!!High',
    },
    failed: {
      id: 'portfolio.transactionTable.status.failed',
      defaultMessage: '!!!Failed',
    },
    assets: {
      id: 'portfolio.transactionTable.amount.assets',
      defaultMessage: '!!!assets',
    },
  })
);

export const getStrings = intl => {
  return React.useRef({
    search: intl.formatMessage(messages.search),
    balancePerformance: intl.formatMessage(messages.balancePerformance),
    balanceChange: intl.formatMessage(messages.balanceChange),
    tokenPriceChange: intl.formatMessage(messages.tokenPriceChange),
    in24hours: intl.formatMessage(messages.in24hours),
    backToPortfolio: intl.formatMessage(messages.backToPortfolio),
    swap: intl.formatMessage(messages.swap),
    send: intl.formatMessage(messages.send),
    receive: intl.formatMessage(messages.receive),
    balance: intl.formatMessage(messages.balance),
    marketPrice: intl.formatMessage(messages.marketPrice),
    description: intl.formatMessage(messages.description),
    website: intl.formatMessage(messages.website),
    policyId: intl.formatMessage(messages.policyId),
    fingerprint: intl.formatMessage(messages.fingerprint),
    detailsOn: intl.formatMessage(messages.detailsOn),
    overview: intl.formatMessage(messages.overview),
    performance: intl.formatMessage(messages.performance),
    marketData: intl.formatMessage(messages.marketData),
    tokenPrice: intl.formatMessage(messages.tokenPrice),
    marketCap: intl.formatMessage(messages.marketCap),
    '24hVolumn': intl.formatMessage(messages['24hVolumn']),
    rank: intl.formatMessage(messages.rank),
    circulating: intl.formatMessage(messages.circulating),
    totalSupply: intl.formatMessage(messages.totalSupply),
    maxSupply: intl.formatMessage(messages.maxSupply),
    allTimeHigh: intl.formatMessage(messages.allTimeHigh),
    allTimeLow: intl.formatMessage(messages.allTimeLow),
    name: intl.formatMessage(messages.name),
    price: intl.formatMessage(messages.price),
    portfolio: intl.formatMessage(messages.portfolio),
    totalAmount: intl.formatMessage(messages.totalAmount),
    transactionHistory: intl.formatMessage(messages.transactionHistory),
    transactionType: intl.formatMessage(messages.transactionType),
    status: intl.formatMessage(messages.status),
    fee: intl.formatMessage(messages.fee),
    amount: intl.formatMessage(messages.amount),
    today: intl.formatMessage(messages.today),
    yesterday: intl.formatMessage(messages.yesterday),
    sent: intl.formatMessage(messages.sent),
    received: intl.formatMessage(messages.received),
    transactionError: intl.formatMessage(messages.transactionError),
    rewardWithdraw: intl.formatMessage(messages.rewardWithdraw),
    stakeDelegate: intl.formatMessage(messages.stakeDelegate),
    low: intl.formatMessage(messages.low),
    high: intl.formatMessage(messages.high),
    failed: intl.formatMessage(messages.failed),
    assets: intl.formatMessage(messages.assets),
  }).current;
};
