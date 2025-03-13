import "./App.css";

import React from 'react';
import { Route, Routes } from "react-router-dom";

import { AppNav } from "../../components/app-nav";
import { Search } from "../../components/search";

import Parts from "../parts/parts";
import Dashboard from "../core/dashboard";

const App = () => {
  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <AppNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
          </div>
        </div>
      </div>
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route index Component={Dashboard}></Route>
        <Route path='/parts' Component={Parts}></Route>
      </Routes>
    </>
  );
}

export default App;