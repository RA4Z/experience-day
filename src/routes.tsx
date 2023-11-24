import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Notas from './pages/Notas'

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/notas' element={<Notas />} />
            </Routes>
        </Router>
    )
}