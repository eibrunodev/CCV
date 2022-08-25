import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Danca from 'assets/img/Danca.jpg';
import Andre from 'assets/img/Andre.jpg';
import Everaldo from 'assets/img/Everaldo.jpg';
import Davi from 'assets/img/Davi.jpg';
export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard  
                        img={Andre} 
                        title="André Melo"
                    >                       
                        Se você deseja atrair o Reino de Deus à Terra, renuncie os aplausos, trocando-os pela cruz.
                    </StatusCard>
                    <StatusCard
                        img={Everaldo}
                        title="Everaldo"
                    >
                        É Deus, quem promove os encontros.
                    </StatusCard>
                    <StatusCard
                        img={Davi}
                        title="Davi Araújo"
                    >
                        Movidos pela graça do Senhor.
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                      
                        <H4 color="gray">Novidades da CCV</H4>
                        <LeadText color="blueGray">
                            A comunidade cristã vida tem grandes planos que irão impactar a cidade de Luziânia-Go, porque entendemos que a igreja tem um papel importante no meio do município.
                        </LeadText>
                        <LeadText color="blueGray">
                        Em breve teremos projetos que ajudarão na educação tanto financeira quanto profissional implementando nas proximidades da igreja, com isso gerando emprego e pessoas qualificadas, pois uma igreja vai além de religião.
                        </LeadText>
                        <a
                            href="#pablo"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Veja mais sobre
                        </a>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage  alt="Card Image" src={Danca} />
                            <CardBody>
                                <H6 color="gray">Últimas Noticias</H6>
                                <Paragraph color="blueGray">
                                    Face a face abre vagas para novos integrantes.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
