import React from 'react';
import Tabs, { TabPane } from '../src';
import '../assets/index.less';

const tabs: React.ReactElement[] = [];

for (let i = 0; i < 50; i += 1) {
  tabs.push(
    <TabPane key={i} tab={`Tab ${i}`}>
      Content of {i}
    </TabPane>,
  );
}

const getPopupRoot = (POPUP_ROOT_ID = 'awesome-tabs-popup', docRoot = document.body) => {
  let popupRoot = document.getElementById(POPUP_ROOT_ID);

  if (popupRoot) { return popupRoot; }

  // no root element, let's create one...
  popupRoot = document.createElement('div');
  popupRoot.id = POPUP_ROOT_ID;

  (docRoot as HTMLElement).append(popupRoot);

  return popupRoot;
};

export default () => {
  return (
    <div style={{ maxWidth: 550 }}>
      <Tabs
        className="awesome-tabs"
        defaultActiveKey="8"
        moreIcon="..."
        morePopupContainer={() => getPopupRoot()}
      >
        {tabs}
      </Tabs>
    </div>
  );
};
