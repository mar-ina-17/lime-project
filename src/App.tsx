import { PunkNavbar } from "@/components";
import { config } from "@/config/wagmi_config";
import { useMyRouter } from "@/routes";
import { store } from "@/store";
import { AppContainer } from "@/views";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ChakraProvider>
            <AppContainer>
              <PunkNavbar />
              {useMyRouter()}
            </AppContainer>
          </ChakraProvider>
        </Provider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
