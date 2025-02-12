'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open("ebuka1017/portfolio/public/files/ISAAC_OKWUZI'S_RESUME-1.pdf", '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
