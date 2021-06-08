import React, { useEffect, useRef } from 'react';

import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  useEffect(() => {
    mount(ref.current);
  }, []);
  const ref = useRef(null);
  return <div ref={ref}></div>;
};

export default MarketingApp;
