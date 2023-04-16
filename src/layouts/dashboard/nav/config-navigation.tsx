// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: icon('ic_user'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  playground: icon('ic_menu_item'),
  file: icon('ic_file'),
  folder: icon('ic_folder'),
  label: icon('ic_label'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Menu',
    items: [
      { title: 'Playground', path: PATH_DASHBOARD.playground, icon: ICONS.playground },
      { title: 'Categorization', path: PATH_DASHBOARD.chart, icon: ICONS.label },
      { title: 'History', path: PATH_DASHBOARD.two, icon: ICONS.file },
      { title: 'Credits', path: PATH_DASHBOARD.three, icon: ICONS.analytics },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  /* {
    subheader: 'Personal',
    items: [
      {
        title: 'user',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'Four', path: PATH_DASHBOARD.user.four },
          { title: 'Five', path: PATH_DASHBOARD.user.five },
          { title: 'Six', path: PATH_DASHBOARD.user.six },
        ],
      },
    ],
  }, */
];

export default navConfig;
