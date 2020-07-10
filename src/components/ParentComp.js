import React, { PureComponent} from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

 class ParentComp extends PureComponent {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"Prince"
         }
     }
     componentDidMount(){
         setInterval(()=>{
            this.setState({
                name:"Prince"
            })
         },2000)
     }
    render() {
        console.log("parent Render")
        return (
            <div>
              Parent Component
              <RegComp name={this.state.name} />
              <PureComp nmae={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
