//   - `justify-content-center`: This is another Bootstrap class that centers the element horizontally within its container.
//   - `align-items-center`: This is a Bootstrap class that centers the element vertically within its container.
//   - `text-warning`: This is a Bootstrap class that sets the text color to yellow.
//   - `bg-dark`: This is a Bootstrap class that sets the background color to dark gray.


import { useState, useEffect } from 'react';
import Image from 'next/image';


export default function NameBar () {
    const [textIndex, setTextIndex] = useState(0);
    const textArray = ["Developer", "Analyst", "Programmer"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            // console.log(textIndex, (textIndex + 1) % textArray.length)
            setTextIndex((textIndex + 1) % textArray.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [textIndex]);

    return (
        <div style={{ height: '38vh', width: '100vw', position: 'relative' }}>
            <Image src="/landingpg.jpg" alt="Picture of the author"
                layout="fill" // fills whole container
                objectFit="cover" // maintain aspect ratio
            />

            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontWeight: 'bold', textShadow: '2px 2px 4px #000000' }}>
                <p > Crafting Digital Worlds  -<br /> Sumiksh Trehan  <br />{textArray[textIndex]}</p>
            </div>
            <style jsx>{`
                p {
                    font-size: 3rem;
                    color: #e6e600;
                }

                @media (max-width: 1110px) {
                    p {
                        font-size: 2rem;
                        color: #e6e600;
                    }
                }

                @media (max-width: 735px) {
                    p {
                        font-size: 2rem;
                        color: #e6e600;
                    }
                }
            `}</style>
        </div>
    )
}
