// js
// react
// third
import { Container, Stack, Typography } from '@mui/material'
// own
import './App.css'
import { LogoJavaScriptSvg } from './components/Logos'
import Start from './components/Start'
import { useQuestions } from './hooks/useQuestions'
import Game from './components/Game'

function App() {
  const { questions } = useQuestions();
  // console.log(questions);
  return (
    <main>
      <Container maxWidth='sm'>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <Typography variant='h2' component='h1'>
            JavaScript Quiz
          </Typography>
          <LogoJavaScriptSvg />
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  )
}

// exports
export default App
