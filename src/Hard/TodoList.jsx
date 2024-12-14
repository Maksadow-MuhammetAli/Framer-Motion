import {AnimatePresence, motion, useAnimate, usePresence} from 'framer-motion'
import React, {useEffect, useRef, useState} from 'react'
import {FaClock, FaSun, FaTrash} from 'react-icons/fa'

function Header() {
    return (
        <header className='todo-header'>
            <h1>Good morning! <FaSun /></h1>
            <p>Let's see what we've got to today</p>
        </header>
    )
}

function AddConsole({add, addTodo}) {
    const [isMin, setIsMin] = useState(true)
    const [time, setTime] = useState("15")
    const [todo, setTodo] = useState("")

    const sumbit = () => {
        if (time && todo) {
            addTodo({todo: todo, time: time, quantity: isMin ? "mins" : "hours", id: Math.random() * 999999})
            setTime("15")
            setTodo("")
        }
    }

    const addTime = (e) => {
        if (!isNaN(Number(e.target.value))) {
            setTime(e.target.value)
        }
    }
    return (
        <motion.div layout
            initial={{opacity: 0, y: 20}}
            animate={{opacity: add ? 1 : 0, y: add ? 0 : 20}}
            className='add-console'
        >
            <textarea value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='What do you want to do' />

            <div className='add-controls'>
                <div>
                    <input value={time} type="text" onChange={addTime} />

                    <motion.button style={{backgroundColor: isMin && "rgba(255, 255, 255, 0.967)"}}
                        onClick={() => setIsMin(true)}
                        className='time'>mins</motion.button>

                    <motion.button style={{backgroundColor: !isMin && "rgba(255, 255, 255, 0.967)"}}
                        onClick={() => setIsMin(false)}
                        className='time'>hours</motion.button>
                </div>
                <motion.button
                    onClick={sumbit}
                    className='sumbit'>Sumbit</motion.button>
            </div>
        </motion.div>
    )
}

function CreateTodo({addTodo}) {
    const [add, setAdd] = useState(false)
    return (
        <div className='create-todo'>
            <AddConsole add={add} addTodo={addTodo} />

            <motion.button layout
                className='add-button'
                whileHover={{scale: 1.01}}
                onClick={() => setAdd(!add)}
                whileTap={{scale: 0.99}}
                transition={{
                    duration: 0.2
                }}
            >
                <motion.div
                    animate={{rotate: add ? 45 : 0}}
                >+</motion.div>
            </motion.button>
        </div>
    )
}

function Todo({todo, deleteTodo}) {
    const [scope, animate] = useAnimate()
    const [isPresent, safeToRemove] = usePresence()

    useEffect(() => {
        if (!isPresent) {
            const exitAnimation = async () => {
                animate("h2", {color: "rgb(255, 78, 78)"}, {duration: 0.125})
                await animate(scope.current, {scale: 1.025}, {duration: 0.125, ease: "easeIn"})
                await animate(scope.current, {x: 50, opacity: 0}, {delay: 0.5})

                safeToRemove()
            }

            exitAnimation()
        }
    }, [isPresent])

    return (
        <motion.div ref={scope} className='todo' layout
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
        >
            <h2>{todo.todo}</h2>

            <div>
                <div className="time-info"><FaClock />{todo.time} {todo.quantity}</div>
                <div className="trash-icon"><FaTrash onClick={() => deleteTodo(todo)} /></div>
            </div>
        </motion.div>
    )
}

function Todos({todos, deleteTodo}) {
    return (
        <div className='todos'>
            <AnimatePresence>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                ))}
            </AnimatePresence>
        </div>
    )
}

function TodoList() {

    const [todos, setTodos] = useState([])

    const addTodo = (newTodo) => {
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
    }

    const deleteTodo = (dTodo) => {
        const filteredTodo = todos.filter((todo) => todo.id !== dTodo.id)
        setTodos(filteredTodo)
    }

    return (
        <div className='todolist-background'>
            <div className="todolist-container">
                <Header />

                <Todos todos={todos} deleteTodo={deleteTodo} />

                <CreateTodo addTodo={addTodo} />
            </div>
        </div>
    )
}

export default TodoList