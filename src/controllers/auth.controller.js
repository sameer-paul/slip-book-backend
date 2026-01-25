const login = (req, res) => {
    console.log('Login controller invoked')
    const { username, password } = req.body
    console.log(`Login attempt for user: ${username} - {password: ${password}`)
    res.send({ message: 'Login successful' })
}

export { login }
