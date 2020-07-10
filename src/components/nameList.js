import React from 'react'
import Persons from './Person'

function nameList() {
    const Person=[
        {
            id:1,
            name:'Prince',
            age:21,
            skill:'React'
         },
         {
            id:2,
            name:'Prashant',
            age:24,
            skill:'vue'   
         },
         {
            id:3,
            name:'Prakash',
            age:23,
            skill:'angular'
         }
    ]
    const Personlist=Person.map(person =><Persons key={person.id} persontobepassed={person} />)
    return <div>{Personlist}</div>
}

export default nameList
