const username = 'Irina'
const isLoggedIn = true

const App = () => {
    return (
        <>
            <h1 className="title">To Do List</h1>
            <p>{isLoggedIn ? `Hi, ${username}!` : 'Please log in'}</p>
            {isLoggedIn ? <p>Hi, {username}!</p> : <button>Log in</button>}
        </>
    )
}

export default App
