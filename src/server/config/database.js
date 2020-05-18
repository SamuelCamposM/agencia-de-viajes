const mongoose = require('mongoose')
const URI =process.env.URLBASE


mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('conectado a la base de datos');
    
})