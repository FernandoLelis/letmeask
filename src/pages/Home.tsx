// Importando imagens (webpack)
import illustrationImg from '../assets/images/illustrationImg.svg';


export function Home() {
    return(
        <div>
            <aside>
               <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
               <strong>Crie salas de Q&amp;A ao-vivo </strong>
               <p>Tire as duvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                
            </main>
        </div>
    );
}