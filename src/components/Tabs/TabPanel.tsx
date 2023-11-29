import React, { ReactNode } from 'react';

interface TabPanelProps {
    label: string;
    children: ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
    return <div className="tab-panel">{children}</div>;
};

export default TabPanel;
