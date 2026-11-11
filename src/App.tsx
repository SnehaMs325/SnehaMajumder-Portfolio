
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem={false}
    storageKey="sneha-portfolio-theme"
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
