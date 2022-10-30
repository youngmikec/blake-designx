import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
import { SnackbarProvider } from 'notistack';

import { authRoutes } from './routes';
import { RouteType } from './routes/auth-routes';
import NotProtectedRoute from './routes/protected-routes';


import './styles/globals.css';
import styles from './styles/Home.module.css';
import TopBar from './components/top-bar/top-bar';
import NavBar from './components/nav-bar/nav-bar';
import Footer from './components/footer/footer';

function App() {

  const getRoutes = (routes: RouteType[]) => routes.map((route: RouteType, index: number) => {
    const Component = route.component;
    return <Route key={index} path={route.path} element={ 
      <NotProtectedRoute>
        <FormspreeProvider project="2001526770330762755">
          <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
            <div className={styles.main}>
              <TopBar />
              <NavBar/>
                {Component}
              <Footer />
            </div>
          </SnackbarProvider>
        </FormspreeProvider>
      </NotProtectedRoute>
    } />
  })


  return (
    
    <Router>
      <Routes>
        {getRoutes(authRoutes)}  
      </Routes>
    </Router>
      
  );
}

export default App;

// import type { AppProps } from 'next/app';
// import Head from 'next/head';


// function MyApp({ Component, pageProps }: AppProps) {

//   return (
//     <>
//       <Head>
//         <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
//       </Head>
//       <FormspreeProvider project="2001526770330762755">
//         <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
//           <main className={styles.main}>
//               <TopBar/>
//               <NavBar/>
//                 <Component {...pageProps} />
//               <Footer />
//           </main>
//         </SnackbarProvider>
//       </FormspreeProvider>
//     </>
//   )
// }

// export default MyApp

