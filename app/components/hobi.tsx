'use client'; // Menandai komponen ini sebagai komponen klien

import React, { useState } from 'react';
import Image from 'next/image';
import hobby1 from '../hobi1.jpg';
import hobby2 from '../hobi2.jpg';
import hobby3 from '../hobi3.jpg';
import hobby4 from '../hobi4.jpg';

const HobbiesGallery: React.FC = () => {
  const hobbies = [
    { id: 1, title: 'Hiking', image: hobby1 },
    { id: 2, title: 'Gaming', image: hobby2 },
    { id: 3, title: 'Programer', image: hobby3 },
    { id: 4, title: 'Traveler', image: hobby4 },
  ];

  // Objek gaya dengan tema gaming
  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#1e1e1e', // Latar belakang gelap
      color: '#ffffff', // Teks berwarna putih
    } as React.CSSProperties,
    title: {
      color: '#00ff00', // Hijau neon untuk judul
      fontFamily: 'Press Start 2P, cursive', // Font retro
      fontSize: '2rem',
    } as React.CSSProperties,
    gallery: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap' as 'wrap',
      marginTop: '20px',
    } as React.CSSProperties,
    card: {
      width: '220px',
      margin: '5px',
      border: '1px solid #00ff00', // Garis hijau neon
      borderRadius: '10px',
      overflow: 'hidden',
      textAlign: 'center',
      transition: 'transform 0.2s, box-shadow 0.3s', // Efek transisi lebih dramatis
      backgroundColor: '#2b2b2b', // Warna latar belakang kartu
    } as React.CSSProperties,
    hobbyTitle: {
      margin: '10px 0',
      fontSize: '18px',
      fontFamily: 'Press Start 2P, cursive', // Font retro
    } as React.CSSProperties,
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Gallery</h2>
      <div style={styles.gallery}>
        {hobbies.map((hobby) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <div
              key={hobby.id}
              style={{
                ...styles.card,
                transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Efek zoom saat hover
                boxShadow: isHovered ? '0 8px 16px rgba(0,255,0,0.5)' : '0 1px 3px rgba(0,0,0,0.2)', // Bayangan hijau neon saat hover
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={hobby.image}
                alt={hobby.title}
                layout='responsive'
                width={200}
                height={200}
              />
              <h3 style={styles.hobbyTitle}>{hobby.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HobbiesGallery;
