import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import { Card, CardDeck, ProgressBar, Container } from "react-bootstrap";

import { connect } from 'react-redux';

import "../../App.css";
import { getDataKonser } from '../../Action/CategoryAction'

function Konser(props) {

   useEffect(() => {
      props.getDataKonser()
   }, []);
   const approve = props.konser.filter(konser => konser.Status === "approve")
   console.log(approve, "approve");

   return (
      <div>
         <Container>
            <h1 className="text-title">Konser</h1>
            <h5 className="title-description">
               Mulai Donasi untuk Musisi Idola Kamu.
        </h5>
        <div className="container">
               <CardDeck className="card-deck">
                  {approve.map((items) => {
                     return (
                        <div className="col-lg-4">
                           <Card className="card-galangdana">
                              <Link to="/details-charity">
                                 <Card.Img className="card-img" variant="top" src={items.Url} style={{ width: "100%", height: "200px"}} />
                                 <Card.Body>
                                    <h4 className="text-dark">{items.Judul}</h4>
                                    <span className="text-muted">{items.Nama} - {items.Organisasi}</span>
                                    <p><ProgressBar now={100 / items.Nominal * 0}
                                       className="progress-bar-project" />
                                    </p>
                                    <h5 className="text-dark">Terkumpul Rp {items.Nominal} dari Rp {items.Nominal}</h5>
                                 </Card.Body>
                                 <Card.Footer>
                                    <small className="text-dark">
                                       {items.Waktu_start} - {items.Waktu_end}
                                    </small>
                                 </Card.Footer>
                              </Link>
                           </Card>
                           <br />
                        </div>
                     )
                  })}
               </CardDeck>
            </div>
         </Container>
      </div>
   );
}

const mapStateToProps = (props) => {
   return {
      konser: props.getCategory.konser
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      getDataKonser: () => dispatch(getDataKonser())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Konser);
