import { StackDivider, Stack, VStack, Text, IconButton,  Heading, Flex } from '@chakra-ui/react';
import React from 'react'
import { connect } from 'react-redux';
import { deleteTask } from '../redux/todo/todo-actions';
import { completeTask } from '../redux/todo/todo-actions';
import { uncompleteTask } from '../redux/todo/todo-actions';
import { FaTrash } from 'react-icons/fa';
import { AiOutlineCheck } from 'react-icons/ai';

const TodoList = ({ tasks, deleteTask, completeTask, uncompleteTask }) => {

    const handleComplete = (id) => {
        const itemFound = tasks.find(task => task.id === id);
        if(!itemFound.complete) {
            completeTask(id)
        } else {
            uncompleteTask(id)
        }
    }
return (
    <VStack
    spacing={8}
    divider={<StackDivider />}
    p='8'
    borderRadius='lg'
    w='60%'
    alignItems='center'
    >   
        {tasks.length === 0 && (
                <Heading
                textAlign='center'
                >
                    No ToDo's left
                </Heading>
        )}
        {tasks && (
            tasks.map(oneTask => {
                return(
                    
                        <Stack
                        key={oneTask.id}
                        direction={{base:'column', md:'row'}}
                        alignItems='center'
                        >
                            <Text
                            style = {oneTask.complete? {textDecoration: 'line-through'} : null} 
                            m={4}
                            cursor='pointer'
                            >
                            {oneTask.task}
                            </Text>
                            <Flex>
                                <IconButton
                                icon={<AiOutlineCheck />}
                                isRound='true'
                                onClick={ ()=> {handleComplete(oneTask.id)} }
                                m={1}
                                />
                                <IconButton
                                onClick={() => deleteTask(oneTask.id)}
                                icon={<FaTrash />}
                                isRound='true'
                                m={1}
                                >Borrar
                                </IconButton>
                            </Flex>
                        </Stack>
                )
                })
            )}
    </VStack>
        )
        }

const mapStateToProps = (state) => {
        return {
        tasks: state.todo
        }
    }

const dispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(deleteTask(id)),
        completeTask: (id) => dispatch(completeTask(id)),
        uncompleteTask: (id) => dispatch(uncompleteTask(id))
        }
    }

export default connect(mapStateToProps, dispatchToProps)(TodoList);