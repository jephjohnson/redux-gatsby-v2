import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { increaseCounter, decreaseCounter, indexCounter} from "../../actions/counterAction"

const mapStateToProps = (state) => ({ count: state.counter.count });
const mapDispatchToProps = (dispatch) => bindActionCreators({increaseCounter, decreaseCounter, indexCounter}, dispatch)

// const Counter = ({ count, increment }) => (
//   <div>
//     <p>Count: {count}</p>
//     <button onClick={increment}>Increment</button>
//   </div>
// )

// Counter.propTypes = {
//   count: PropTypes.number.isRequired,
//   increment: PropTypes.func.isRequired,
// }

// const mapStateToProps = ({ count }) => {
//   return { count }
// }

// const mapDispatchToProps = dispatch => {
//   return { increment: () => dispatch({ type: `INCREMENT` }) }
// }
class Counter extends React.Component {
  
  onDotClick () {   
    this.props.increaseCounter();
  }

  render () {
    const { count } = this.props;
    console.log(this.props)
    return (    
      <div>
        <p>Count: {count}</p>
        <button onClick={this.onDotClick.bind(this)}>Increment</button>
      </div>
    )
  }
  
}

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h3>Redux example</h3>
        </Link>
        <ConnectedCounter />
        <ul>
          <li>
            <Link to="/a/">a</Link>
          </li>
          <li>
            <Link to="/b/">b</Link>
          </li>
          <li>
            <Link to="/c/">c</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default DefaultLayout
