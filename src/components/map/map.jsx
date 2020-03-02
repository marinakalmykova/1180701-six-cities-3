import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {CITY, ZOOM} from "../../const.js";

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = createRef();
  }

  componentDidMount() {
    const {offers} = this.props;
    const map = leaflet.map(this.map.current, {
      center: CITY,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    map.setView(CITY, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.map(({coords}) => {
      leaflet
        .marker(coords, {icon})
        .addTo(map);
    });
  }

  componentWillUnmount() {
    this.map.current = null;
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}} ref = {this.map}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.oneOf([`Apartment`, `Private room`]),
        rating: PropTypes.string.isRequired,
        isBookmark: PropTypes.bool,
        isPremium: PropTypes.bool,
        image: PropTypes.string,
        coords: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      })
  ).isRequired,
};
export default Map;

