export const BaseConfig = {
  config: {
    debug: () => {
      if (/.test./.test(window.location.href)) {
        return 'test';
      }
      // @ts-ignore:next-line
      // eslint-disable-next-line no-unused-vars
      if (/param/.test((param: string) => {})) {
        return 'debug';
      }
      return 'release';
    },
  },
  api: {
    release: {
      user: 'https://localhost',
    },
    debug: {
      user: 'https://localhost',
    },
    test: {
      user: 'https://localhost',
    },
    user: (url: string) =>
      BaseConfig.api[BaseConfig.config.debug()].user.concat(url),
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
