import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/logo.png';
import { BsFillCalendarCheckFill,BsPeopleFill,BsSignpost2Fill,BsInfoCircleFill} from "react-icons/bs";
import Img1 from 'assets/img/metanoia.png';
import Img2 from 'assets/img/Promessa.jpg';
import Img3 from 'assets/img/Arca.jpeg';
import Img4 from 'assets/img/Alianca.jpeg';
import Event1 from 'assets/img/piquenique.png';
import Event2 from 'assets/img/casais.png';
import Event3 from 'assets/img/Culto.jpeg';
import Event4 from 'assets/img/oracao.png';

import Slider from './Slider';
export default function Content() {
    const date =  new Date();
    
    return (
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-40 -mt-20">
                                        <Image
                                            src={ProfilePicture}
                                            alt="Profile picture"
                                            raised
                                            rounded
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                                <Button color="lightBlue" ripple="light">
                                    Conntect
                                </Button>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            05
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Células
                                        </span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            4
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Cultos
                                        </span>
                                    </div>
                                    <div className="lg:mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            89
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Membros
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center my-8">
                            <div className="flex items-center justify-center gap-2">
                                <BsFillCalendarCheckFill className="lg:text-3xl"/>
                                <H3 color="gray">Agenda CCV</H3>
                            </div>
                            
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                Luziania-Go, {date.getFullYear()} 
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                <BsPeopleFill className="lg:text-4xl"/>
                                <h1 className="lg:text-4xl">Células</h1>                                
                            </div>
                            <div className="mb-2 flex-col md:flex-row text-gray-700 flex items-center justify-center gap-2">
                                <div>
                                    <Slider img={Img1}/>
                                    <a className="flex mt-2" target="_blank" href="https://goo.gl/maps/kjYrZnChWVDxL1Uk8"><Icon name="place" size="xl"/>Localização - Você é bem-vindo!</a>
                                </div>
                                <div>
                                    <Slider img={Img2}/>
                                    <a className="flex mt-2" target="_blank" href="https://goo.gl/maps/1UzsAjVFeFcxVJTc7"><Icon name="place" size="xl" />Localização - Você é bem-vindo!</a>
                                </div>
                                <div>
                                    <Slider img={Img3}/>
                                    <a className="flex mt-2" target="_blank" href="https://goo.gl/maps/kjYrZnChWVDxL1Uk8"><Icon name="place" size="xl" />Localização - Você é bem-vindo!</a>
                                </div>
                                <div>
                                    <Slider img={Img4}/>
                                    <a className="flex mt-2" target="_blank" href="https://goo.gl/maps/kjYrZnChWVDxL1Uk8"><Icon name="place" size="xl" />Localização - Você é bem-vindo!</a>
                                </div>                               
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                <BsSignpost2Fill className="lg:text-4xl"/>
                                <h1 className="lg:text-4xl">Eventos</h1>                                
                            </div>
                            <div className="mb-2 flex-col md:flex-row text-gray-700 flex items-center justify-center gap-2">
                                <div>
                                    <Slider img={Event1}/>
                                    <a className="flex items-center justify-center mt-2" target="_blank" href="https://api.whatsapp.com/send?phone=556196663814"><BsInfoCircleFill/>Saiba-mais</a>
                                </div>
                                <div>
                                    <Slider img={Event2}/>
                                    <a className="flex items-center justify-center mt-2" target="_blank" href="https://api.whatsapp.com/send?phone=556196663814"><BsInfoCircleFill/>Saiba-mais</a>
                                </div>
                                <div>
                                    <Slider img={Event3}/>
                                    <a className="flex items-center justify-center mt-2" target="_blank" href="https://api.whatsapp.com/send?phone=556196663814"><BsInfoCircleFill/>Saiba-mais</a>
                                </div>
                                <div>
                                    <Slider img={Event4}/>
                                    <a className="flex items-center justify-center mt-2" target="_blank" href="https://api.whatsapp.com/send?phone=556196663814"><BsInfoCircleFill/>Saiba-mais</a>
                                </div>                               
                            </div>
                        </div>                      

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                        An artist of considerable range, Jenna
                                        the name taken by Melbourne-raised,
                                        Brooklyn-based Nick Murphy writes,
                                        performs and records all of his own
                                        music, giving it a warm, intimate feel
                                        with a solid groove structure. An artist
                                        of considerable range.
                                    </LeadText>
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <Button
                                            color="lightBlue"
                                            buttonType="link"
                                            ripple="dark"
                                        >
                                            Show more
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
