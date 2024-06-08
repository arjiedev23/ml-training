import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductInventoryService {
  constructor (private readonly prismaService: PrismaService){}
  async create(createProductInventoryDto: Prisma.ProductCreateInput) {
    return this.prismaService.product.create({
      data: createProductInventoryDto
    })
  }

  async findAll() {
    
    const datas = this.prismaService.product.findMany();

    (await datas).forEach(function (val) {
      val.TrackLevel = (val.QTY <= 15) ? "Low Stock Level" : (val.QTY <= 50)? "Optimal Level": (val.QTY <= 150)? "Maximum Level": "Excess Level";
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
