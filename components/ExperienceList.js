import { useState } from 'react';
import ExcelitasTech from './Excelitas';
import WonderlandCanada from './Wonderland';
import ClaretAsset from './Claret';
import Button from 'react-bootstrap/Button';
export default function ExperienceList () {
  const [contentIndex, setContentIndex] = useState(0);

  const content = [
    <WonderlandCanada />,
    <ClaretAsset />,
    <ExcelitasTech />
    // Add more content as needed
  ];

  const handleNext = () => {
    setContentIndex((prevIndex) => {
      return (prevIndex + 1) % content.length
    });
  };

  const handlePrev = () => {
    setContentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  };

  return (
    <div>
      <h1>{content[contentIndex]}</h1>
      <Button variant="info" size="lg" onClick={handlePrev}>&larr; Prev</Button>{' '}
      <Button variant="info" size="lg" onClick={handleNext}>Next &rarr;</Button>
    </div>
  );
};



