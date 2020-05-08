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
  WHATS_APP_LINK = 'https://wa.me/79146267319';

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

  MODDING_PAGE = {
    header: {
      title: 'Моддинг',
      subtitle: 'Стань уникальным.'
    },
    details: {
      title: 'Моддинг.',
      info: 'Это внесение изменений в дизайн или конструкцию iPhone для улучшения внешнего вида или функциональности.'
    },
    elements: {
      materialAndColor: {
        title: 'Материал и цвет',
        subtitle: 'Также возможна установка накладок на заднюю крышку.'
      },
      lightApple: {
        title: 'Светояблоко',
        subtitle: 'Специальный тип корпуса, со светящимся яблоком позади.'
      }
    },
    motivatilonButtons: {
      write: {
        name: 'Написать',
        url: this.WHATS_APP_LINK,
        message: 'Здравствуйте, хочу сделать моддинг iPhone '
      },
      call: {
        name: 'Позвонить',
        tel: '+79619671403'
      }
    }
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
    return Object.assign({}, this.OFFER_PAGE);
  };

  getRepairPageData = () => {
    return Object.assign({}, this.REPAIR_PAGE);
  };

  getModdingPageData = () => {
    return Object.assign({}, this.MODDING_PAGE);
  };

  getLinkData = () => {
    return Object.assign({}, this.LINK);
  }

  getIphoneList = () => {
    return this.IPHONE_LIST.slice().reverse();
  }
}
