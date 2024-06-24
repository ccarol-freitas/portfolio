import { useState } from 'react';
import { Tab, TabSelector } from './styles';
import { TabsProps } from '../../../data/@types/types';

const Tabs = (props: TabsProps): JSX.Element => {
  const [selectedShow, setSelectedShow] = useState(props.tagInitial);

  const handleToggle = (tabSelected: string) => {
    if (selectedShow !== tabSelected) {
      setSelectedShow(tabSelected);
      props.setToogled(tabSelected); // Call the prop function with the selected tab
    }
  };

  return (
    <Tab className={props.className}>
      {props.tabs.map((tab) => {
        const isSelected = selectedShow === tab.selected;
        return (
          <TabSelector
            className={`${isSelected === true
                ? 'tab-active primaryPurple100-bold-24'
                : 'primaryPurple100-normal-24'
              }`}
            key={tab.name}
            onClick={() => {
              handleToggle(tab.selected);
            }}
            style={props.style}
          >
            {tab.name}
          </TabSelector>
        );
      })}
    </Tab>
  );
};

export default Tabs;
