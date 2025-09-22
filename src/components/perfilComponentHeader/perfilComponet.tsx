import Perfil from "./perfil"
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import save from "../../service/localStorage/service-localStorage"
import { contextProduto } from "../../reducer/ProdutoProvaider/providerProdutos";
import { contextProvider } from "../../reducer/userProvider/userProvider";
import { useContext } from "react";
import { LoadingSecundary } from "../LoadingSecundary/LoadingSecundary";
const settings = ['Meus Pedidos', 'Account', 'Dashboard', 'Logout'];

export const PerfilComponet = ()=>{
  const ct = useContext(contextProduto)
  const usuario = useContext(contextProvider)
  const [loadign,setLoading]=React.useState(false)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
   const navigate = useNavigate()
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
    function removeToken(){
       save.logout()
      }
   const handleCloseUserMenu = (setting:string) => {
    setAnchorElUser(null);
    switch (setting) {
    case "Meus Pedidos":
      setLoading(true)
      setTimeout(()=>{
         navigate("/meus-pedidos");
      },1000)
      break;
    case "Account":
      navigate("/account");
      break;
    case "Dashboard":
      navigate("/dashboard");
      break;
    case "Logout":
      removeToken()
      navigate("/");
      ct?.removeItemLogado()
      break;
    default:
      break;
  }
  };

    return(
       <Perfil.container>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={usuario?.username} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>handleCloseUserMenu(setting)}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {loadign&&
          <LoadingSecundary></LoadingSecundary>
          }
       </Perfil.container>
    );
}