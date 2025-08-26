import Template from "./detalhesProdutosCss"
import Dialog from '@mui/material/Dialog';


export interface SimpleDialogProps {
  open: boolean;
  selectedValue: any;
  onClose: (value: string) => void;
}

export function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  return (
    <Dialog PaperProps={{
    sx: {
      width: { xs: '95%', sm: '80%', md: '1200px' }, // responsivo
      maxHeight: '90vh',
    },
  }} onClose={onClose} open={open}>
        <Template.Container>
       <Template.ImagemProduto src={selectedValue?.imgProduct}/>
       <Template.containrMian>dffgdfgd</Template.containrMian>
      </Template.Container>
    </Dialog>
  );
}
