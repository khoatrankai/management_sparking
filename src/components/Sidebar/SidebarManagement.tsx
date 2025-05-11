"use client"
import { Menu } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/redux/store/slices/menu.slice";
import useMedia from "use-media";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { MdOutlineWorkHistory } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchCustomerProfile } from "@/redux/store/slices/customerSlices/get_profile.slice";

// type Props = {};

// type MenuItem = Required<MenuProps>["items"][number];

const SlidebarManagement = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dispatch = useDispatch<AppDispatch>();
  const isMobile = useMedia({ maxWidth: 639 });
  // const { datas: dataRoleAccess } = useSelector(
  //   (state: RootState) => state.get_access_roles
  // );
  const isOpen = useSelector((state: RootState) => state.status_tab_menu);
  const itemsMenu = [
    
    {
      key: "work",
      label: "Công việc",
      icon: <HiClipboardDocumentCheck />,
      children: [
        {
          key: "process_work",
          label: (
            <div
              // href="/management/all_work?type=perform"
              className="w-full h-full"
              onClick={() => {
                const params = new URLSearchParams(searchParams.toString())
                    params.delete('status')
                    params.set('type','perform')
                    router.push(`/management/all_work?${params.toString()}`)
                if (isMobile) dispatch(toggleMenu());
              }}
            >
              <span>Bạn thực hiện</span>
            </div>
          ),
        },
        {
          key: "assigned_work",
          label: (
            <div
              // href="/management/all_work?type=assigned"
              className="w-full h-full"
              onClick={() => {
              const params = new URLSearchParams(searchParams.toString())
                    params.delete('status')
                    params.set('type','assigned')
                    router.push(`/management/all_work?${params.toString()}`)
                if (isMobile) dispatch(toggleMenu());
              }}
            >
              <span>Bạn đã giao</span>
            </div>
          ),
        },
        {
          key: "department_work",
          label: (
            <div
              className="w-full h-full"
              // href="/management/all_work?type=group"
              onClick={() => {
              const params = new URLSearchParams(searchParams.toString())
                    params.delete('status')
                    params.set('type','group')
                    router.push(`/management/all_work?${params.toString()}`)
                if (isMobile) dispatch(toggleMenu());
              }}
            >
              <span>Phong ban bạn</span>
            </div>
          ),
        },
        {
          key: "all_work",
          label: (
            <div
              className="w-full h-full"
              // href="/management/all_work"
              onClick={() => {
              const params = new URLSearchParams(searchParams.toString())
                    params.delete('status')
                    params.delete('type')
                    router.push(`/management/all_work?${params.toString()}`)
                if (isMobile) dispatch(toggleMenu());
              }}
            >
              <span>Tất cả</span>
            </div>
          ),
        },
      ],
    },
    {
      key: "project",
      label: "Dự án",
      icon: <MdOutlineWorkHistory />,
      children: [
        {
          key: "do_project",
          label: (
            <div
              className="w-full h-full"
              // href="/management/all_project?type_project=perform"
              onClick={() => {
                const params = new URLSearchParams(searchParams.toString())
                 
                    params.set('type_project','perform')
                    params.delete('status')
                    params.delete('type')
                    router.push(`/management/all_project?${params.toString()}`)
                if (isMobile) dispatch(toggleMenu());
              }}
            >
              <span>Bạn thực hiện</span>
            </div>
          ),
        },
        {
          key: "management_work",
          label: (
            <div
             className="w-full h-full"
              // href="/management/all_project?type_project=management"
              onClick={() => {
                const params = new URLSearchParams(searchParams.toString())
                params.set('type_project','management')
                params.delete('type')
                params.delete('status')
                router.push(`/management/all_project?${params.toString()}`)
                if (isMobile) dispatch(toggleMenu());
              }}
            >
              <span>Bạn quản trị</span>
            </div>
          ),
        },
        
        {
          key: "department_project",
          label: (
            <div
              // href="/management/all_project?type_project=group"
              className="w-full h-full"
              onClick={() => {
                const params = new URLSearchParams(searchParams.toString())
                params.set('type_project','group')
                params.delete('type')
                params.delete('status')
                router.push(`/management/all_project?${params.toString()}`)
                if (isMobile) dispatch(toggleMenu());
              }}
            >
              <span>Phòng ban bạn</span>
            </div>
          ),
        },
        {
          key: "all_project",
          label: (
            <div
              // href="/management/all_project"
              className="w-full h-full"
              onClick={() => {
                const params = new URLSearchParams(searchParams.toString())
                params.delete('type_project')
                params.delete('type')
                params.delete('status')
                router.push(`/management/all_project?${params.toString()}`)
                if (isMobile) dispatch(toggleMenu());
              }}
            >
              <span>Tất cả</span>
            </div>
          ),
        },
      ],
    },
  ];

    const { datas: dataProfile } = useSelector(
      (state: RootState) => state.get_profile_customer
    );

  
    useEffect(() => {
      dispatch(fetchCustomerProfile())
        .unwrap()
        .then((dt) => {
          if (dt.statusCode === 400) {
            router.push("/login");
          }
        })
        .catch(() => {
          router.push("/login");
        });
    }, [dispatch, router]);
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

export default SlidebarManagement;
