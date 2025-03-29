import './App.css'
import Container from './components/container/Container';
import Form from './components/Form/Form';
import TaskList from './components/List/TaskList';

function App() {

  return (
    <>
      <Container className={'flex'}> 
        <h1>To do List</h1>
        <Form />
      </Container>

      <Container className={'grid'}>
        <TaskList />
      </Container>
    </>
  )
}

export default App
