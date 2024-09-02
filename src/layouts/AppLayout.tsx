import Header from "./header/Header.tsx";
import Sidebar from "./sidebar/Sidebar.tsx";
import { Outlet } from "react-router-dom";
import { container, layoutWrapper } from "./AppLayout.css.ts";

const AppLayout: React.FC = () => {
    return (
        <div className={layoutWrapper}>
            <Sidebar />
            <div className={container}>
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;
