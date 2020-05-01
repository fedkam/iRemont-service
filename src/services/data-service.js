import {
  iPhone_6,
  iPhone_6_Plus,
  iPhone_6s,
  iPhone_6s_Plus,
  iPhone_7,
  iPhone_7_Plus,
  iPhone_8,
  iPhone_8_Plus,
  iPhone_X,
  iPhone_XR,
  iPhone_XS,
  iPhone_XS_Max,
  iPhone_11,
  iPhone_11_Pro,
  iPhone_11_Pro_Max,
  iPhone_SE_v2
} from './data-iphones';



export default class DataService {
  MENU_LIST = [
    {
      name: 'Ремонт',
      path: '/repair'
    },
    {
      name: 'Моддинг',
      path: '/modding'
    },
    {
      name: 'Важное о запчастях',
      path: '/about-modding'
    },
    {
      name: 'О нас',
      path: '/about-us'
    },
  ];

  LINK = {
    repair: {
      name: 'Ремонт',
      path: '/repair'
    },
    modding: {
      name: 'Моддинг',
      path: '/modding'
    },
    whatIsModding: {
      name: 'Что это такое',
      path: 'ссылка'
    },
    other: {
      name: 'Остальные',
      path: 'ссылка'
    }
  }

  OFFER_PAGE = {
    subtitle: 'Подари вторую жизнь.'
  }

  REPAIR_PAGE = {
    title: 'Ремонт',
    subtitle: 'Найди свой.'
  }

  IPHONE_LIST = [
    iPhone_6,
    iPhone_6_Plus,
    iPhone_6s,
    iPhone_6s_Plus,
    iPhone_7,
    iPhone_7_Plus,
    iPhone_8,
    iPhone_8_Plus,
    iPhone_X,
    iPhone_XR,
    iPhone_XS,
    iPhone_XS_Max,
    iPhone_11,
    iPhone_11_Pro,
    iPhone_11_Pro_Max,
    iPhone_SE_v2
  ]

  getMenuList = () => {
    return this.MENU_LIST.slice();
  };

  getOfferPageData = () => {
    return this.OFFER_PAGE;
  };

  getRepairPageData = () => {
    return this.REPAIR_PAGE;
  };

  getLinkData = () => {
    return this.LINK;
  }

  getIphoneList = () => {
    return this.IPHONE_LIST.slice().reverse();
  }
}
