import Template from "./detalhesProdutosCss"
import Dialog from '@mui/material/Dialog';


export interface SimpleDialogProps {
  open: boolean;
  selectedValue: any;
  onClose: () => void;
}

export function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  return (
   <>
    {open && (
       <Template.Modal onClick={onClose}>
        <Template.Container>
       <Template.ImagemProduto src={selectedValue?.imgProduct}/>
       <Template.containrMian>dffgdfgd</Template.containrMian>
      </Template.Container>
    </Template.Modal>
    )}
   </> 
   
  );
}
