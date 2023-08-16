import express from 'express';
import { v4 } from 'uuid';
import bcrypt from 'bcrypt'; 

const app = express()
app.use(express.json())
const port = 3000;
bcrypt.compareSync(myPlaintextPassword, hash);
const saltRounds = 10;


// res.send('Hallo world ')  תרגיל מספר 1
const users = [{
    id: '1',
    name: "one",
    emil: 'hjhjh@gmail.com',
    password: 123
}, {
    id: '2',
    name: 'tow',
    emil: 'yuyu@co.il',
    password: 234
}, {
    id: v4(),
    name: 'random',
    emil: 'ghg@',
    password: 23423
}, {
    id: '3',
    name: 'three',
    emil: 'vvhv@gmail.com',
    password: 345
}]

app.get('/', (req, res) => {  //
    res.status(200).json(users)
})


app.get('/user/:id', (req, res) => {   //תרגיל 2 בוחר משתמש לפי id 
    const id = req.params.id
    users.forEach((user => {
        if (user.id === id) {
            res.status(200).json(user)
        }

    }))


})

app.post('/users', (req, res) => { // תרגיל 3 הוספת שם משתמש חדש

    const id = req.body.id
    const name = req.body.name
    const emil = req.body.emil
    const password = req.body.password
    const hash = bcrypt.hashSync(password,saltRounds);
    users.push({
        id,
        name,
        emil,
        password: hash
    })
    
    res.send('user as bing add');
})



app.put('/users/:id', (req, res) => {   // תרגיל מספר 4
    const idp = req.params.id
    const id = req.body.id
    const name = req.body.name
    const emil = req.body.email
    const password = req.body.password
    users.forEach(element => {
        if (element.id === id) {
            element.id = id;
            element.name = name;
            element.emil = emil;
            element.password = password;
            res.send('Updated')
        } else {
            res.send('not Updated')
        }
    })
});





app.delete("/users/:id", (req, res) => {   // תרגיל 5
    const id = req.params.id;
    const index = users.findIndex(user => user.id == id);
    if (index !== -1) {
        users.splice(index, 1);
        return res.json(users);
    } else {
        res.status(404).send("User not found");
    }
});


app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
})



// תרגיל ג

app.post("/login", (req, res) => {
    const { emil, password } = req.body;
    bcrypt.compareSync(, hash);
    const user = users.find(user => user.emil === emil && user.password === parseInt(password));
    // const password = users.find(user => user.password === password); 
    if (user) {
        return res.send("User is connected");
    } else {
        res.status(404).send("wrong credentials");
    }
});

// תרגיל ד



