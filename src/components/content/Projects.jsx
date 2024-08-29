import React from 'react';
import { Tabs } from 'antd';
import ConstructionProject from './construction/ConstructionProject';
import BungalowProject from './bungalow/BungalowProject';
import InteriorProject from './interior/InteriorProject';

export default function Projects() {
  const items = [
    {
      key: '1',
      label: 'Construction Project',
      children: <ConstructionProject />,
    },
    {
      key: '2',
      label: 'Bungalow Project',
      children: <BungalowProject />,
    },
    {
      key: '3',
      label: 'Interior Project',
      children: <InteriorProject />,
    },
  ];

  const onChange = key => {
    console.log(key);
  };

  return (
    <div className="project-details-main">
      <h3 className="project-text">PROJECTS</h3>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="project-tab" centered />;
    </div>
  );
}
