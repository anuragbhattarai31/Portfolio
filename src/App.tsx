import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={
                <>
                  <AboutMe />
                  <Experience />
                  <Projects />
                  <Contact />
                </>
              } />
              <Route path="/game" element={<TicTacToe />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;