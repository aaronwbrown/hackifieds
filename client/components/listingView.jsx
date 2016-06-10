import FilterView from './filterView.jsx';
import ListEntryView from './listEntryView.jsx';
import helpers from '../lib/helpers.js';

class ListingView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 'rent',
      listings: [],
    };
  }

  componentWillMount() {
    helpers.getListings(this.props.route.type, data => this.setState({listings: data}) )
  }

  componentWillReceiveProps(nextProps, filters) {
    console.log('receiving props',nextProps.location.query.type);
    this.setState({
      page: nextProps.location.query.type
    });
    if (!filters) {
      helpers.getListings(nextProps.location.query.type, data => this.setState({listings: data}))
    } else {
      this.setState(listings: filters);
    }
  }

  // ****** FILTERING ****** \\
  handleFilterItemClick (data) {
    // helpers.getFilteredResults(data, filters => console.log('filters', filters));
    helpers.getFilteredResults(data, filters => componentWillReceiveProps(null, filters));

  }

  render () {
    return (
      <div>
        <FilterView page={this.state.page} handleClick={this.handleFilterItemClick} />
        {this.state.listings.map((listing, i) =>
          <ListEntryView key={i} listing={listing} />
        )}
      </div>
    );
  }
};

export default ListingView;
