import Header from "./Header"
import Catalogue from "./Catalogue"
import Sections from "./Sections"
import GlobalStyle from "./GlobalStyle"
import Seats from "./Seats"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                < Route path="/" element={<Catalogue />} />
                < Route path="/filme/:imageId" element={<Sections />} />
                < Route path="/sessao/:sectionId" element={<Seats />} /> 
            </Routes>
        </ BrowserRouter>
    )
}

