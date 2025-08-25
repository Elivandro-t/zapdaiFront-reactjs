import CircularProgress from "@mui/material/CircularProgress";

import Backdrop from "@mui/material/Backdrop";

export const LoadingSecundary = (loading:any)=>{
    return(
   <Backdrop
        open={loading}
        sx={{ color: "#eb3c3cff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    )
}