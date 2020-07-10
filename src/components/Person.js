import React from 'react'

function Person({persontobepassed}) {
    return (
        <div>
            <h2>Hi I Am {persontobepassed.name} {persontobepassed.age} years old and i know{persontobepassed.skill}</h2>
        </div>
    )
}

export default Person
