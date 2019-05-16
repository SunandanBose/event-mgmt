import React from "react";

export default class ErrorBoundary extends React.Component{
    state = { error: null, errorInfo: null };

      componentDidCatch(error, errorInfo) {
        this.setState({
          error: error,
          errorInfo: errorInfo
        });
      }

      goHome(){
        window.location.reload();
      }
      render() {
        if (this.state.errorInfo) {
             window.location.href="http://localhost:3000/login/"
          return (
            <div>
              <h2>Something went wrong.</h2>
              <h3 onClick={this.goHome}>Click here</h3>
            </div>
          );
        }

        return this.props.children;
    }
}