import Template from "./headerSercundaryCss"
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from "../../../assets/zapdai.png"

type act = {
  func: () => void
}
export const HeaderSecund = ({ func }: act) => {
  return (
    <Template.Header>
      <Stack direction="row" spacing={20}>
        <IconButton aria-label="delete" onClick={func}>
          <ArrowBackIcon /> 
        </IconButton>
        <Template.Logo src={logo} alt="ZapDai" />
      </Stack>
      <Template.Nav>
        <div>Planos</div>
        <div>Parceiros</div>
        <div>Contato</div>
      </Template.Nav>
    </Template.Header>
  )
}