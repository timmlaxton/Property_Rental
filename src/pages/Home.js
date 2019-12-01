import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import FeaturedRooms from "../components/FeaturedRooms";
export default function Home() {
  return (
<React.Fragment>
  <Hero>
  <Banner title="luxurious accommodation"
   subtitle="accommodation to fulfill every adventure">
  <Link to="/rooms" className="btn-primary">
  search rentals
   </Link>
  </Banner>
</Hero>
<div className="welcome-text">
<h2>Welcome to Scottish Rentals</h2>
</div>
<div className="welcome-blurb">
<p>Scotland is a country of magnificent beauty, from the isolation of the islands and the wildness of the rugged coastline to the splendour of the mountains and the vibrancy of the towns. With that in mind, it is no surprise that it is such a popular holiday destination, and there are lots of hotels and cottages that will provide a fairly standard base for your trip. But if you’d rather find unique places to stay in Scotland then dig a little deeper and you won’t be disappointed! </p>
</div>
<FeaturedRooms />
</React.Fragment>
  );
}
