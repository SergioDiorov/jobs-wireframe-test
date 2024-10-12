// icons
import {
  RiHeart3Fill,
  RiStarLine,
  RiAwardFill,
  RiSmartphoneLine,
  RiGift2Line,
  RiAccountPinBoxLine,
  RiRedPacketLine,
  RiMacbookLine,
  RiBankLine,
  RiBuilding2Line,
  RiLineChartLine,
  RiScales3Fill,
  RiCommunityFill,
  RiGlobalLine,
} from '@remixicon/react';

export enum TopBarEnum {
  FOR_YOU = 'ForYou',
  MARKETPLACES = 'MyMarketplaces',
  TOP_RANKED = 'TopRanked',
  APP_INTEGRATION = 'AppIntegration',
  REWARD = 'Reward',
  SERVICES = 'Services',
  REVIEW = 'Review',
  REMOTE = 'Remote',
  FINANCES = 'Finances',
  HYBRID = 'Hybrid',
  CAREER_GROWTH = 'CareeGrowth',
  BALANCE = 'Balance',
  SMALL_BUSINESS = 'SmallBusiness',
  SOCIAL = 'Social',
}

interface ITopBarItem {
  title: string;
  key: TopBarEnum;
  icon: JSX.Element;
}

export const topBarItems: ITopBarItem[] = [
  {
    title: 'For you',
    key: TopBarEnum.FOR_YOU,
    icon: <RiHeart3Fill className='text-primary min-w-fit size-8' />,
  },
  {
    title: 'My marketplaces',
    key: TopBarEnum.MARKETPLACES,
    icon: <RiStarLine className='text-primary min-w-fit size-8' />,
  },
  {
    title: 'Top Ranked',
    key: TopBarEnum.TOP_RANKED,
    icon: <RiAwardFill className='text-primary min-w-fit size-8' />,
  },
  {
    title: 'App & integration',
    key: TopBarEnum.APP_INTEGRATION,
    icon: <RiSmartphoneLine className='text-primary min-w-fit size-8' />,
  },
  {
    title: 'Reward',
    key: TopBarEnum.REWARD,
    icon: <RiGift2Line className='text-primary min-w-fit size-8' />,
  },
  {
    title: 'Services',
    key: TopBarEnum.SERVICES,
    icon: <RiAccountPinBoxLine className='text-primary min-w-fit size-8' />,
  },
  {
    title: 'Review',
    key: TopBarEnum.REVIEW,
    icon: <RiRedPacketLine className='text-primary min-w-fit size-8' />,
  },
  {
    title: 'Remote',
    key: TopBarEnum.REMOTE,
    icon: <RiMacbookLine className='text-primary min-w-fit size-8' />,
  },
  {
    title: 'Finances',
    key: TopBarEnum.FINANCES,
    icon: <RiBankLine className='text-primary min-w-fit size-8' />,
  },
  {
    title: 'Hybrid',
    key: TopBarEnum.HYBRID,
    icon: <RiBuilding2Line className='text-primary min-w-fit size-8' />,
  },
  {
    title: 'Career growth',
    key: TopBarEnum.CAREER_GROWTH,
    icon: <RiLineChartLine className='text-primary min-w-fit size-8' />,
  },
  {
    title: 'Balance of personal life and work',
    key: TopBarEnum.BALANCE,
    icon: <RiScales3Fill className='text-primary min-w-fit size-8' />,
  },
  {
    title: 'Small business',
    key: TopBarEnum.SMALL_BUSINESS,
    icon: <RiCommunityFill className='text-primary min-w-fit size-8' />,
  },
  {
    title: 'Social impact',
    key: TopBarEnum.SOCIAL,
    icon: <RiGlobalLine className='text-primary min-w-fit size-8' />,
  },
];
