import { MenuItemsType, DropdownMenuItemType } from '@hextech/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Info'),
    href: '/info',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Voting'),
    href: '/voting',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: '',
    href: '/',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('Docs'),
        href: 'https://hextech.gitbook.io/documentation/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
