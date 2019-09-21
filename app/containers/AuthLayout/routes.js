import LoginPage from 'containers/LoginPage/loadable';

export default [
  {
    path: '/login',
    key: 'login',
    component: LoginPage,
    exact: false,
  },
  // {
  //   path: '/reset_password',
  //   key: 'reset_password',
  //   component: ResetPassword,
  //   exact: true,
  // },
  // {
  //   path: '/change_password',
  //   key: 'change_password',
  //   component: ChangePassword,
  //   exact: false,
  // },
];
