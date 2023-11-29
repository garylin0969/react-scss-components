import React, { useState } from 'react';
import Tab from './Tab';

interface TabsProps {
    children: React.ReactElement[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClickTab = (tab: string) => setActiveTab(tab);

    return (
        <div className="tabs">
            <ol className="tab-list">
                {children.map((child) => {
                    const { label } = child.props;

                    return <Tab activeTab={activeTab} key={label} label={label} onClick={handleClickTab} />;
                })}
            </ol>
            <div className="tab-content">
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </div>
    );
};

export default Tabs;
