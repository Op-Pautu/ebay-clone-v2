import TopMenu from "./_includes/TopMenu";
import MainHeader from "./_includes/MainHeader";
import SubMenu from "./_includes/SubMenu";
import Footer from "./_includes/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div id="MainLayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
        <div>
          <TopMenu />
          <MainHeader />
          <SubMenu />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
