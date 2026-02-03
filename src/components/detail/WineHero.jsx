import React from 'react';

const WineHero = ({ wine }) => {
  const hasDiscount = wine.discountPercent > 0;

  return (
    <div style={{ 
      position: 'relative',
      background: 'linear-gradient(180deg, #e5e5e5 0%, #ffffff 100%)',
      width: '100%',
      paddingBottom: '20px'
    }}>
      {/* Header Icons */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        right: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 20
      }}>
        {/* Back Button */}
        <button style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'white',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          fontSize: '20px',
          cursor: 'pointer'
        }}>
          ←
        </button>

        {/* Right Icons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {/* Share Button */}
          <button style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'white',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            fontSize: '20px',
            cursor: 'pointer'
          }}>
            ↑
          </button>

          {/* Cart Button */}
          <button style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'white',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            position: 'relative',
            cursor: 'pointer'
          }}>
            🛒
            <span style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              backgroundColor: '#DC3545',
              color: 'white',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              fontSize: '12px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>1</span>
          </button>
        </div>
      </div>

      {/* Wine Bottle Container */}
      <div style={{ 
        position: 'relative',
        height: '550px',
        width: '100%',
        paddingTop: '60px'
      }}>
        
    {/* Wine Bottle Image - Left aligned */}
<div style={{
  position: 'absolute',
  top: '60px',
  left: '0',
  right: '0',
  bottom: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',  // Changed from 'center'
  paddingLeft: '60px'  // Added padding to push it from edge
}}>
          <img
            src="/images/wines/default-wine.jpg"
            alt={wine.name}
            style={{
              height: '100%',
              width: 'auto',
              maxHeight: '480px',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Discount Badge - Bottom left of bottle */}
        {hasDiscount && (
          <div style={{
            position: 'absolute',
            bottom: '180px',
            left: '40px',
            backgroundColor: '#000000',
            color: 'white',
            borderRadius: '50%',
            width: '90px',
            height: '90px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            zIndex: 10
          }}>
            <span style={{ fontSize: '14px', fontWeight: '500', marginBottom: '2px' }}>save</span>
            <span style={{ fontSize: '32px', fontWeight: 'bold', lineHeight: '1' }}>{wine.discountPercent}%</span>
          </div>
        )}

        {/* Rating Bubble - Top right */}
        <div style={{
          position: 'absolute',
          top: '120px',
          right: '28px',
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '20px 24px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
          zIndex: 10,
          textAlign: 'center',
          minWidth: '120px'
        }}>
          <div style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            lineHeight: '1',
            color: '#1a1a1a',
            marginBottom: '8px'
          }}>
            {wine.rating}
          </div>
          <div style={{ 
            fontSize: '18px', 
            marginBottom: '6px',
            letterSpacing: '1px'
          }}>
            ⭐⭐⭐⭐<span style={{ opacity: 0.3 }}>⭐</span>
          </div>
          <p style={{ 
            fontSize: '13px', 
            color: '#666', 
            margin: 0, 
            whiteSpace: 'nowrap',
            fontWeight: '400'
          }}>
            {wine.reviewCount} ratings
          </p>
        </div>

        {/* Match Badge - Below bottle, centered */}
        {wine.matchScore >= 90 && (
          <div style={{
            position: 'absolute',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(90deg, #fef3c7 0%, #fce7f3 50%, #fef3c7 100%)',
            borderRadius: '9999px',
            padding: '12px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            zIndex: 10
          }}>
            <span style={{ fontSize: '24px' }}>✨</span>
            <span style={{ 
              fontWeight: '600', 
              color: '#1a1a1a', 
              fontSize: '16px',
              letterSpacing: '-0.2px'
            }}>
              Match for You
            </span>
            <span style={{ color: '#9ca3af', fontSize: '20px', fontWeight: '300' }}>›</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default WineHero;