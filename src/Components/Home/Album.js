import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import { Card, CardDeck, ProgressBar, Container, Row } from "react-bootstrap";

import { connect } from 'react-redux';

import "../../App.css";
import { getDataAlbum } from '../../Action/CategoryAction'
import { MdAlbum } from "react-icons/md";
import Kontainer from "./Container";

function Album(props) {

  useEffect(() => {
    props.getDataAlbum()
  }, []);
  const approve = props.album.filter(album => album.Status === "approve")
  return (
    <div>
      <Kontainer />
         <Row className="row-category">
            <Card className="card-category">
               <Link to="/konser" style={{ textDecoration: "none" }}>
                  <Card.Body>
                  <center>
                     <MdAlbum className="icon" />
                  </center>
                  <Card.Title className="text">Album</Card.Title>
                  </Card.Body>
               </Link>
            </Card>
         </Row>
      <Container>
        {/* <h1 className="text-title">Album</h1>
        <h5 className="title-description">
          Mulai Donasi untuk Musisi Idola Kamu.
        </h5> */}
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
                                    <p><ProgressBar now={100 / items.Nominal * items.Jumlah}
                                       className="progress-bar-project" />
                                    </p>
                                    <h5 className="text-dark">Terkumpul Rp {items.Jumlah} dari Rp {items.Nominal}</h5>
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
    album: props.getCategory.album
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getDataAlbum: () => dispatch(getDataAlbum())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
