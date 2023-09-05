const React = require("react");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <div>
        <h1>Veggies Index Page</h1>
        <ul>
          {vegetables.map((vegetables, i) => {
            return (
              <li>
                The <a href={`/vegetables/${i}`}>{vegetables.name}</a> is {vegetables.color}{" "}
                <br></br>
                {vegetables.pun}
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    ); 
  }
}

module.exports = Index;