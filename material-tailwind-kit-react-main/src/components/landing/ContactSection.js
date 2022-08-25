import Title from 'components/landing/Title';
import ContactCard from 'components/landing/ContactCard';
import Form from 'components/landing/Form';

export default function ContactSection() {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <Title heading="Nossa Missão (encargo)">
                Nossa missão é edificar uma Igreja de vencedores onde cada membro é um ministro e cada casa uma extensão da Igreja, conquistando assim a nossa geração para Cristo, através das células que se multiplicam e ser uma grande igreja missionária, fiel a Deus e a Bíblia e comprometida com a evangelização.
                </Title>

                <div className="flex flex-wrap -mt-12 justify-center">
                    <ContactCard icon="stars" title="Crenças básicas">
                    º Cremos que a Bíblia é inspirada e inerrante, a única regra infalível de fé e prática.
                    <br/>º Cremos num único Deus Criador e Sustentador de todas as coisas, o qual subsiste em três pessoas: Deus Pai, Deus Filho e Deus Espírito Santo.

                    </ContactCard>
                    <ContactCard icon="insert_chart" title="Crenças básicas">
                    º Cremos na total depravação da natureza humana, a qual impossibilita o ser humano de realizar a sua própria salvação.
                    <br/>º Cremos que Jesus Cristo é o único meio de salvação para o ser humano. A salvação é pela graça por meio da fé (Ef. 2:8).
                    </ContactCard>
                    <ContactCard icon="launch" title="Crenças básicas">
                    º Cremos que somente o evangelho por intermédio da ação do Espírito Santo tem poder para salvar e transformar vidas. 
                    º Cremos que a igreja é composta por todas as pessoas que foram salvas pela fé em Jesus Cristo e santificadas pelo Espírito Santo.

                    </ContactCard>
                </div>

                {/* <Form /> */}
            </div>
        </section>
    );
}
