

import Image from '@material-tailwind/react/Image';


export default function Slider ({img}) {

    return (
        <>
            <Image className='w-80 hover:animate-passa' src={img}/>
        </>
    )
}