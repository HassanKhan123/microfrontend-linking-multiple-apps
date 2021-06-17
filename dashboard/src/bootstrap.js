import { createApp } from 'vue';

import Dashboard from './components/';

const mount = el => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
  console.log('MODE');
  const devRoot = document.querySelector('#_dashboard_dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
