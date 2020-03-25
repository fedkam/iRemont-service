export default class DataService {
  MENU_LIST = [
    {
      path: '/repair',
      name: 'Ремонт'
    },
    {
      path: '/modding',
      name: 'Моддинг'
    },
    {
      path: '/about-modding',
      name: 'Важное о запчастях'
    },
    {
      path: '/about-us',
      name: 'О нас'
    },
  ];

  getMenuList = async () => {
    return this.MENU_LIST;
  };
}
