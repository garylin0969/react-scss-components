import { ReactNode, useEffect, useRef, useState } from 'react';

interface Props {
    title?: string;
    children?: ReactNode;
}

const Accordion = ({ title, children }: Props) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(true);

    useEffect(() => {
        contentRef.current!.style.maxHeight = isOpen ? `${contentRef.current!.scrollHeight}px` : '0';
    }, [isOpen]);

    return (
        <>
            <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
                {title}
            </div>
            <div ref={contentRef} className="accordion-collapse">
                {children}
            </div>
        </>
    );
};

export default Accordion;
