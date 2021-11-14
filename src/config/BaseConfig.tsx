export const BaseConfig = {
  api: {
    release: {
      user: 'http://localhost:5000/',
    },
    debug: {
      user: 'http://localhost:5000/',
    },
    user: (url: string) => (BaseConfig.api.debug ? BaseConfig.api.debug.user.concat(url) : BaseConfig.api.release.user.concat(url)),
  },
  service: {
    user: {},
  },
  utilities: {
    authorizedHeader: () => {
      const user = JSON.parse(localStorage.getItem('user') || '');
      if (user && user.token) {
        return { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` };
      }
      return { 'Content-Type': 'application/json' };
    },
    user: () => (JSON.parse(localStorage.getItem('user') || '')),
    userToken: () => (JSON.parse(localStorage.getItem('user') || '').token),
    userId: () => (JSON.parse(localStorage.getItem('user') || '').id),
  },
};
