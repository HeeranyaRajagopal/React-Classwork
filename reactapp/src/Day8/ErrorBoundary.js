import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state={
        hasError:false
    }
    static getDerivedStateFromError(error)
    {
        return{
            hasError:true
        }
    }
    componentDidCatch(error,info)
    {
        console.log(error);
        console.log(info)
    }
  render() {
    if(this.state.hasError===true)
    {
    return (
      <div>
        <h1>something went wrong</h1>
      </div>
    )
  }
  return this.props.children;
}
}