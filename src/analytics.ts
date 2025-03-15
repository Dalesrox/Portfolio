import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-PP97N95V', // Reemplaza con tu GTM ID
};

const initGTM = () => {
  TagManager.initialize(tagManagerArgs);
};

export { initGTM };