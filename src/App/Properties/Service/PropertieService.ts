import { PropertieDocument } from "../Entities/PropertiesSchema";
import { MakeErrors } from "../../../Utils/MakeErrors/MakeErrors";
import { STATUS_CODE } from "../../../Utils/StatusCode/STATUS_CODE";
import { PropertieRepository } from "../Repository/PropertieRepository";
import { PhotoRepository } from "../../Photos/Repository/PhotoRepository";


interface CreatePropertieDto {
    titulo: string;
    tipo: string;
    codigo: number;
    cidade: string
    UF: string
    descricao: string
    suite: number;
    quartos: number
	vagagaragem: number,
	banheiros: number,
	valorCondominio: number | null,
	IPTU: number | null,
	precoAluguel: number | null,
	precoVenda: number | null,
    files: {
      filename: string;
      mimetype: string;
    }
  }

class PropertieService {
    constructor(
        private repository: PropertieRepository ,
        private photorepository: PhotoRepository,
        ) { }



    async CreatePropertie(data: PropertieDocument & CreatePropertieDto ) {
        let AleatoryCode = Math.floor(10000000 + Math.random() * 90000000);
        console.log("Codigo Aleatorio ", AleatoryCode)
    
        // Garantir que o código seja único
        const VerifyCode = await this.repository.VerifyCode(AleatoryCode)
        if (VerifyCode) {
            AleatoryCode = Math.floor(10000000 + Math.random() * 90000000);
        }
        // Adiciona o código ao objeto antes de criar
        data.codigo = AleatoryCode;

  
        try {
        // Criar a photo
      const PhotosCreated = await this.photorepository.create(data.files)
      if(!Array.isArray(PhotosCreated)){
        return MakeErrors("Erro ao criar a foto", STATUS_CODE.INTERNAL_SERVER_ERROR)  
      }
      
      const photoIds = PhotosCreated.map((photo: { _id: any }) => photo._id) 

      console.log("data: ", data)
      console.log("photo: ", photoIds)

      
      const PropertiePayload = {
        ...data,
       fotos: photoIds
      }
          // Cria a propriedade no banco de dados
            const createdPropertie = await this.repository.Create(PropertiePayload);
            console.log('Propriedade criada com sucesso:', createdPropertie);

           return createdPropertie;
        } catch (error: any) {
            console.error('Erro interno no servidor:', error.message);
            return MakeErrors("Erro interno no servidor", STATUS_CODE.BAD_REQUEST);
        }
    }
    
}

export { PropertieService }