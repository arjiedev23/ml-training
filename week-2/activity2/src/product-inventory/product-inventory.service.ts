import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductInventoryService {
  constructor (private readonly prismaService: PrismaService){}
  async create(createProductInventoryDto: Prisma.ProductCreateInput) {
    return this.prismaService.product.create({
      data: {
        ProductName: createProductInventoryDto.ProductName,
        ProductDesc: createProductInventoryDto.ProductDesc,
        Price: createProductInventoryDto.Price,
        Type: createProductInventoryDto.Type,
        QTY: createProductInventoryDto.QTY,
        TrackLevel: ""
      }
    })
  }

  async findAll() {
    
    const datas = this.prismaService.product.findMany();

    (await datas).forEach(function (val) {
      if(val.QTY == 0){
        val.TrackLevel = "No Stock";
      } else if (val.QTY <= 15) {
        val.TrackLevel = "Low Stock Level";
      } else if (val.QTY <= 50) {
        val.TrackLevel = "Optimal Level";
      } else if (val.QTY <= 150) {
        val.TrackLevel = "Maximum Level";
      } else {
        val.TrackLevel = "Excess Level";
      }
    })

    return datas;
  }

  async findOne(id: number) {
    return this.prismaService.product.findUnique({
      where: {
        ProductID: id
      }
    })
  }

  async update(id: number, updateProductInventoryDto: Prisma.ProductUpdateInput) {
    return this.prismaService.product.update({
      where: {
        ProductID: id
      },
      data: updateProductInventoryDto
    })
  }

  async remove(id: number) {
    return  this.prismaService.product.delete({
      where: {
        ProductID: id
      }
    })
  }
}
