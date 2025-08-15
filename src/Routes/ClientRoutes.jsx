import React, { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AllJobPosts from "../pages/ClientPages/AllJobPost/AllJobPosts";
import Jobs from "../pages/ClientPages/Jobs/Jobs";
import Header from "./../Components/ClientComponents/Header/Header";
import Footer from "./../Components/SharedComponents/Footer/Footer";
import Messages from "./../pages/Messages/Messages";
import AllContract from "./../pages/ClientPages/AllContract/AllContract";
import BringYourTalent from "./../pages/ClientPages/BringYourTalent/BringYourTalent";
import PostJob from "./../pages/ClientPages/PostJop/PostJob";
import Talent from "./../pages/ClientPages/Talent/Talent";
import Reports from "./../pages/ClientPages/Reports/Reports";
import PageNotFound from "./../pages/PageNotFound/PageNotFound";
import ReviewProposals from "../pages/ClientPages/ReviewProposals/ReviewProposals";
import EmailVerified from "./../pages/EmailVerification/EmailVerified";
import TransactionHistory from "../pages/TalentPages/Reports/TransactionHistory/TransactionHistory";
import TalentProfile from "../pages/ClientPages/TalentProfile/talentProfile";
import PleaseVerifiy from "../pages/EmailVerification/PleaseVerifiy";
import { SearchContextProvider } from "../Context/SearchContext";
import JobJobDetailsBeforeProposals from "../pages/ClientPages/JobDetailsBeforeProposols/JobDetailsBeforeProposals";
import CreateContract from "../pages/ClientPages/CreateContract/CreateContract";
import Notifications from "../pages/Notifications/Notifications";
import Contract from './../pages/ClientPages/AllContract/Contract';


export default function ClientRoutes() {
  const [talentArr, settalentArr] = useState([]);
  const [talentSearchList, settalentSearchList] = useState("");

  return (
    <>
      <SearchContextProvider value={{ talentSearchList, settalentSearchList, talentArr, settalentArr }}>
        <Header />
        <Routes>
          <Route path="/home" element={<Jobs />} />
          <Route path="/" element={<Jobs />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/all-job-posts" element={<AllJobPosts />} />
          <Route path="/all-contracts" element={<AllContract />} />
          <Route
            path="/bring-your-own-talent"
            element={<BringYourTalent />}
          />
          <Route
            path="/job-details/:id"
            element={<JobJobDetailsBeforeProposals />}
          />
          <Route path="/contract" element={<Contract />} />
          <Route path="/email-verification" element={<EmailVerified />} />
          <Route path="/sign-up/please-verify" element={<PleaseVerifiy />} />
          <Route path="/post-job/*" element={<PostJob />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/talent-profile/:id" element={<TalentProfile />} />
          <Route path="/review-proposal/:id" element={<ReviewProposals />} />
          <Route path="/billing-history" element={<Reports />} />
          <Route
            path="/transaction-history"
            element={<TransactionHistory />}
          />
          <Route path="/create-contract" element={<CreateContract />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </SearchContextProvider>
      <Footer />
    </>
  );
}
