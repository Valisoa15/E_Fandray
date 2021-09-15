import React from 'react';
import "./../styles/Ambony.css";
import Sary from "./../assets/leva1.jpg";







const Ambony = () => {
    return (
    <div>
        <div className="test">
            <h1 id="titre">E-fandray</h1>
            <div className="test1" > 
                <a href="go" className="lien"> MESSAGE </a>
                <a href="go1" className="lien"> PARAMETRES</a>

            
            </div>

        </div>
        
        <div className="parent">
            <br></br>
             <div className="parent1">
                 <br></br>
                    <div className="recherche">
                        <input type="text" placeholder="             Recherche" id="recherche" />
                    </div>
                 
                  <div className="contenu1">
                      <br></br>
                        <div className="sary1">
                            <img src={Sary} alt=" Voiture" width="50" height="50"  id="image"/>
                        </div>
                        <div className="message11">
                                <a href="./lien">Valisoa Rak</a>
                                <p> Mankasitraka indrindra </p>
                        </div>
                  </div>

                  <div className="contenu1">
                      <br></br>
                        <div className="sary1">
                            <img src={Sary} alt=" Voiture" width="50" height="50"  id="image"/>
                        </div>
                        <div className="message1">
                                <a href="./ig">Groupe ispm</a>
                                <p> Bonne chance</p>
                        </div>
                  </div>

                  
                  <div className="contenu1">
                      <br></br>
                        <div className="sary1">
                            <img src={Sary} alt=" Voiture" width="50" height="50"  id="image"/>
                        </div>
                        <div className="message11">
                                <a href="./lien">IGGLIA 3 ispm</a>
                                <p> Emploi du temps Mercredi</p>
                        </div>
                  </div>

                  
                  <div className="contenu1">
                      <br></br>
                        <div className="sary1">
                            <img src={Sary} alt=" Voiture" width="50" height="50"  id="image"/>
                        </div>
                        <div className="message1">
                                <a href="./lien">Leva SOLOFO</a>
                                <p>Bonjour</p>
                        </div>
                  </div>
                  
                  <div className="contenu1">
                      <br></br>
                        <div className="sary1">
                            <img src={Sary} alt=" Voiture" width="50" height="50"  id="image"/>
                        </div>
                        <div className="message11">
                                <a href="./lien">Jhonny</a>
                                <p> Good bye !</p>
                        </div>
                  </div>

                  <div className="contenu1">
                      <br></br>
                        <div className="sary1">
                            <img src={Sary} alt=" Voiture" width="50" height="50"  id="image"/>
                        </div>
                        <div className="message1">
                                <a href="./lien">Famille</a>
                                <p> Ok ,D'accord</p>
                        </div>
                  </div>
                  
                
             </div>
             <div className="parent2">
                 <div className="encours" >
                     <div className="contenu2">
                    <div className="sary1">
                            <img src={Sary} alt=" Voiture" width="50" height="50"  id="image"/>
                        </div>
                        <div className="message11">
                                <h3>Valisoa Rak</h3>
                                <p>En ligne</p>
                        </div>
                        </div>
                 </div>
             <br></br><br></br><br></br><br></br>
                    
                    <div className="fils1">
                        <p className="send">Bonjour Tompoko! <br/> izaho ilay niantso anao teo ijery ilay fiara
                        </p>
                    </div>
                    <br></br><br></br><br></br><br></br><br></br>
                    
                    <div className="fils2">
                    <p className="send">Bonjour ,Eny tompoko ,miandry anao eto aho<br/> mijoro eto amin'ilay fotoana
                        </p>
                    </div>
                    <br></br><br></br><br></br><br></br><br></br>
                    <div className="fils1">
                    <p className="send">Mankasitraka indrindra tamin'ny fandraisana <br/> fa mifampiresaka eo ihany
                        </p>
                    </div>
                    <br></br><br></br><br></br><br></br><br></br>

                    <div className="fils2">
                    <p className="send">Tsy misy isaorna Tompoko<br/> manaraka indray
                        </p>
                    </div>
                    <br></br><br></br><br></br><br></br><br></br><br></br>

                    <div>
                        <input type="text" placeholder="Ecrire un message"  />
                        <input type="submit" value="envoyer" id="envoyer">
                        </input>
                    </div>
                    
                    
             </div>
        </div>

        <div className="bas">
            <div>
                <h5 id="nom">Valisoa Christianot Rakotonirainy IGGLIA3 n°27</h5>
            </div>
                
        </div>
    </div>
    );
};

export default Ambony;