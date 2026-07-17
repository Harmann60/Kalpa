import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ExperiencesPage from './pages/ExperiencesPage';
import EventsPage from './pages/EventsPage';
import StaysPage from './pages/StaysPage';
import ReviewsPage from './pages/ReviewsPage';
import FAQPage from './pages/FAQPage';
import PlanningPage from './pages/PlanningPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/experiences" element={<ExperiencesPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/stays" element={<StaysPage />} />
                    <Route path="/reviews" element={<ReviewsPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/planning" element={<PlanningPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
