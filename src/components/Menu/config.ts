import { MenuEntry } from '@saltswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.saltswap.finance'
  },
  {
    label: 'Exchange',
    href: '/swap',
    icon: "ExchangeIcon"
  },
  {
    label: 'Liquidity',
    href: '/pool',
    icon: 'LiquidityIcon'
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.saltswap.finance/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://www.saltswap.finance/pools'
  },
  {
    label: 'Oceans',
    icon: 'WaveIcon',
    href: 'https://www.saltswap.finance/oceans',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://www.saltswap.finance/lottery',
  },
  {
    label: 'Launchpad (IDOs)',
    icon: 'IdoIcon',
    href: 'https://www.saltswap.finance/ido',
  },
  {
    label: 'Audited By Certik ✅',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/saltswap',
  },
  {
    label: 'Price Graph',
    icon: 'GraphIcon',
    href: 'https://www.saltswap.finance/graph',
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/saltswap-finance',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/saltswap',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/saltswap',
      },
    ],
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.saltswap.finance/lottery'
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'SaltSwap',
  //       href: 'https://saltswap.info/token/TODO',
  //     },
  //   ]
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.saltswap.finance',
      // },
      {
        label: "Github",
        href: "https://github.com/saltswap/",
        icon: 'GithubIcon'
      },
      {
        label: "Docs",
        href: "https://saltswap.gitbook.io/salt-swap",
        icon: 'GitbookIcon'
      },
      {
        label: "Blog",
        href: "https://saltswap.medium.com",
        icon: 'MediumIcon'
      },
    ],
  },
]

export default config
