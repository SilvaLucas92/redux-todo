import './App.css';
import React  from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList'
import { Heading, IconButton, useColorMode, VStack } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Footer from './components/Footer';

function App() {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <VStack
    p={4}
    border='1px'
    borderColor='red'
    h='100%'
    >
      <IconButton
      icon={colorMode === 'light'? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      alignSelf='flex-end'
      isRound='true'
      >

      </IconButton>
      <Heading
        size='4xl'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        textAlign='center'
      >
        ToDo List
      </Heading>
      <AddTodo />
      <TodoList />
      <Footer />
    </VStack>
  );
}


export default App;