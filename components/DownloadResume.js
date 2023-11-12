import React from 'react';
import Button from 'react-bootstrap/Button';

export default function DownloadResumeButton(){
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'SumikshTrehanResume.pdf'; // Since it is public I can directly access it
        link.download = 'SumikshTrehan_resume.pdf'; // The name you want the downloaded file to have
        link.click();
    };

    return (
        <div className="d-grid gap-5 mt-5">
            <Button onClick={handleDownload} variant="outline-success" size="lg" className="font-weight-bold">
                Download Resume
            </Button>
        </div>
    );
};

// <div class="text-center">
//             <Button onClick={handleDownload} style={{backgroundColor: 'blue', color: 'white', border: 'none'}}>
//                 Download Resume
//             </Button>
//         </div>