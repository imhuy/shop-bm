import { toast } from "react-toastify";
import ApiClientBase from "../ApiClientBase";

interface BaseResponse {
  message: string;
  status: string;
}

class ApiProduct extends ApiClientBase {
  constructor() {
    super();
  }

  /**
   * getProduct
   */

  public async allProduct(access_token: string): Promise<BaseResponse | any> {
    const res = await this.instance.get(`/api/products/get-all`, {});
    return res.data;
  }

  public async buyHistory(access_token: string): Promise<BaseResponse | any> {
    const res = await this.instance.get(`/api/products/buy-history`, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });
    return res.data;
  }
}

export default ApiProduct;
