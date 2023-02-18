import LeftNavBar from '../left-side-nav';
import ContactUs from '../contact-us/index.tsx';
import { Outlet } from "react-router-dom";
import { useState } from 'react';

function Home() {
    const [currentLink, setCurrentLink] = useState('/')
    let isUserLoggedIn = false;
    try{
        isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
        if(isUserLoggedIn && isUserLoggedIn.id){
            // do nothing, continue lang
        }else{
            localStorage.clear();
            window.location.href = 'http://localhost:3000/login'
        }
    }catch(error){
        localStorage.clear();
        window.location.href = 'http://localhost:3000/login'
    }

    const renderOutlet = ()=>{
        if(currentLink === '/'){
            return(
                <>
                    <h2>Hi world</h2>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-regular fa-code-branch"></i>
                    <ContactUs/>
                </>
            )
        }else{
            return (<Outlet/>)
        }
    }
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        !!isUserLoggedIn ? 
            <>
                <div className="container-fluid">
                    <div className="row">
                        <LeftNavBar setCurrentLink={setCurrentLink} test={1}/>
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Dashboard</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group me-2">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                    </div>
                                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={logout}>
                                        Logout
                                    </button>
                                </div>
                            </div>
                            {renderOutlet()}
                        </main>
                    </div>
                </div>
            </>
        :
        <></>
    );
}

export default Home;