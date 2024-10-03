const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const signUp = require('./routes/signupRoute')
const login = require('./routes/loginRoute')
const checktoken = require ('./routes/tokenCheckRoute')
const getCouponData = require('./routes/couponDataRoute')
const deleteCoupon = require('./routes/deleteCouponRoute')
const customerId = require('./routes/customerIdRoute')
const fbApi = require('./routes/fbApiRoutes')
const discount = require('./routes/discountRoute')
const search = require('./routes/searchRoute')
const path = require('path')
const PORT = process.env.PORT || 3000


app.use(cors())
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.use(signUp)
app.use(login)
app.use(checktoken)
app.use(getCouponData)
app.use(deleteCoupon)
app.use(customerId)
app.use(fbApi)
app.use(discount)
app.use(search)
app.use(express.static(path.join(__dirname,'/client/dist')))

app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"))
})

mongoose.connect('mongodb+srv://keyum:WypzYsk7huP8k6dE@cluster0.vktkwku.mongodb.net/escapedis')
.then(result => {
  console.log('connected to mongoDb')
  console.log('listening on port 3000')
  app.listen(PORT)
})
.catch(err => {
  console.log(err)
})


