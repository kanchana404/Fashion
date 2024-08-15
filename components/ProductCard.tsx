import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { SIZE } from "@/constants";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div>
        <Link href={"/"}>
        <Card>
        <Image
          src="/product/p1.jpg"
          alt="product"
          width={300}
          height={300}
          className="rounded-lg"
        />
        <CardHeader className="-ml-2 font-semibold">Product 1</CardHeader>
        <CardContent>
          <p className="-mt-5 ">Lorem ipsum dolor sit amet</p>
          <div className="flex mt-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                {SIZE.map((name, index) => (
                  <SelectItem key={index} value={name}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="ml-4">
                <Button className="bg-yellow-300 text-black hover:bg-yellow-200 ">LKR 5000</Button>
            </div>
          </div>
        </CardContent>
      </Card>
        </Link>
      
    </div>
  );
};

export default ProductCard;
