"use client"
import HeaderCustomer from '@/components/Header/HeaderCustomer';
import SlidebarCustomer from '@/components/Sidebar/SidebarCustomer';
import { usePathname } from 'next/navigation';

const LayoutHeader = ({
    children
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const pathname = usePathname();
  const noHeaderPaths = ['/login']; // Danh sách các đường dẫn không hiển thị Header

  return (
    <>
       {!noHeaderPaths.includes(pathname) ? <>
                    <HeaderCustomer/>
                  <SlidebarCustomer>
                    {children}
                  </SlidebarCustomer>
                  
                  </>:<>
                  {children}
                  </>}
    </>
  );
};

export default LayoutHeader;
