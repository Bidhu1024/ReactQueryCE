import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import Home from "./components/Home";
import RQSuperHeroes from "./components/RQSuperHeroes";
import SuperHeroes from "./components/SuperHeroes";
import {ReactQueryDevtools} from 'react-query/devtools'
import RQSuperHero from "./components/RQSuperHero";
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client ={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heroes" element={<SuperHeroes />} />

            <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />

            <Route path="/" element={<Home />} />
            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHero/>}/>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
