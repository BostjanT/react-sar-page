import React from "react";
import "./css/Dogs.css";

function RescueDogs() {
  return (
    <section id="resevalni-psi">
      <div className="container-fluid home-filler">
        <div className="sar-item">
          <img
            src={"../img/aboutImg/about-1.jpg"}
            alt="preview"
            className="img-fluid sar-dogs1"
          />
        </div>
        <div className="dogs-text">
          <h4 className="dogs-text-bold">reševalni psi</h4>
          <p>
            Prvi zapisi o uporabi reševalnega psa segajo v leto 1707, ko menihi
            švicarskega samostana s svojimi psi pasme bernardinec iščejo in
            rešujejo obnemogle pohodnike na prelazu St. Bernard. V Sloveniji sta
            bila pionirja Dušan Škrlep in Marjan Perko, ko leta 1952 v Tamarju
            organizirata prvi lavinski tečaj. Prva reševalna akcija z reševalnim
            psom steče leta 1983, ko v hrastniškem rudniku blato zalije skupino
            rudarjev na globini 450m. Reševalna psička Ajda je po napornem
            enournem spustu in po polurnem iskanju nakazalo mesto trupla
            ponesrečenega rudarja.
          </p>
          <a
            href="/resevalni-psi"
            className="text-weight-bold text-capitalize collection-link"
          >
            Preberite več
          </a>
          <div className="collection-underline" />
        </div>
        <div className="sar-item">
          <img
            src={"../img/aboutImg/about-1.jpg"}
            alt="preview"
            className="img-fluid sar-dogs"
          />
        </div>
      </div>
    </section>
  );
}

export default RescueDogs;
