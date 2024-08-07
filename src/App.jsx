import "./App.css";
import Navbar from "./Global Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Global Components/Footer";
import Landing from "./Layout/Landing";
import ShopContainer from "./Global Components/ShopContainer";
import ElcetricPack from "./Layout/ElcetricPack";
import Slider from "./Global Components/SliderMain";
import LoginForm from "./Form/Login";
import RegisterForm from "./Form/Register";
import SliderProduct from "./Global Components/SliderProduct";
import Product from "./Layout/Product";
import Description from "./Layout/Description";
import AddToCart from "./Layout/AddToCart";
import Review from "./Global Components/Review";
import Dashboard from "./Admin/Dashboard";
import AddCategory from "./Admin/Form/AddCategory";
import CategoryTable from "./Admin/Table/CategoryTable";
import EditCategory from "./Admin/Form/EditCategory";
import AdminNavbar from "./Admin/adminNavbar/AdminNavbar";
import ProductTable from "./Admin/Table/ProductTable";
import AddProduct from "./Admin/Form/AddProduct";
import EditProduct from "./Admin/Form/EditProduct";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/con" element={<ShopContainer />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/elc" element={<ElcetricPack />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/slip" element={<SliderProduct />} />
          <Route path="/desc" element={<Description />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/review" element={<Review />} />


          {/* Admin Dashboar Components From here */}
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/adnav" element={<AdminNavbar />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/editProduct" element={<EditProduct />} />
          
          
          
          <Route path="/productTable" element={<ProductTable />} />
          <Route path="/categoryTable" element={<CategoryTable />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/editCategory/:id" element={<EditCategory/>} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
