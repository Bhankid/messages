import React from 'react';
import CommunityHeader from './ComunityHeader';
import Community from './Community';

const CommunitySection = () => {
  return (
    <div>
      {/* Community Header */}
      <CommunityHeader />

      {/* Community */}
      <Community />
    </div>
  );
};

export default CommunitySection;