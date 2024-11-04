import React from 'react';

const PersonalInfo = () => {
  const personalData = {
    name: 'Haitsam Abdillah Firdaus',
    birthDate: '6 Juni 2003',
    email: 'haitsamfirdaus111@gmail.com',
    phone: '081222049446',
    address: 'Puskopad Blok A5 NO1, Tanjungsari, Sumedang, Jawa Barat',
    occupation: 'WEB EDITING',
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Informasi Pribadi</h2>
      <ul style={styles.list}>
        {Object.entries(personalData).map(([key, value]) => (
          <li key={key} style={styles.listItem}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Gaya untuk tampilan "gamer-like"
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    border: '2px solid #00ff00', // Border neon
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#1a1a1d', // Background gelap
    fontFamily: 'Press Start 2P, cursive', // Font retro gaming
    boxShadow: '0px 0px 15px 5px rgba(0, 255, 0, 0.3)', // Efek cahaya hijau
  },
  title: {
    color: '#00ff00', // Warna neon hijau
    fontFamily: 'Press Start 2P, cursive', // Font retro gaming
    fontWeight: '700',
    fontSize: '24px',
    textShadow: '0px 0px 8px rgba(0, 255, 0, 0.6)', // Efek cahaya pada teks
    textTransform: 'uppercase',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
    color: '#cfcfcf', // Warna teks abu-abu muda
    fontSize: '16px',
    fontFamily: 'Roboto, sans-serif', // Menggunakan font sans-serif untuk teks biasa
    backgroundColor: '#2b2b2b', // Latar belakang gelap untuk item
    border: '1px solid #00ff00', // Border hijau neon
    borderRadius: '5px',
    padding: '10px',
    transition: 'background-color 0.3s, transform 0.3s', // Efek transisi
    boxShadow: '0px 2px 5px rgba(0, 255, 0, 0.5)', // Bayangan hijau
  },
  // Menambahkan gaya hover untuk item
  listItemHover: {
    backgroundColor: '#00ff00', // Latar belakang hijau neon saat hover
    color: '#1a1a1d', // Teks menjadi gelap saat hover
    transform: 'scale(1.02)', // Efek zoom saat hover
  }
};

// Komponen yang berfungsi untuk mengatur efek hover pada item daftar
const ListItem = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li
      style={{
        ...styles.listItem,
        ...(isHovered ? styles.listItemHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </li>
  );
};

export default PersonalInfo;
