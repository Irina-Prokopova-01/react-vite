const username = 'Irina'
const isLoggedIn = false

const App = () => {
    return (
        <div>
            <h1 className="title">To Do List</h1>
            {isLoggedIn && <p>Hi, {username}!</p>}
        </div>
    )
}

export default App
