import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase'
import { collection, getDocs } from "firebase/firestore";

export default function JobProposalsNumber({ jobID }) {
    const [num, setNum] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!jobID) {
            setLoading(false);
            return;
        }

        const fetchProposals = async () => {
            try {
                setLoading(true);
                const proposalsRef = collection(db, "job", jobID, "proposals");
                const proposalsSnapshot = await getDocs(proposalsRef);
                setNum(proposalsSnapshot.size);
            } catch (err) {
                console.error("Erreur:", err);
                setNum(0); // Afficher 0 en cas d'erreur
            } finally {
                setLoading(false);
            }
        };

        fetchProposals();
    }, [jobID]);

    if (loading) {
        return <span>Chargement...</span>;
    }

    return (
        <span>
            {num}
        </span>
    );
}