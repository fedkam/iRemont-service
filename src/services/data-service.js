import { iPhone_8, iPhone_8_Plus } from './data-iphones';

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
    }
  }

  OFFER_PAGE = {
    subtitle: 'Подари вторую жизнь.'
  }

  IPHONE_LIST = [
    iPhone_8,
    iPhone_8_Plus
  ]

  getMenuList = () => {
    return this.MENU_LIST;
  };

  getOfferData = () => {
    return this.OFFER_PAGE;
  };

  getLinkData = () => {
    return this.LINK;
  }

  getIphoneList = () => {
    return this.IPHONE_LIST;
  }
}
