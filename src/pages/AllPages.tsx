import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privatePages, publicPages } from "../router";

interface IAllPages {
    isAuth: boolean
}

function AllPages({ isAuth }: IAllPages) {
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
                    <Route key={item.path} path={item.path} element={<item.element />} />
                )
                }
                <Route path="*"element={<Navigate to="/login" replace />} />
            </Routes>
    )
}

export default AllPages;