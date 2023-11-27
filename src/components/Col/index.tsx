import { ReactNode } from 'react';

interface Props {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    children?: ReactNode;
}

const Col = ({ xs, sm, md, lg, xl, children }: Props) => {
    let className = 'col';
    if (xs) className += ` col-${xs}`;
    if (sm) className += ` col-sm-${sm}`;
    if (md) className += ` col-md-${md}`;
    if (lg) className += ` col-lg-${lg}`;
    if (xl) className += ` col-xl-${xl}`;

    return <div className={className}>{children}</div>;
};

export default Col;
