import { Menu } from "antd";
import Link from "next/link";
import React from "react";
import { TbZoomMoney } from "react-icons/tb";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/redux/store/slices/menu.slice";
import useMedia from "use-media";
import { FaUserTie } from "react-icons/fa";

// type Props = {};

// type MenuItem = Required<MenuProps>["items"][number];

const SlidebarCustomer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useDispatch<AppDispatch>();
  const isMobile = useMedia({ maxWidth: 639 });
  // const { datas: dataRoleAccess } = useSelector(
  //   (state: RootState) => state.get_access_roles
  // );
  const isOpen = useSelector((state: RootState) => state.status_tab_menu);
  const { datas: dataProfile } = useSelector(
        (state: RootState) => state.get_profile_customer
      );
  const itemsMenu = [
    {
      key: "customer",
      label: (
        <Link
          href="/company"
          className=""
          onClick={() => {
            if (isMobile) dispatch(toggleMenu());
          }}
        >
          <span>Danh sách công ty</span>
        </Link>
      ),
      icon: <FaUserTie />,
    },
    {
      key: "project",
      label: "Dự án",
      icon: <PiProjectorScreenChartFill />,
      children: [
        {
          key: "list_project",
          label: (
            <Link
              href="/project"
              onClick={() => {
                if (isMobile) dispatch(toggleMenu());
              }}
            >
              <span>Danh sách dự án</span>
            </Link>
          ),
        },
      ],
    },
    {
      key: "sale",
      label: "Tài liệu",
      icon: <TbZoomMoney />,
      children: [
        {
          key: "price_quote",
          label: (
            <Link
              href="/price_quote"
              onClick={() => {
                if (isMobile) dispatch(toggleMenu());
              }}
            >
              <span>Báo giá</span>
            </Link>
          ),
        },
        {
          key: "contract",
          label: (
            <Link
              href="/contract"
              onClick={() => {
                if (isMobile) dispatch(toggleMenu());
              }}
            >
              <span>Hợp đồng</span>
            </Link>
          ),
        },
        {
          key: "invoice",
          label: (
            <Link
              href="/payment"
              className=""
              onClick={() => {
                if (isMobile) dispatch(toggleMenu());
              }}
            >
              <span>Hóa đơn</span>
            </Link>
          ),
        },
      ],
    },
  ];
  return (
   <>
   {dataProfile && (
         <>
           <div className=" flex flex-1 overflow-y-hidden overflow-x-auto min-h-fit">
             <div
               className={`h-full sm:relative inset-x-0 absolute z-40 transition-all   ${
                 isOpen.isOpen ? "sm:min-w-52" : "w-0 "
               }`}
             >
             <div
             className={`transition-all bg-[#1A2A36] max-h-full fixed bottom-0 left-0 top-16 overflow-y-auto py-4 ${
               isOpen.isOpen ? "sm:w-52 w-full" : "w-0 "
             }`}
           >
             <Menu
               //   onClick={onClick}
               defaultValue={'all_project'}
               className="bg-[#1A2A36] !text-white"
               style={{ width: "100%" }}
               theme="dark"
               color="white"
               defaultSelectedKeys={["1"]}
               defaultOpenKeys={["sub1"]}
               mode="inline"
               items={itemsMenu}
             />
           </div>
             </div>
             <div
                   className={` transition-all flex-1 overflow-y-scroll sm:w-auto w-screen  ${
                     isOpen.isOpen ? "" : ""
                   }`}
                 >
                   {children}
                 </div>
           </div>
         </>
       )}
   </>
  );
};

export default SlidebarCustomer;
