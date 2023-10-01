import { useState } from 'react';
import { Tab, TabSelector } from './TabsStyles';

type Props = {
  tagInitial: string;
  tabs: {
    name: string;
    selected: string;
  }[];
  style?: React.CSSProperties;
  className?: string;
  setToogled: (tab: string) => void; // Updated the prop type
};

const Tabs = (props: Props): JSX.Element => {
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
            className={`${
              isSelected === true
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
