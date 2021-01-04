import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai'
import { GrGallery } from 'react-icons/gr'


const ProSideBar = () => {
    return (
        <div>
            <ProSidebar collapsed="true">
                <Menu iconShape="square">
                    <MenuItem icon={<AiIcons.AiOutlineHome />} ><Link to='homepage'>Homepage</Link> </MenuItem>

                    <SubMenu icon={<GrGallery />} title="Galéria" >
                        <MenuItem> <Link to='/secdvere'>Bezpečnostné dvere</Link> </MenuItem>
                        <MenuItem> <Link to='/zaluzie'>Žalúzie</Link> </MenuItem>
                    </SubMenu>
                    <MenuItem><Link to='/recenzie'>Recenzie</Link></MenuItem>
                    <MenuItem><Link to='/kontakt'>Kontakt</Link></MenuItem>
                </Menu>
            </ProSidebar>
        </div>
    )
}

export default ProSideBar