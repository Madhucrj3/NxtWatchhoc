import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login';
import Gaming from './Gaming/Gaming';
import Home from './Home';
import IndividualVideo from './IndividualVideo/IndividualVideo';
import NotFound from './NotFound/NotFound';
import SavedVideo from './SavedVideo/SavedVideo';
import Trending from './Trending/Trending';
 const Pages = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/login' element={<Login />} />
    <Route exact path="/trending" element={<Trending />} />
    <Route exact path="/saveVideo" element={<SavedVideo />} />
    <Route exact path="/gaming" element={<Gaming />} />
    <Route exact path="/videos/:id" element={<IndividualVideo /> } />
    <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}
export default Pages;