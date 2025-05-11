import { Tabs } from "antd";
import React from "react";
// import { FaStar } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

import ModalTabPaymentReadyCustomer from "./ModalTabPaymentReadyCustomer/ModalTabPaymentReadyCustomer";
export default function ModalTabs() {
  const dataDashboard = [
    {
      name: "Hóa đơn đến hạn",
      icon: GiReceiveMoney,
      children: ModalTabPaymentReadyCustomer,
    }
  ];
  return (
    <div className="flex gap-x-[30px] gap-y-[15px] flex-wrap max-w-full">
      <div className="bg-white min-h-[422px] flex-1 p-5 w-full">
        <Tabs
          defaultActiveKey="4"
          items={dataDashboard.map((dt, id) => {
            return {
              key: String(id),
              label: (
                <div className="flex items-center gap-4">
                  <dt.icon />
                  <p>{dt.name}</p>
                </div>
              ),
              children: <dt.children />,
            };
          })}
        />
      </div>
    </div>
  );
}
