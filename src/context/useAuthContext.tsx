import { apiAuth } from "@/api-client";
import {
  AccountDetailResponse,
  LoginResponseType,
} from "@/api-client/types/AuthType";
import jwt, { JwtPayload } from "jsonwebtoken";
import React, { useEffect, useState } from "react";

export enum TypePayment {
  PRO = "PRO",
  TRIAL = "TRIAL",
}

export interface IAuthContext {
  authState?: any | null;
  accountExtendDetail?: AccountDetailResponse | null;
  canCancel?: boolean | null;
  handleLogged: (authState?: LoginResponseType) => void;
  handleLogOut: () => void;
  getAccountExtendDetails: () => Promise<void>;
  getCanCancel: () => Promise<void>;
  typePayment?: TypePayment;
  setTypePaymentAction?: (type: TypePayment) => void;
}

export const AuthContext = React.createContext<IAuthContext>({
  authState: null,
  accountExtendDetail: null,
  handleLogged: (authState?: LoginResponseType) => {},
  handleLogOut: () => {},
  getAccountExtendDetails: async () => {},
  canCancel: false,
  getCanCancel: async () => {},
});

export const useAuthContext = (): IAuthContext => {
  const [authState, setAuthState] = useState<
    LoginResponseType | null | undefined
  >(null);

  const [accountExtendDetail, setAccountExtendDetail] = useState<any>(null);
  const [canCancel, setCanCancel] = useState<boolean | null | undefined>(null);
  const [typePayment, setTypePayment] = useState<TypePayment | undefined>();

  useEffect(() => {
    const dataLocal = localStorage.getItem("AQToken") ?? "null";
    const auth = JSON.parse(dataLocal);
    console.log("authauthauthauth", auth);
    setAuthState(auth);
  }, []);

  useEffect(() => {
    if (authState?.access_token) {
      getAccountExtendDetails();
      getCanCancel();
    } else {
      //   mixpanelSetUserId("guess");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState?.access_token]);

  useEffect(() => {
    if (!authState?.access_token) return;
    let expireInterval = setInterval(() => {
      const decodedToken = jwt.decode(authState?.access_token, {
        complete: true,
      }) as JwtPayload;
      if (decodedToken && decodedToken?.payload) {
        const currentTime = Math.floor(Date.now() / 1000);
        if (currentTime > decodedToken?.payload?.exp) {
          handleLogOut();
        }
      }
    }, 1000 * 60);
    return () => clearInterval(expireInterval);
  });

  const getUserInfo = async () => {
    const userInfoData = await apiAuth.getUserInfo(
      authState?.access_token ?? ""
    );
  };

  const getCanCancel = async () => {
    try {
      const canCancelRes = await apiAuth.canCancel(
        authState?.access_token ?? ""
      );
      setCanCancel(canCancelRes);
      return;
    } catch (error) {
      return;
    }
  };

  const getAccountExtendDetails = async () => {
    try {
      const accountEDData = await apiAuth.getAccountExtendDetails(
        authState?.access_token ?? ""
      );
      setAccountExtendDetail(accountEDData);
      localStorage.setItem("userId", accountEDData?.id);
      //   mixpanelSetUserId(accountEDData.username);

      return;
    } catch (error) {
      return;
    }
  };

  const handleLogged = (authState?: LoginResponseType) => {
    localStorage.setItem("AQToken", JSON.stringify(authState));
    setAuthState(authState);
  };
  const handleLogOut = () => {
    localStorage.clear();
    setAuthState(null);
  };
  const setTypePaymentAction = (type?: TypePayment) => {
    setTypePayment(type);
  };

  return {
    authState,
    accountExtendDetail,
    handleLogged,
    handleLogOut,
    getAccountExtendDetails,
    canCancel: canCancel,
    getCanCancel,
    typePayment,
    setTypePaymentAction,
  };
};