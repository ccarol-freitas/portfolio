import { SetStateAction, useState } from 'react'
import { Tab, TabSelector } from './TabsStyles'

type Props = {
    tagInitial: string
    tabs: {
        name: string
        selected: string
    }[]
    toggled?: boolean
    setToogled: (e: any) => void
    style?: React.CSSProperties
    className?: string
}


const Tabs = (props: Props): JSX.Element => {
    const [selectedShow, setSelectedShow] = useState(props.tagInitial)

    const handleToggle = (tabSelected: SetStateAction<string>) => {
        if (selectedShow !== tabSelected) {
            setSelectedShow(tabSelected)
            props.setToogled(!props.toggled)
        }
    }
    
    return (
        <Tab className={props.className}>
            {props.tabs.map((tab) => {
                const isSelected = selectedShow === tab.selected
                return (
                    <TabSelector
                        className={`${
                            isSelected === true
                                ? 'tab-active primaryPurple100-bold-24'
                                : 'primaryPurple100-normal-24'
                        }`}
                        key={tab.name}
                        onClick={() => {
                            handleToggle(tab.selected)
                        }}
                        style={props.style}
                    >
                        {tab.name}
                    </TabSelector>
                )
            })}
        </Tab>
    )
}

export default Tabs
