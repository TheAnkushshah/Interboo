import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const initFirebaseAdmin = () => {
    const apps = getApps();

    if (!apps.length) {
        initializeApp({
            credential: cert({
                projectId: process.env.INTERBOO_PROJECT_ID,
                clientEmail: process.env.INTERBOO_CLIENT_EMAIL,
                privateKey: process.env.INTERBOO_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            })
        })
    }

    return {
        auth: getAuth(),
        db: getFirestore()
    }

}

export const { auth, db } = initFirebaseAdmin();