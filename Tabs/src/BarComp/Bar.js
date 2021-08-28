import React, { useState } from 'react';
import { Anchor, Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }
const Bar = (prop) => {

    return (
        <>
            <Tabs defaultActiveKey={prop.val} onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </>
    )
}

export default Bar
