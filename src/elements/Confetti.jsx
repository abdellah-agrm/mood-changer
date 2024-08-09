import React, { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

const Confetti = () => {
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    const authAction = localStorage.getItem('authAction');
    if (authAction) {
      setIsExploding(true);
      localStorage.removeItem('authAction');
    }
  }, []);

  return (
    <>
      {isExploding && (
        <>
          <div style={{ position: 'fixed', top: 0, left: 0 }}>
            <ConfettiExplosion particleCount={250} />
          </div>
          <div style={{ position: 'fixed', top: 0, right: 0 }}>
            <ConfettiExplosion particleCount={250} />
          </div>
        </>
      )}
    </>
  );
};

export default Confetti;