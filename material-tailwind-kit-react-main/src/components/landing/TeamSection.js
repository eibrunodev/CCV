import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/Andre2.jpg';
import Image2 from 'assets/img/Davi2.jpg';
import Image3 from 'assets/img/Aline.jpg';
import Image4 from 'assets/img/Everaldo2.jpg';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Amar e Servir">
                Não importa quem você é ou de onde você vem, há sempre um lugar para você em nossa família (CCV)
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="Pastor Andre Mélo"
                        position="Redes sociais"
                        Instalink="https://www.instagram.com/andresouza8614/"
                        link="https://www.facebook.com/LuzianiaComunidadeCristaVida"                        
                    />
                    <TeamCard
                        img={Image2}
                        name="Pastor Davi Araújo"
                        position="Redes sociais"
                        Instalink="https://www.instagram.com/pr.daviaraujo/"
                        link="https://www.facebook.com/Pr.DaviAraujo"
                    />
                    <TeamCard
                        img={Image3}
                        name="Pastora Aline Mélo"
                        position="Redes sociais"
                        Instalink="https://www.instagram.com/alineehelenice/"
                        link="https://www.facebook.com/profile.php?id=100008340756218"
                    />
                    <TeamCard
                        img={Image4}
                        name="Everaldo Alcatara"
                        position="Redes sociais"
                        Instalink="https://www.instagram.com/ejar_alcantara73/"  
                        link="https://www.facebook.com/LuzianiaComunidadeCristaVida"                       
                    />
                </div>
            </div>
        </section>
    );
}
