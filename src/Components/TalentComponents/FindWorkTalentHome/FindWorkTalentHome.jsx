/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SearchBarJobsTalent from "../SearchBarJobsTalent/SearchBarJobsTalent";

export default function FindWorkTalentHome() {
  const { t } = useTranslation();
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    const auth = getAuth(); // récupère l'instance Firebase Auth
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setVerify(user.emailVerified);
      } else {
        setVerify(false);
      }
    });

    // Cleanup pour éviter des memory leaks
    return () => unsubscribe();
  }, []);

  return (
    <div className="d-none d-lg-block">
      <div className="row my-lg-4">
        <div className="col">
          <h4 style={{ fontWeight: "500" }}>{t("FindWork")}</h4>
        </div>
        <div className="col-8">
          <SearchBarJobsTalent />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

