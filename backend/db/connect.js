const mongoose = require('mongoose');

const db = process.env.DATABASE;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('DB Connection Okey');
}).catch((e)=>{
    console.log('Error :'+e);
})