import { ThemeProvider } from "@/components/theme/theme-provider"
import { Home } from "./pages/home"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  )
}

export default App