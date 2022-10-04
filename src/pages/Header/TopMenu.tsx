import React, { useState } from 'react';

import { IconButton, Menu } from '@mui/material';

import { MenuContainer, StyledMenuIcon, StyledMenuItem } from './styled';
import { ActiveModal } from '../../types/modal';

type Props = {
    menuList: ('Settings' | 'Info' | 'Stats' | null)[];
    onMenuChange: (newActiveModal: ActiveModal) => void;
};

const TopMenu = (props: Props) => {
    const { menuList, onMenuChange } = props;
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);
    const open = Boolean(anchor);
    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(event.currentTarget);
    };
    const onCloseHandler = (newActiveModal: ActiveModal) => {
        onMenuChange(newActiveModal);
        setAnchor(null);
    };

    return (
        <MenuContainer sx={{ display: { sm: 'none' } }}>
            <IconButton
                sx={{ display: { sm: 'none' } }}
                aria-controls={open ? 'header-menu' : undefined}
                aria-haspopop="true"
                aria-extended={open ? 'true' : undefined}
                onClick={onClickHandler}
            >
                <StyledMenuIcon color="inherit" />
            </IconButton>
            <Menu
                id="header-menu"
                anchorEl={anchor}
                open={open}
                onClose={(_event) => onCloseHandler(null)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                MenuListProps={{
                    'aria-labelledby': 'header-menu',
                    disablePadding: true,
                }}
                PaperProps={{
                    style: {
                        width: 150,
                    },
                }}
                sx={{ display: { sm: 'none' } }}
            >
                {menuList.map((menuItem) => (
                    <StyledMenuItem
                        onClick={(_event) => onCloseHandler(menuItem)}
                    >
                        {menuItem}
                    </StyledMenuItem>
                ))}
            </Menu>
        </MenuContainer>
    );
};

export default TopMenu;
