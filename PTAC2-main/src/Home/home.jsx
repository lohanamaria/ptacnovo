import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>FESTIVAL DE MÚSICA</h2>
      <p class="paragrafo">Explore e descubra os melhores artistas musicais:</p>
      <Link to="/musicas">Ver todas as músicas</Link>
      <div>
        <img
          class="container2"
          src=""
          alt="Imagem de um festival de música"
        />
      </div>
      <br />
      <br />
      <h3 class="home">Música</h3>
      <p class="card-text">
        A música é uma forma de expressão artística que transcende barreiras e
        idiomas. Ela tem o poder de evocar emoções, contar histórias e unir
        pessoas. Através da combinação de ritmo, melodia e harmonia, a música
        proporciona uma experiência única.
      </p>
<br>  
</br>
      <h3>Gêneros Musicais</h3>
      <p>
        A música abrange uma ampla variedade de gêneros, desde clássica e jazz
        até rock, pop, eletrônica e hip-hop. Cada gênero tem suas próprias
        características e influências culturais, proporcionando uma infinidade de
        opções para os amantes da música.
      </p>
      <div class="box">
        <div class="row">
          <img
            src=""
            alt="Imagem de uma banda de rock"
          />
          <p>
            O rock é um gênero musical que se destaca por suas guitarras
            elétricas e batidas poderosas. Bandas icônicas como The Beatles e
            Led Zeppelin deixaram uma marca duradoura na história da música.
          </p>
        </div>
      </div>
      <div class="box">
        <div class="row">
          <img
            src=""
            alt="Imagem de um artista de hip-hop"
          />
          <p>
            O hip-hop é uma forma de expressão artística que se originou nas
            comunidades urbanas. Artistas como Tupac Shakur e Eminem são figuras
            influentes no mundo do hip-hop.
          </p>
        </div>
      </div>
      <div class="box">
        <div class="row">
          <img
            src=""
            alt="Imagem de música eletrônica"
          />
          <p>
            A música eletrônica é conhecida por suas batidas pulsantes e
            sintetizadores. Festivais de música eletrônica como Tomorrowland
            atraem fãs de todo o mundo.
          </p>
        </div>
      </div>
    </div>
  );
}