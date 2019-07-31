import React from "react";
import Boton from './Button'



class BotonContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.handleCallback = this.handleCallback.bind(this)
  }



  handleCallback(data) {
    console.log(data)
    this.setState({
      visible: !this.state.visible
    });

  }
  render() {

    return (

      <div>
        <Boton title="esto es un titulo" handleCallback={this.handleCallback} />

        {this.state.visible && (
          <div>
            <span> se muestra este span</span>
          </div>
        )
        }
      </div>

    );
  }
}

export default BotonContainer;
