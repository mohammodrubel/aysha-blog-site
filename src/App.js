import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Navs from './components/Home/Navs/Navs';
import CreateBlog from './components/Dashbord/CreateBlog/CreateBlog';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Authintication/Login/Login';
import Registration from './components/Authintication/Registration/Registration';
import Reset from './components/Authintication/Reset/Reset';
import './App.css'
import AuthProvider from './Context/AuthProvider/AuthProvider';
import RequareRoute from './components/Authintication/RequareRoute/RequareRoute';
import Details from './components/Blogs/Details/Details';
import JapaneseCulture from './components/Dashbord/JapaneseCulture/JapaneseCulture';
import JapaneseCultureBlog from './components/JapaneseCultureBlog/JapaneseCultureBlog';
import JapaneseDetail from './components/JapaneseCultureBlog/JapaneseDetail/JapaneseDetail';
import Dashbord from './components/Dashbord/Dashbord';
import MakeAdmin from './components/Dashbord/MakeAdmin/MakeAdmin';
import Admin from './components/Authintication/Admin/Admin';
import PersonalBlog from './components/Dashbord/PersonalBlog/PersonalBlog';
import TotalJapaneseBlog from './components/Dashbord/TotalJapaneseBlog/TotalJapaneseBlog';
import WebsiteUser from './components/Dashbord/WebsiteUser/WebsiteUser';





function App() {

  // const {admin} = useAuth()

  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
              <Navs></Navs>
            <Routes>
                  <Route  path="/" element={<Home></Home>} /> 
                  <Route  path="/home" element={<Home></Home>} /> 
                  {/* <Route  path="/dashbord/createblog" element={<CreateBlog></CreateBlog>} />  */}
                  <Route  path="/JapanesecultureBlog" element={<RequareRoute> <JapaneseCultureBlog /></RequareRoute>} /> 
                  <Route  path="/blogs" element={<RequareRoute> <Blogs /></RequareRoute>} /> 
                  <Route  path="/login" element={<Login></Login>} /> 
                  <Route  path="/registration" element={<Registration></Registration>} /> 
                  <Route  path="/reset" element={<Reset></Reset>} /> 
                  <Route path='/blog/:detail' element={<Details></Details>}></Route>
                  <Route path='/japaneseculture/:detail' element={<JapaneseDetail></JapaneseDetail>}></Route>

                  <Route path='/dashbord' element={<Admin><Dashbord></Dashbord></Admin>}>
                       <Route path='/dashbord/createBlog' element={<CreateBlog></CreateBlog>}></Route>
                       <Route  path="/dashbord/japaneseculture" element={<JapaneseCulture></JapaneseCulture>} /> 
                       <Route  path="/dashbord/makeadmin" element={<MakeAdmin></MakeAdmin>} /> 
                       <Route  path="/dashbord/personalblog" element={<PersonalBlog></PersonalBlog>} /> 
                       <Route  path="/dashbord/japanesetotal" element={<TotalJapaneseBlog></TotalJapaneseBlog>} /> 
                       <Route  path="/dashbord/websiteuser" element={<WebsiteUser></WebsiteUser>} /> 

                  </Route>
                  
                  {/* page not Found  */}
                  <Route  path="/*" element={<NotFound></NotFound>} /> 
            </Routes>
            
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
