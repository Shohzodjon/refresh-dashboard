import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ControlPanel from "../pages/control-panel/ControlPanel";
import ShopPage from "../pages/shop/ShopPage";
import GeneralLayout from "../layouts/GeneralLayout";

const PanelRotes: FC = () => {
  return (
    <GeneralLayout>
      <Routes>
        <Route path="/" element={<ControlPanel />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </GeneralLayout>
  );
};
export default PanelRotes;
