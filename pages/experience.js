import Image from 'next/image';
import ExperienceList from '../components/ExperienceList';
export default function experience() {
    return (
        <>
        <div style={{ height: '40vh', width: '100vw', position: 'relative' }}>
            <Image
                src="/experiencebg.png"
                alt="Picture of the author"
                layout="fill" // fills whole container
                objectFit="cover" // maintain aspect ratio
            />
            
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontWeight: 'bold', textShadow: '2px 2px 4px #000000' }}>
                <p  style= {{fontSize: '2rem', color: '#ffffff'}}>Hello, I am <br/></p>
                <p>Sumiksh Trehan <br/ > </p>
                <p> Explore my experiences...</p>
                <style jsx>{`
                p {
                    font-size: 4rem;
                    color: #e6e600;
                }

                @media (max-width: 1900px) {
                    p {
                        font-size: 3rem;
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
        </div>
        <ExperienceList />
        </>
    );
}
