import Overall from '../components/Overall';
import NameBar from '../components/NameBar';
import DownloadResume from '../components/DownloadResume';

export default function Home() {
  // const handleButtonClick = () => {
  //   alert('Button clicked!');
  // };

  // useEffect(() => {
  //   const audio = new Audio('/path/to/audio/file.mp3');
  //   audio.play();
  // }, []);

  return (
    <>
      <main className="flex min-h-screen bg-gray-100">
        <NameBar />
        <Overall /> {/*Card layout. Can push to education page from there*/}
        <DownloadResume />
      </main>
    </>
  );
}
