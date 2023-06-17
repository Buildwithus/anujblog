import {Link,Outlet} from 'react-router-dom'
import './layout.css'




function Layout(){
    return(
   
   <>
 <nav class="navbar navbar-expand-lg mb-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Anuj Kumar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav  ">
        <a class="nav-link active " aria-current="page" href="/">Home</a>
        <a class="nav-link active " href="/add">Add Blog</a> 
        <Link class="nav-link active " to="/about">About</Link>
        <a class="nav-link active   " href='/privacy-policy'>Privacy Policy</a>    
         </div>
    </div>
  </div>
</nav>
<Outlet></Outlet>
   </>
   
   
    )
}
export default Layout;
