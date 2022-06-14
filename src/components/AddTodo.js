import { Button, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTask } from '../redux/todo/todo-actions';
const AddTodo = ({ addTask }) => {
        const [task, setNewTask] = useState('');
        const handleSubmit = (e) => {
            e.preventDefault();
            if(task) {
            const item = {
                id: new Date().getTime().toString(),
                task: task,
                complete: false
            };
            addTask(item)
            setNewTask('');
            }
        };
    return (
        <form onSubmit={ handleSubmit }>
            <VStack
            mb={8}
            >
                <Input
                variant='filled'
                placeholder='Add a new Task'
                value={ task }
                m={10}
                size='lg'
                onChange={ (e) => { setNewTask(e.target.value) }}/>
                <Button
                px='10'
                colorScheme='blue'
                type='submit'
                >
                Add
                </Button>
            </VStack>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (newTask) => dispatch(addTask(newTask)),
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);