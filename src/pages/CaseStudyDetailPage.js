import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CaseStudyPage from '../components/CaseStudyPage';

const CaseStudyDetailPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main style={{ paddingTop: '112px' }}>
      <CaseStudyPage id={id} />
    </main>
  );
};

export default CaseStudyDetailPage;