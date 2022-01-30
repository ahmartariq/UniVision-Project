import React ,{Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AData from './TempAnn';

const Card  = (props) => {
    return(
        <div style={{backgroundColor : '#F5F5F5' , borderRadius : '10px' , marginRight : '10px' , padding : '1px 10px 1px 10px' , cursor : 'pointer'}}>
         <h4 style={{margin : '10px 5px 8px 5px'}}>{props.heading}</h4>
         <p  style={{marginBottom : '10px'}}>{props.announcement}</p>
        </div>
    )
}
const nAnnouncement = (val) => {
    return (
      <Card
      heading = {val.heading}
      announcement = {val.announcement}
      />
     )
}

export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings} >
            {AData.map(nAnnouncement)}
          </Slider>
        </div>
      );
    }
  }