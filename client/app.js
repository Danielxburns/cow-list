class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bold: false
    };
    this.onListItemIn = this.onListItemIn.bind(this);
    this.onListItemOut = this.onListItemOut.bind(this);
  }

  onListItemIn() {
    this.setState({
      bold: true
    });
  }

  onListItemOut() {
    this.setState({
      bold: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };

    return(
      <li style={style} onMouseEnter={this.onListItemIn}
      onMouseLeave={this.onListItemOut}>{this.props.item}</li>
    )
  }
}

var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <Groceries items={['eggs', 'bacon', 'juice']}/>
  </div>
);

var Groceries = (props) => (
  <ul>
    {props.items.map(item => <GroceryListItem item={item} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));
