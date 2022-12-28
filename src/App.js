import Header from "./components/Header";
import Body from "./components/Body";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-3/5">
        <Header />
        <Body />
      </div>
    </QueryClientProvider>
  );
}

export default App;
