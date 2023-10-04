import { Model } from "mongoose";
import { PropertieDocument } from "../Entities/PropertiesSchema";

interface Filter {
    [key: string]: string;
  }

  type CaseInsensitiveFilter = {
    [key: string]: {
      $regex: string;
      $options: string;
    } | {
      $in: RegExp[];
    }
  }


class PropertieRepository {
    constructor(private model: Model<PropertieDocument>) { }

    async Create(data: PropertieDocument){
        return await this.model.create(data);
    }

    async ListAllProperties(){
        return await this.model.find();
    }

    async FindByCode(code: number){
        return await this.model.find
    }

    
  async Filter(filter: Filter) {
    const caseInsensitiveFilter: CaseInsensitiveFilter = {};
  
    for (const key in filter) {
      const filterValue = filter[key];
  
      if (key === "technology") {
         // Array.isArray(filter[key]) verifica se o valor da chave key no filter é um array.
        // Se for um array ele usa esse array
        // Se for um valor apenas usa ele mas como array ainda sempre sera array
        const technolodyNames = Array.isArray(filterValue) ? filterValue : [filterValue];
  
        // $in: Este operador aceita um array e verifica se pelo menos um deles está em um objeto
        caseInsensitiveFilter[key] = {
          $in: technolodyNames.map(name => new RegExp(`^${name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}$`, 'i')),
        };
      } else {
        caseInsensitiveFilter[key] = {
          $regex: filterValue,
          $options: 'i',
        };
      }
    }
  
    return await this.model.find(caseInsensitiveFilter);
  }

  async FindByName(names: string | string[]) {
    if (!Array.isArray(names)) {
      names = [names]; // Se não for array, transforma em um array com um único elemento
    }
    return await this.model.find({ name: { $in: names.map(name => new RegExp(`^${name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}$`, 'i')) } });
  }


}


export { PropertieRepository}