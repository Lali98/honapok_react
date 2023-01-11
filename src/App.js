import './App.css';
import './style.css';
import Header from './Header';
import Honapok from './Honapok';
import Footer from './Footer';

function App() {
    return (
        <main>
            <Header/>
            <div id='kartyak'>
                <Honapok />
            </div>
            <Footer />
        </main>
    );
}

export default App;
