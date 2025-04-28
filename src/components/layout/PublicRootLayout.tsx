import React from 'react';
import { Footer } from './footer/Footer';
import AppBar from './appbar/Appbar';


const PublicRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AppBar />
      {children}
      <Footer />
    </div>
  );
};

export default PublicRootLayout;
