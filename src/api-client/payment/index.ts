import ApiClientBase from "../ApiClientBase";

interface BaseResponse {
  message: string;
  status: string;
}

class ApiPayment extends ApiClientBase {
  constructor() {
    super();
  }

  /**
   * getLinkPayment
   */
  public async checkMoney(access_token: string): Promise<BaseResponse | any> {
    const res = await this.instance.get(`/api/auth/get-user-info`, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });
    return res.data;
  }
}

export default ApiPayment;
