import React from "react";
import { privatePages, publicPages } from "../router";
import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";

function AllPages({ isAuth }) {
    console.log(isAuth)
    return (
        isAuth
            ? <Routes >
                <Route path="/" element={<Navigate to="/mainpage" replace />} />
                {privatePages.map((item) =>
                    <Route key={item.path} path={item.path} element={<item.element />} />
                )
                }
                < Route path="*" element={<Navigate to="/mainpage" replace />} />
            </Routes>
            : <Routes >
                <Route path="/" element={<Navigate to="/login" replace />} />
                {publicPages.map((item) =>
                    <Route exact key={item.path} path={item.path} element={<item.element />} />
                )
                }
                <Route path="*"element={<Navigate to="/login" replace />} />
            </Routes>
    )
}

export default AllPages;