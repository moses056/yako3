import React, { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Messages from "../pages/Messages/Messages";
import Header from "./../Components/TalentComponents/Header/Header";
import Footer from "./../Components/SharedComponents/Footer/Footer";
import SavedJobs from "./../pages/TalentPages/SavedJobs/SavedJobs";
import Proposals from "./../pages/TalentPages/Proposals/Proposals";
import Profile from "./../pages/TalentPages/Profile/Profile";
import MyStats from "./../pages/TalentPages/MyStats/MyStats";
import MyJobs from "./../pages/TalentPages/MyJobs/MyJobs";
import AllContracts from "./../pages/TalentPages/AllContracts/AllContracts";
import PageNotFound from "./../pages/PageNotFound/PageNotFound";
import Reports from "../pages/TalentPages/Reports/MyReports/MyReports";
import OverviewReports from "../pages/TalentPages/Reports/OverviewReports/OverviewReports";
import BillingByClients from "../pages/TalentPages/Reports/billingbyclient/billingbyclients";
import ConnectsHistory from "../pages/TalentPages/Reports/connectshistory/connectshistory";
import BuyConnects from "../pages/TalentPages/Reports/BuyConnects/BuyConnects";
import HomeTalent from "../pages/TalentPages/HomeTalent/HomeTalent";
import JobDetailsTalent from "../pages/TalentPages/JobDetailsTalent/JobDetailsTalent";
import CreateProfile from "../pages/TalentPages/CreateProfile/CreateProfile";
import Search from "../pages/TalentPages/Search/Search";
import EmailVerified from "./../pages/EmailVerification/EmailVerified";
import SubmitProposal from "../pages/Submit Proposal/SubmitProposal";
import ReviewProposalsCard from "../Components/ClientComponents/ReviewProposalsCard/ReviewProposalsCard";
import { SearchContextProvider } from "../Context/SearchContext";
import PleaseVerifiy from "../pages/EmailVerification/PleaseVerifiy";
import JobAppliedDetails from "../pages/TalentPages/JobAppliedDetails/JobAppliedDetails";
import Contract from "../pages/TalentPages/Contract/Contract";
import Offers from "../pages/TalentPages/Offers/Offers";
import Notifications from './../pages/Notifications/Notifications';

export default function TalentRoutes() {
  const [arr, setarr] = useState([]);
  const [itemSearchList, setitemSearchList] = useState("");
  const [searchList, setsearchList] = useState([]);
  const [switchJobs, setswitchJobs] = useState("")
  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  // pathname === "/" && navigate("/find-work");
  return (
    <>
      <SearchContextProvider
        value={{ arr, setarr, itemSearchList, setitemSearchList, searchList, setsearchList, switchJobs, setswitchJobs }}
      >
        <Header />
        <div>
          <Routes>
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/find-work" element={<HomeTalent />} />
            <Route path="/" element={<HomeTalent />} />
            <Route path="/Search/:searchValue" element={<Search />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/job/" element={<JobDetailsTalent />} />
            <Route path="/job/:id" element={<JobDetailsTalent />} />
            <Route path="/job/apply/:id" element={<SubmitProposal />} />
            <Route
              path="/job/review-proposal/:id"
              element={<ReviewProposalsCard />}
            />
            <Route path="/job/applied/:id" element={<JobAppliedDetails />} />
            <Route path="/saved-jobs" element={<SavedJobs />} />
            <Route path="/proposals" element={<Proposals />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/email-verification" element={<EmailVerified />} />
            <Route
              path="/sign-up/please-verify"
              element={<PleaseVerifiy />}
            />
            <Route path="/my-stats" element={<MyStats />} />
            <Route path="/my-jobs" element={<MyJobs />} />
            <Route path="/all-contract" element={<AllContracts />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/overview" element={<OverviewReports />} />
            <Route path="/my-reports" element={<Reports />} />
            <Route path="/life-time-billing" element={<BillingByClients />} />
            <Route path="/connects-history" element={<ConnectsHistory />} />
            <Route path="/buyconnects" element={<BuyConnects />} />
            {/* <Route
              path="/transaction-history"
              element={<TransactionHistory />}
            /> */}
            <Route path="/messages" element={<Messages />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </SearchContextProvider>
      <Footer />
    </>
  );
}
