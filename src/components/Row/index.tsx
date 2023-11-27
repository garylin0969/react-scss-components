import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

const Row = ({ children }: Props) => {
    return <div className="row">{children}</div>;
};

export default Row;
