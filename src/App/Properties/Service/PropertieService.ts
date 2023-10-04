import { PropertieDocument } from "../Entities/PropertiesSchema";
import { MakeErrors } from "../../../Utils/MakeErrors/MakeErrors";
import { STATUS_CODE } from "../../../Utils/StatusCode/STATUS_CODE";

class PropertieService {
    constructor(){}

    async CreatePropertie(data: PropertieDocument){

        // const CodeVerify = await this.repository.VerifyCodes(data.code)
        try {
            
        } catch (error: any) {
            return MakeErrors("Erro interno no servidor", STATUS_CODE.BAD_REQUEST);
        }
    }
}

export {PropertieService}