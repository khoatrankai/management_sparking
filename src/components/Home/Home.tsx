"use client";
import React from "react";
import "./styles.scss";
import ModalTabs from "../Dashboard/ModalTabs/ModalTabs";
import IntroduceDashboard from "../Management/Project/Introduce/IntroduceDashboard";

export default function HomePage() {
  return (
    <>
       <div className="flex flex-col gap-4 sm:px-4 py-4 w-screen sm:w-auto">
                
                <div className="gap-4 flex-wrap">
                  <div className="flex-1 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] min-w-96">
                    <IntroduceDashboard />
                  </div>
                </div>
                <div className="gap-4 flex-wrap">
                  <div className="flex-1 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] min-w-96">
                    <ModalTabs />
                  </div>
                </div>
             
              </div>
    </>
  );
}
