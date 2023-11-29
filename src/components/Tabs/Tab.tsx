import React from 'react';

interface TabProps {
    activeTab: string;
    label: string;
    onClick: (label: string) => void;
}

const Tab: React.FC<TabProps> = ({ activeTab, label, onClick }) => {
    const handleClick = () => onClick(label);

    return (
        <li className={`tab-list-item ${activeTab === label ? 'tab-list-active' : ''}`} onClick={handleClick}>
            {label}
        </li>
    );
};

export default Tab;
