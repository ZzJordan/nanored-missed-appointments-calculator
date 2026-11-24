import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Page } from './Page'
import { NoShowCalculatorTool } from './components/no-show-calculator-tool'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page Tool={NoShowCalculatorTool} />
  </StrictMode>,
)
