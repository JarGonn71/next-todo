const {Router} = require('express')
const router = Router()

const Notice = require('../models/Notice')

router.post('/add', async(req, res)=>{
    try{
        const {title, todo, timeInfo} = req.body
        
        const notice = new Notice({
            title, todo, timeInfo
        })

        await notice.save()
        res.json(notice)

    }catch(error){
        console.log(error)

    }
})

router.get('/', async (req, res)=> {
    try{
        const notices = await Notice.find()
        res.json(notices)

    } catch(error){
        console.log(error)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const { id } = req.params
        const notice = await Notice.findById(id)
        res.json(notice)

    } catch(error){
        console.log(error)
    }
})

router.post('/update/:id', async (req, res) => {
    try{
        const {id} = req.params
        const todoList = req.body
        let notice
        if(todoList.hasOwnProperty("title")){
            notice = await Notice.updateOne({_id: id}, {$set: {title: todoList.title}})
        }else{
            notice = await Notice.updateOne({_id: id}, {$set: {todo: todoList}})
        }

        res.json(notice)
    } catch(error){
        console.log(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try{
        const {id} = req.params
        const notice = await Notice.deleteOne({_id: id})
        res.json(notice)
    } catch(error){
        console.log("tyt")
        console.log(error)
    }
})

module.exports = router