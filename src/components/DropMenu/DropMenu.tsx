import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as RadixDropDownPrimitive from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import styles from './DropMenu.module.css';

const routes = [
    {path: "/", displayName: 'Home' },
    {path: "/literature", displayName: 'Literature' }
];

interface StatefulLinkProps {
    route: {
        path: string;
        displayName: string;
    };
    closeContent:() => void | React.MouseEventHandler<HTMLParagraphElement> | undefined;
}

const StatefulLink: React.FC<StatefulLinkProps> = ({ route, closeContent, children }) => {
    const [active, setActive] = useState(false);
    const router = useRouter();
    const { pathname } = router;

    useEffect(() => {
        if (pathname === route.path) {
            setActive(true);
        }
    }, [pathname]);

    if (active) {
        return <p onClick={closeContent as React.MouseEventHandler} className={styles.activeLink}>{route.displayName}</p>;
    }

    return (
        <p className={styles.link} onClick={() => { router.push(route.path); closeContent();}}>{route.displayName}</p>
    );
}

const RoundContainer = React.forwardRef<HTMLDivElement, { children: React.ReactElement }>(({ children }, ref) => (
    <div ref={ref} className={styles.dropMenuButton}>
        {children}
    </div>
));

const DropMenuFrame = RadixDropDownPrimitive.Root;
const DropMenuButton = RadixDropDownPrimitive.Trigger;
const DropMenuContent = RadixDropDownPrimitive.DropdownMenuContent;
const DropMenuItem = RadixDropDownPrimitive.Item;

const DropMenu: React.FC<{ className: string; }> = ({ className }) => {
    const [open, setOpen] = useState(false);
    const closeContent = () => setOpen(false);
    return (
      <div className={className}>
        <DropMenuFrame >
            <DropMenuButton className={styles.dropContainer}>
                <RoundContainer>
                    <HamburgerMenuIcon />
                </RoundContainer>
            </DropMenuButton>
            <DropMenuContent sideOffset={5}>
                {routes.map(r => (
                    <DropMenuItem className={styles.item}>
                       <StatefulLink route={r} closeContent={closeContent}/>
                    </DropMenuItem>
                ))}
            </DropMenuContent>
        </DropMenuFrame>
      </div>
    );
};

export default DropMenu;