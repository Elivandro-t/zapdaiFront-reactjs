// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SnackbarProvider } from './service/snackbar.tsx'
import { NetWorkContext } from './reducer/networkContext.tsx'
import { ProvaiderProdutos } from './reducer/ProdutoProvaider/providerProdutos.tsx'
import { ProviderUser } from './reducer/userProvider/userProvider.tsx'
import { StrictMode } from 'react'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NetWorkContext>
      <SnackbarProvider>
        <ProvaiderProdutos>

          <ProviderUser>
            <App />
          </ProviderUser>
        </ProvaiderProdutos>
      </SnackbarProvider >
    </NetWorkContext>

  </StrictMode>


)
