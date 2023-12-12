import React,{Component} from 'react'
export default class DefaultProps extends Component
{
    render()
    {
        return(
            <div>
                <h1>Default Props</h1>
                <h1>Default value is {this.props.name}</h1>
            </div>
        )
    }
}
DefaultProps.defaultProps={
    name:"SKCT"
}