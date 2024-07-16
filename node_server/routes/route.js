const express = require('express')
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjcectId
const Employee = require('../models/employee')

//create rest apis
//base_path: http://localhost:3032/employees

//get single api
router.get('/:id', (req,res) => {

    if(ObjectId.isValid(req.params.id)){
        Employee.findById(req.params.id,(err,doc) =>{
            if(err) throw err
            else{
                res.send(doc)
            }
        })
    }
    else{
        return res.status(400).send('no recored found' + req.params.id)
    }
    // Employee.find((err,doc) => {
    //     if(err) throw err
    //     else{
    //         res.send(doc)
    //     }
    // })

})

//get api
router.get('/', (req,res) => {
    Employee.find((err,doc) => {
        if(err) throw err
        else{
            res.send(doc)
        }
    })
})

//post Api
router.post('/', (req,res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept,
    });

    emp.save((err,doc) => {
        if (err) throw err
        else{
            res.send(doc)
        }
    })
})

//put api
router.put('/:id', (req,res) => {
    
    if(ObjectId.isValid(req.params.id)){
        let emp ={
            name: req.body.name,
            position: req.body.position,
            dept: req.body.dept,
        };
        Employee.findByIdAndUpdate(req.params.id,{$set : emp},{new : true}, (err,doc) =>{
            if(err) throw err
            else{
                res.send(doc)
            }
        })
    }
    else{
        return res.status(400).send('no recored found' + req.params.id)
    }
})

//delete API
router.delete('/:id', (req,res) => {

    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndRemove(req.params.id,(err,doc) =>{
            if(err) throw err
            else{
                res.send(doc)
            }
        })
    }
    else{
        return res.status(400).send('no recored found' + req.params.id)
    }
})

module.exports = router