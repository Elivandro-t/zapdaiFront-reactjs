import Drawer from "@mui/material/Drawer"
import logo from "../../assets/logowhite.png"
import { CategoriaItem } from "../header/CategoriaItem"
import Base from "./drawerCss"
type drawer = {
    drawerOpen: boolean,
    toggleDrawer: (n: any) => any,
    categorias: any[]
}
export const Drower = ({ drawerOpen, toggleDrawer, categorias }: drawer) => {
    return (
        <Drawer open={drawerOpen} onClose={toggleDrawer}>
            <Base.Container>
                <img
                    src={logo} // substitua com o avatar real
                    alt="Logo da Empresa"
                    style={{ width: 78, height: "auto", objectFit: "contain" }}
                />
            </Base.Container>
            {/* Coloque aqui o conteúdo que você quer mostrar no Drawer */}
            <div style={{ width: 250, padding: 16, display: "flex", flexDirection: "column" }}>
                {categorias?.flatMap(ItemsRow => (
                    <CategoriaItem nome={ItemsRow.nome} iconUrl={ItemsRow.icone} />

                ))}


            </div>
        </Drawer>
    )
}