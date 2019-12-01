import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from "./Title";
export default class Services extends Component {
  state={
    services:[
      {
        icon:<FaCocktail/>,
        title:"Free Cocktails",
        info: "Lorem ipsum dolor....."
      },
      {
        icon:<FaHiking/>,
        title:"Endless Cocktails",
        info: "Lorem ipsum dolor....."
      },
      {
        icon:<FaShuttleVan/>,
        title:"Free Shuttle",
        info: "Lorem ipsum dolor....."
      },
      {
        icon:<FaBeer/>,
        title:"Strongest Beer",
        info: "Lorem ipsum dolor....."
      }
    ]
  };
  render() {
    return (
      <section className="services">
      <Title title="Services" />
      <div className="services-center">
      {this.state.services.map((item, index) => {
      return ( <article key={index} className="service">
      <span>{item.icon}</span>
      <h6>{item.title}</h6>
      <p>{item.title}</p>
      </article>
    );
      })}
      </div>
      </section>
    );
  }
}
