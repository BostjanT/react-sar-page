import React from "react";
import "./RescueDog.css";
function RescueDog() {
  console.log(window.location.pathname);

  return (
    <div>
      {/* END OF BANNER*/}
      {/* end of header section*/}
      <section className="sar-dogs-sec">
        <div className="container">
            <div class="naslov">REŠEVALNI PES</div>
          <div className="row">
            <div className="col-10 col-md-6 col-lg-12 mx-auto py-5">
              <p>
                Prvi zapisi o uporabi reševalnega psa segajo v leto 1707, ko
                menihi švicarskega samostana s svojimi psi pasme bernardinec
                iščejo in rešujejo obnemogle pohodnike na prelazu St. Bernard. V
                Sloveniji sta bila pionirja Dušan Škrlep in Marjan Perko, ko
                leta 1952 v Tamarju organizirata prvi lavisnki tečaj. Prva
                reševalna akcija z reševalnim psom steče leta 1983, ko v
                hrastniškem rudniku blato zalije skupino rudarjev na globini
                450m. Reševalna psička Ajda je po napornem enournem spustu in po
                polurnem iskanju nakazalo mesto trupla ponesrečenega rudarja.
                <br />
                <br />
                Za reševalnega psa so najbolj primerne pasme srednje velikosti,
                psi morajo biti v dobri telesni kondiciji, po naravi umirjeni
                ter psihično stabilni. Ti psi ne smejo biti agresivni do ljudi
                in drugih živali. Igra jim mora biti največje veselje. V klubu
                vodnikov reševalnih psov Kranj najbolj prevladujeta nemški
                kratkodlaki ptičar ter zlati prinašalec. Sledijo jima
                labradorci, ovčarji ter mešanci.
                <br />
                <br />
                Vodnik in pes se usposabljata v skladu z mednarodnimi pravilniki
                ki veljajo za vodnike reševalnih psov. Vodnik pa svoje
                usposobljenosti nadgradi še:
                <br />
                <br />
                Znanje vodnika se pridobiva na tečajih in seminarjih, ter
                preveri z izpiti.
              </p>
              <ul>
                <li>70 urni tečaj prve pomoči</li>
                <li> tečaj prve veterinarske pomoči</li>
                <li> tečaj vrvne tehnike</li>
                <li>tečaj orientacije</li>
                <li>tečaj o nevarnosti v gorah</li>
              </ul>
              Usposabljanje vodnika in psa poteka
              <ul>
                <li>tedenske vaje v skupini</li>
                <li>tabori</li>
                <li>akcijske vaje</li>
                <li>lavinski tečaji</li>
              </ul>
              Preverjanje vodnika in psa
              <ul>
                <li>
                  nacionalni izpiti (ruševina, iskanje pogrešanih, lavina,
                  stopnje A in B)
                </li>
                <li>mednarodni izpiti</li>
                <li>tekmovanja in svetovno prvenstvo</li>
              </ul>
              Vodniki reševalnih psov, ki so uspešni na regijskih preizkušnjah
              se uvrstijo v intervencijsko enoto in sodelujejo v resničnih
              akcijah iskanja.
              <p />
              <div className="row">
                <div className="sar-item">
                  <img
                    src="img/aboutImg/about-1.jpg"
                    className="img-fluid sar-dogs"
                    alt="img"
                  />
                </div>
                <div className="col-10 col-md-6 col-lg-6 sar-item">
                  <img
                    src="img/aboutImg/about-2.jpg"
                    className="img-fluid sar-dogs"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RescueDog;
