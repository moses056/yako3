/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import OneContract from "../../../Components/TalentComponents/OneContract/OneContract";
import { useTranslation } from "react-i18next";
import { auth, db } from "../../../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function AllContracts() {

  const { t } = useTranslation();
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "talent", auth.currentUser.uid, "jobProposal"),
      where("status", "==", "contract")
    );
    
    onSnapshot(q, res => {
      const arr = [];
      res.docs.forEach(contract => {
        if (contract.exists()) {
          arr.push(contract.data());
        }
      });
      setContracts([...arr]);
    });
  }, []);

  return (
    <>
      <div className="bg-gray">
        <div className="container">
          <div className="row px-5">
            <h4 className="col-12 mt-5">{t("Contracts")}</h4>
            <div className="card mt-4 mb-5">
              {/* <div className="card-header bg-white p-3">
                {data && <SearchContract />}
              </div> */}
              <div className="card-body row">
                <div className="col-12 card-list">
                  {
                    contracts[0]?.jobId
                      ?
                      contracts.map((contract, index) => {
                        return <OneContract contract={contract} key={index} ind={index} userType="talent" />
                      })
                      :
                      <p className="h3 py-5">
                        You haven't started any contracts yet.
                      </p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
