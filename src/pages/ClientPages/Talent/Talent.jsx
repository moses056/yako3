
import "./Talent.css";
import {
  Route,
  Routes,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clientDataAction } from "../../../Store/actions/clientData";
import MyHires from "../../../Components/ClientComponents/MyHiresComponent/MyHires";
import Saved from "../../../Components/ClientComponents/SavedComponent/Saved";
import { useTranslation } from "react-i18next";
import SearchClient from "../SearchClient/SearchClient";
import EmptyTalent from "../../../Components/ClientComponents/EmptyTalentComponent/EmptyTalent";


export default function Talent() {
  const { t } = useTranslation();
  const client = useSelector((state) => state.clientData);
  const dispatch = useDispatch();
  const [isliked, setisliked] = useState(false)
  useEffect(() => {
    dispatch(clientDataAction());
  }, []);
  useEffect(() => {
    dispatch(clientDataAction());
  }, [isliked]);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  pathname === "/talent" && navigate("/talent/my-hires");

  return (
    <div className="py-5" style={{ backgroundColor: "#f1f2f4" }}>
      <div className="container bg-white" >
        <div className="row tab-talent-CN">
          <ul className="nav nav-tabs pt-3">
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/talent/searchclient"
              >
                {t("Search")}
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/talent/my-hires"
              >
                {t("MyHires")}
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/talent/saved-talent"
              >
                {t("Saved")} ({client?.savedTalent?.length})
              </NavLink>
            </li>
          </ul>
          <Routes>
            <Route path="/talent/searchclient" element={<SearchClient />} />
            <Route path="/talent/my-hires" element={<MyHires />} />
            <Route path="/talent/saved-talent" element={
              client?.savedTalent?.length !== 0 ?
                client?.savedTalent?.map((item) => (
                  <Saved talentId={item} key={item} isliked={isliked} setisliked={setisliked} />))
                : <EmptyTalent 
                    image={<div>Icon</div>} 
                    heading={t("Youhaventsavedanyoneyet")} 
                    content={t("Saveyourfavoritefreelancers")} 
                  />
            } />
          </Routes>
        </div>
      </div>
    </div>
  );
}
