import Link  from 'next/link';
import Image from 'next/image';
import Logo from '../styles/image/logo.png';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link href="http://localhost:3000/" paddingLeft="2">
                <a>
                    <Image
                    src={Logo}
                    alt="logo"
                    width="200"
                    height="119"
                    />
                </a>
            </Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>Accueil</MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch />}>Recherche</MenuItem>
                    </Link>
                    <Link href="/search?purprose=for-sale" passHref>
                        <MenuItem icon={<FcAbout />}>Achat immobilier</MenuItem>
                    </Link>
                    <Link href="/search?purprose=for-rent" passHref>
                        <MenuItem icon={<FiKey />}>Location immobilière</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
);

export default Navbar;