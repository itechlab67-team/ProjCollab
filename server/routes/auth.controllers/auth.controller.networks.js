export const google = (req, res) => {
    const io = req.app.get('io')
    const user = { 
        name: req.user.displayName,
        photo: req.user.photos[0].value.replace(/sz=50/gi, 'sz=250')
    }
    io.in(req.query.socketId).emit('google', user)
    res.end()
}

export const facebook = (req, res) => {
    const io = req.app.get('io')
    const { givenName, familyName } = req.user.name
    const user = { 
        name: `${givenName} ${familyName}`,
        photo: req.user.photos[0].value
    }
    io.in(req.query.socketId).emit('facebook', user)
    res.end()
}

export const github = (req, res) => {
    const io = req.app.get('io')
    const user = { 
        name: req.user.username,
        photo: req.user.photos[0].value
    }
    io.in(req.query.socketId).emit('github', user)
    res.end()
} 