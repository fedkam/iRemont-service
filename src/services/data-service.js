import {
  PRICE_LABEL,
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

  LINKS = {
    repair: {
      name: 'Ремонт',
      path: '/repair'
    },
    modding: {
      name: 'Моддинг',
      path: '/modding'
    },
    aboutModding: {
      name: 'Важное о запчастях',
      path: '/about-modding'
    },
    aboutUs: {
      name: 'О нас',
      path: '/about-us'
    },
    other: {
      name: 'Остальные',
      path: '/old-model'
    },
    whatsApp: 'https://wa.me/79146267319',
    phoneNumber: '+7 (961) 967-14-03',
    email: 'iremont41@mail.ru',
  }

  MENU_LIST = [
    this.LINKS.repair,
    this.LINKS.modding,
    this.LINKS.aboutModding,
    this.LINKS.aboutUs
  ];

  MOTIVATION_BUTTONS = {
    write: {
      name: 'Написать',
      url: this.LINKS.whatsApp,
      message: ''
    },
    call: {
      name: 'Позвонить',
      tel: this.LINKS.phoneNumber
    }
  };

  OFFER_PAGE = {
    subtitle: 'Подари вторую жизнь.'
  }

  REPAIR_PAGE = {
    title: 'Ремонт',
    subtitle: 'Найди свой.'
  }

  OLD_MODEL_PAGE = {
    header: {
      title: 'Устаревшие',
      subtitle: 'Ремонтируем все модели.'
    },
    details_more_time: {
      title: 'Дополнительное время.',
      info: 'Мы готовы взяться за любой iPhone, но в связи возможным дефицитом запчастей, может понадобиться дополнительное время.'
    },
  }

  PRICE_PAGE = {
    header: {
      title: 'Прайс',
      subtitle_regular: 'Запчасти включены в стоимость работы.',
      //subtitle_bold: 'Это окончательная цена.'
    },
    priceLabel: PRICE_LABEL
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
    }
  }

  SPARE_PARTS_PAGE = {
    header: {
      title: 'О запчастях',
      subtitle: 'Как вас обманывают.'
    },
    details_original: {
      title: 'Оригинальные.',
      info: 'Данные запчасти есть только в авторизованных сервисных центрах компании Apple. Поэтому когда вы обращаетесь в обычный сервисный центр (не Apple) и вам говорят что эти детали оригинальные, вам либо впихивают оригинальные детали снятые с чужого телефона(БУ), либо китайский аналог.'
    },
    details_сhineseСounterpart: {
      title: 'Китайский аналог.',
      info: 'В большинстве сервисных центрах, когда говорят “оригинальные запчасти” имеют ввиду именно качественный китайский аналог,  а  “китайскими запчастями” называют некачественный китайский аналог.'
    },
    details_offer: {
      title: 'Что предлагаем мы?',
      info: 'У нас имеется многолетний опыт сотрудничества с китайскими поставщиками, и мы знаем у кого самые качественные китайские аналоги. Уверяем, вы не сможете их отличить от оригинала.'
    },
    motivation: {
      title: 'Пора начать!'
    }
  }

  ABOUT_US_PAGE = {
    header: {
      title: 'О нас',
      subtitle: 'Коротко и по делу.'
    },
    details_quality: {
      title: 'Качество.',
      info: 'Мы работаем с 2013 года, и за этот период наладили поставку самых качественых запчастей для любого iPhone.'
    },
    details_efficiency: {
      title: 'Оперативность.',
      info: 'Наш склад содержит большинство ходовых запчастей, и мы не тратим время на их доставку, поэтому ремонт длится недолго.'
    },
    details_responsiveness: {
      title: 'Отзывчивость.',
      info: 'Мы всегда идем на встречу клиенту, и готовы оказать качественную помощь даже в нерабочее время и праздничные дни.'
    },
    details_office: {
      title: 'Офис.',
      info: 'Мы находимся по адресу г.Петропавловск-Камчатский ул.Тельмана 1А.'
    },
    contacts: {
      title: 'Контакты',
      email: this.LINKS.email
    },
    copyright: 'Copyright © 2020 iРемонт. All rights reserved.'
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
    return JSON.parse(JSON.stringify(this.MENU_LIST));
  };

  getMotivationButtonData = () => {
    return JSON.parse(JSON.stringify(this.MOTIVATION_BUTTONS));
  };

  getOfferPageData = () => {
    return JSON.parse(JSON.stringify(this.OFFER_PAGE));
  };

  getRepairPageData = () => {
    return JSON.parse(JSON.stringify(this.REPAIR_PAGE));
  };

  getOldModelPageData = () => {
    return JSON.parse(JSON.stringify(this.OLD_MODEL_PAGE));
  };

  getPricePageData = () => {
    return JSON.parse(JSON.stringify(this.PRICE_PAGE));
  };

  getModdingPageData = () => {
    return JSON.parse(JSON.stringify(this.MODDING_PAGE));
  };

  getSparePartsPageData = () => {
    return JSON.parse(JSON.stringify(this.SPARE_PARTS_PAGE));
  }

  getAboutUsPageData = () => {
    return JSON.parse(JSON.stringify(this.ABOUT_US_PAGE));
  }

  getLinkData = () => {
    return JSON.parse(JSON.stringify(this.LINKS));
  }

  getIphoneList = () => {
    return JSON.parse(JSON.stringify(this.IPHONE_LIST)).reverse();
  }
}
