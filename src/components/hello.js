import React from 'react'

const hello=(props)=>{
return React.createElement('div',
 {id:"hello",className:"dummyclass"},
 React.createElement('h1',null,'Hello Prince',props.lastname),props.children
)
}

export default hello