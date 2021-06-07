import { mount } from 'marketing/MarketingApp';

import React, { useEffect, useRef } from 'react';

const MarketingApp = () => {
  useEffect(() => {
    mount(ref.current);
  }, []);
  const ref = useRef(null);
  return <div ref={ref}></div>;
};

export default MarketingApp;
