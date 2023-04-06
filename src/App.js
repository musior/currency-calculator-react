import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Select from './components/Select';
import Button from './components/Button';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Form>
          <Select></Select>
          <Button></Button>
        </Form>
      </Main>
    </>
  );
}

export default App;
