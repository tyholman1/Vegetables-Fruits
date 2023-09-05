const React = require('react')

class Show extends React.Component {
   render () {
    const vegetables = this.props.vegetables
    return (
      <div>
        <h1>Show Veggies Page</h1>
        The {vegetables.name} is {vegetables.color}.
        And {vegetables.puns}
        <img src={vegetables.image} alt=""/>
     </div>
     );
    }
 }
 module.exports  = Show;